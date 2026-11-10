import { GA4_MEASUREMENT_ID } from './analyticsConfig';

type ContactMethod = 'whatsapp' | 'phone';
type GoogleTag = (...args: unknown[]) => void;
type AnalyticsBrowser = {
    gtag?: GoogleTag;
    location: { pathname: string };
};

/** Reuse the existing Google tag. GA4 enhanced measurement owns page views,
 * including React Router history changes; do not add a second page-view sender.
 */
export function createAnalytics(measurementId: string, browser?: AnalyticsBrowser) {
    let initialized = false;
    const validId = /^G-[A-Z0-9]+$/.test(measurementId);

    function initialize(): boolean {
        if (!validId || !browser || typeof browser.gtag !== 'function') return false;
        if (initialized) return true;
        try {
            browser.gtag('config', measurementId, {
                allow_google_signals: false,
                allow_ad_personalization_signals: false,
            });
            initialized = true;
            return true;
        } catch {
            return false;
        }
    }

    function contact(method: ContactMethod): void {
        if (!initialize()) return;
        try {
            browser!.gtag!('event', `${method}_click`, {
                send_to: measurementId,
                contact_method: method,
                // No WhatsApp message, form values, phone number or query string.
                page_path: browser!.location.pathname,
            });
        } catch {
            // Measurement must never interrupt a call, WhatsApp or Ads tracking.
        }
    }

    return { initialize, contact };
}

const analytics = createAnalytics(
    GA4_MEASUREMENT_ID,
    typeof window === 'undefined' ? undefined : window as unknown as AnalyticsBrowser,
);

export const initializeAnalytics = analytics.initialize;
export const trackAnalyticsContact = analytics.contact;
