import { trackContactClick } from './googleAds';

const installed = new WeakSet<Document>();
export function installContactTracking(doc: Document): void {
    if (installed.has(doc)) return;
    installed.add(doc);
    // Bubble after React: cancelled/dragged clicks stay cancelled, while the
    // shared native-event guard prevents a second conversion after hydration.
    doc.addEventListener('click', event => {
        if (event.defaultPrevented || !(event.target instanceof Element)) return;
        const anchor = event.target.closest('a[href]') as HTMLAnchorElement | null;
        if (!anchor) return;
        const href = anchor.getAttribute('href') ?? '';
        const method = /^tel:/i.test(href) ? 'phone'
            : /^https:\/\/(?:wa\.me|api\.whatsapp\.com)\//i.test(href) ? 'whatsapp' : undefined;
        if (!method) return;
        trackContactClick({
            nativeEvent: event, currentTarget: anchor,
            defaultPrevented: event.defaultPrevented, preventDefault: () => event.preventDefault(),
            ctrlKey: event.ctrlKey, metaKey: event.metaKey, shiftKey: event.shiftKey,
            altKey: event.altKey, button: event.button,
        }, method);
    });
}
