import { MessageCircle, Phone } from 'lucide-react';
import type { CatalogLanguage } from '../data/catalog';
import { trackContactClick } from '../lib/googleAds';

const buttonClass = 'inline-flex min-h-12 flex-auto items-center justify-center gap-2 rounded-lg px-4 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/35 ring-inset transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pars-blue sm:flex-none';

export default function ContactActions({ subject, language }: { subject: string; language: CatalogLanguage }) {
    const tr = language === 'TR';
    const message = tr
        ? `Merhaba, ${subject} için bilgi ve teklif almak istiyorum.`
        : `Hello, I would like information and a quote for ${subject}.`;

    return (
        <div className="flex flex-wrap gap-3">
            <a
                href={`https://wa.me/905431707277?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={event => trackContactClick(event, 'whatsapp')}
                className={`${buttonClass} bg-pars-whatsapp hover:bg-[#0d6937]`}
            >
                <MessageCircle size={18} className="shrink-0" aria-hidden="true" />
                {tr ? 'WhatsApp ile teklif alın' : 'Request a quote on WhatsApp'}
            </a>
            <a
                href="tel:+905431707277"
                onClick={event => trackContactClick(event, 'phone')}
                className={`${buttonClass} bg-pars-call hover:bg-[#12549d]`}
            >
                <Phone size={17} className="shrink-0" aria-hidden="true" />
                {tr ? 'Bizi arayın' : 'Call us'}
            </a>
        </div>
    );
}
