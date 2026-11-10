import assert from 'node:assert/strict';
import { createAnalytics } from '../src/lib/analytics';
import { trackContactClick } from '../src/lib/googleAds';

const calls: unknown[][] = [];
const browser = {
    gtag: (...args: unknown[]) => calls.push(args),
    location: { pathname: '/products/59', search: '?text=private-message&email=visitor@example.com' },
};
const analytics = createAnalytics('G-TEST12345', browser);
analytics.initialize();
analytics.initialize();
assert.equal(calls.length, 1, 'Repeated initialization must not duplicate GA4 configuration/page views');
assert.equal(calls[0][0], 'config');
analytics.contact('whatsapp');
analytics.contact('phone');
assert.equal(calls.length, 3);
assert.deepEqual(calls.slice(1).map(call => call[1]), ['whatsapp_click', 'phone_click']);
for (const call of calls.slice(1)) {
    const parameters = call[2] as Record<string, unknown>;
    assert.equal(parameters.send_to, 'G-TEST12345', 'GA4 click events must not be routed to Ads');
    assert.equal(parameters.page_path, '/products/59');
    assert(!JSON.stringify(call).includes('private-message'));
    assert(!JSON.stringify(call).includes('visitor@example.com'));
    assert.notEqual(call[1], 'generate_lead', 'A contact click is not a completed lead');
}
const before = calls.length;
for (const invalidId of ['', 'AW-300255429', 'not-a-measurement-id']) {
    const inactive = createAnalytics(invalidId, browser);
    inactive.initialize();
    inactive.contact('phone');
}
assert.equal(calls.length, before, 'Absent/unverified GA4 configuration must stay disabled');
assert.doesNotThrow(() => createAnalytics('G-TEST12345').contact('whatsapp'), 'Server rendering must not require a browser');
assert.doesNotThrow(() => createAnalytics('G-TEST12345', { location: { pathname: '/' } }).contact('phone'), 'A blocked/missing tag must not break contact actions');
assert.doesNotThrow(() => createAnalytics('G-TEST12345', { gtag() { throw new Error('blocked'); }, location: { pathname: '/' } }).contact('phone'));

// Preserve existing Ads routing and navigation, including modifier/new-tab clicks.
const adsCalls: unknown[][] = [];
const destinations: string[] = [];
let fallback: (() => void) | undefined;
const testWindow = {
    gtag: (...args: unknown[]) => adsCalls.push(args),
    location: { pathname: '/products/59', assign: (href: string) => destinations.push(href) },
    setTimeout: (callback: () => void) => { fallback = callback; return 1; },
    clearTimeout: () => {},
};
Object.defineProperty(globalThis, 'window', { configurable: true, value: testWindow });
let prevented = false;
const click = {
    defaultPrevented: false,
    currentTarget: { target: '_blank', href: 'https://wa.me/905431707277?text=private-message' },
    preventDefault() { prevented = true; },
    ctrlKey: false, metaKey: false, shiftKey: false, altKey: false, button: 0,
};
trackContactClick(click as any, 'whatsapp');
assert(!prevented, 'WhatsApp new-tab navigation must remain synchronous');
assert.equal((adsCalls[0][2] as any).send_to, 'AW-300255429/339KCNudgeIYEMWRlo8B');
const count = adsCalls.length;
trackContactClick({ ...click, defaultPrevented: true } as any, 'whatsapp');
assert.equal(adsCalls.length, count, 'Cancelled or dragged links must not create conversions');
trackContactClick({ ...click, currentTarget: { target: '', href: 'tel:+905431707277' } } as any, 'phone');
assert(prevented);
const phone = adsCalls.at(-1)![2] as any;
assert.equal(phone.send_to, 'AW-300255429/6ADOCOjoheIYEMWRlo8B');
phone.event_callback();
fallback?.();
assert.deepEqual(destinations, ['tel:+905431707277'], 'Callback and timeout must navigate at most once');
delete (globalThis as any).window;
console.log('Analytics checks passed: idempotent setup, separate contact clicks, GA4-only routing, no message/query data, graceful missing/blocked tags; existing Ads conversions, cancelled clicks and navigation preserved.');
