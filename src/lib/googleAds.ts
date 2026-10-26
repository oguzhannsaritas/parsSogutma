import type { MouseEvent } from 'react';

type ContactMethod = 'whatsapp' | 'phone';

const conversionTargets: Record<ContactMethod, string> = {
    whatsapp: 'AW-300255429/339KCNudgeIYEMWRlo8B',
    phone: 'AW-300255429/6ADOCOjoheIYEMWRlo8B',
};

type ConversionParameters = {
    send_to: string;
    event_callback?: () => void;
    event_timeout: number;
};

type GoogleAdsWindow = Window & {
    gtag?: (command: 'event', name: 'conversion', parameters: ConversionParameters) => void;
};

export function trackContactClick(event: MouseEvent<HTMLAnchorElement>, method: ContactMethod) {
    const gtag = (window as GoogleAdsWindow).gtag;
    if (event.defaultPrevented || typeof gtag !== 'function') return;

    const link = event.currentTarget;
    const opensAnotherContext = (link.target && link.target !== '_self') ||
        event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0;

    let onTracked: (() => void) | undefined;

    // Keep new-tab links synchronous so browsers do not block WhatsApp as a popup.
    if (!opensAnotherContext) {
        event.preventDefault();
        const destination = link.href;
        let navigated = false;

        onTracked = () => {
            if (navigated) return;
            navigated = true;
            window.clearTimeout(fallbackTimer);
            window.location.assign(destination);
        };

        // Continue to the phone app even if an ad blocker prevents the callback.
        const fallbackTimer = window.setTimeout(onTracked, 1000);
    }

    try {
        gtag('event', 'conversion', {
            send_to: conversionTargets[method],
            event_callback: onTracked,
            event_timeout: 1000,
        });
    } catch {
        // A tracking failure must never prevent someone from contacting us.
        onTracked?.();
    }
}
