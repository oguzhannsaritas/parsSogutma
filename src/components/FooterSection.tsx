import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowUp,
    Youtube,
    MapPin,
    Phone,
    Mail,
    ChevronDown,
    LucideMessageCircleMore
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type OpenId = 'kurumsal' | 'urunler' | 'iletisim' | null;

export default function FooterSection() {
    const { t } = useLanguage();
    const [open, setOpen] = React.useState<OpenId>(null);

    // ✅ YouTube video (watch: https://www.youtube.com/watch?v=oZmSKiyZ7zM)
    // İstersen privacy için: https://www.youtube-nocookie.com/embed/...
    const YT_EMBED_URL = 'https://www.youtube.com/embed/oZmSKiyZ7zM?rel=0&modestbranding=1';

    // ✅ YouTube iframe'i görünür olana kadar yükleme
    const ytRef = useRef<HTMLDivElement | null>(null);
    const [ytVisible, setYtVisible] = useState(false);

    useEffect(() => {
        if (!ytRef.current) return;

        const io = new IntersectionObserver(
            (entries) => {
                const e = entries[0];
                if (e && e.isIntersecting) {
                    setYtVisible(true);
                    io.disconnect();
                }
            },
            { rootMargin: '400px 0px' } // footer'a yaklaşınca başlasın
        );

        io.observe(ytRef.current);
        return () => io.disconnect();
    }, []);

    const ToggleHeader = ({ id, title }: { id: Exclude<OpenId, null>; title: string }) => {
        const isOpen = open === id;
        return (
            <button
                type="button"
                onClick={() => setOpen(isOpen ? null : id)}
                className="w-full flex items-center justify-between py-4 text-left"
                aria-expanded={isOpen}
                aria-controls={`footer-panel-${id}`}
            >
                <span className="font-bold text-white text-base">{title}</span>
                <ChevronDown
                    size={18}
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                />
            </button>
        );
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="w-full bg-white dark:bg-[#111827] transition-colors duration-300">
            {/* Visit Us Section */}
            <div className="container mx-auto px-4 md:px-12 py-4 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            {t('footer.visit')}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-200 text-sm lg:text-lg">
                            {t('footer.desc')}
                        </p>
                    </div>

                    {/* ✅ YouTube: görünür olunca yükle (layout aynı kalır) */}
                    <div
                        ref={ytRef}
                        className="relative w-full aspect-video overflow-hidden rounded-lg shadow-xl bg-black"
                    >
                        {ytVisible ? (
                            <iframe
                                className="w-full h-full"
                                src={YT_EMBED_URL}
                                title="Pars Soğutma YouTube"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        ) : (
                            // Placeholder: aynı boyut, sıfır YouTube yükü
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="flex items-center gap-2 text-white/80">
                                    <Youtube size={22} aria-hidden="true" />
                                    <span className="text-sm font-medium">Video yükleniyor…</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <footer className="bg-[#111827] text-white pt-10 md:pt-24 pb-4 md:pb-8 relative mt-20">
                {/* Wavy Background Top */}
                <div className="absolute top-2 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
                    <svg viewBox="0 0 1440 320" className="w-full h-[100px] md:h-[200px] block" preserveAspectRatio="none">
                        <path fill="#334155" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,197.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        <path fill="#1e293b" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        <path fill="#111827" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>

                <div className="container mx-auto px-4 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 mb-16">
                        {/* Column 1: Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-1">
                                <img
                                    src="/images/home/parsLogo.webp"
                                    alt="PARS SOĞUTMA"
                                    className="h-12 object-contain invert hue-rotate-180 transition-all duration-300"
                                    width={250}
                                    height={450}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <p className="text-gray-300 lg:text-sm text-xs leading-relaxed font-medium">
                                {t('pars.footer.info')}
                            </p>
                        </div>

                        {/* Column 2: Kurumsal */}
                        <div>
                            {/* Desktop */}
                            <div className="hidden md:block">
                                <h3 className="font-bold text-white text-lg mb-6 border-b border-gray-600 pb-2 inline-block">
                                    {t('pars.footer.corporate')}
                                </h3>
                                <ul className="space-y-4 text-gray-300 text-xs lg:text-sm font-medium">
                                    <li><Link to="/" className="hover:text-white transition-colors">{t('pars.footer.home')}</Link></li>
                                    <li><Link to="/corporate" className="hover:text-white transition-colors">{t('pars.footer.about')}</Link></li>
                                    <li><Link to="/products" className="hover:text-white transition-colors">{t('pars.footer.products')}</Link></li>
                                    <li><Link to="/contact" className="hover:text-white transition-colors">{t('pars.footer.telephone')}</Link></li>
                                </ul>
                            </div>

                            {/* Mobile */}
                            <div className="md:hidden">
                                <ToggleHeader id="kurumsal" title={t('pars.footer.corporate')} />

                                <div
                                    id="footer-panel-kurumsal"
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        open === 'kurumsal' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div>
                                            <ul className="space-y-3 text-gray-300 text-sm font-medium">
                                                <li><Link to="/" className="block py-1 hover:text-white transition-colors">{t('pars.footer.home')}</Link></li>
                                                <li><Link to="/corporate" className="block py-1 hover:text-white transition-colors">{t('pars.footer.about')}</Link></li>
                                                <li><Link to="/products" className="block py-1 hover:text-white transition-colors">{t('pars.footer.products')}</Link></li>
                                                <li><Link to="/contact" className="block py-1 hover:text-white transition-colors">{t('pars.footer.telephone')}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Ürünlerimiz */}
                        <div>
                            {/* Desktop */}
                            <div className="hidden md:block">
                                <h3 className="font-bold text-white text-lg mb-6 border-b border-gray-600 pb-2 inline-block">
                                    {t('pars.footer.products')}
                                </h3>
                                <ul className="space-y-4 text-gray-300 text-xs lg:text-sm font-medium">
                                    <li><Link to="#" className="hover:text-white transition-colors">{t('pars.footer.deepFreezers')}</Link></li>
                                    <li><Link to="#" className="hover:text-white transition-colors">{t('pars.footer.deepFreezers')}</Link></li>
                                    <li><Link to="#" className="hover:text-white transition-colors">{t('pars.footer.cake')}</Link></li>
                                    <li><Link to="#" className="hover:text-white transition-colors">{t('pars.footer.promotions')}</Link></li>
                                    <li><Link to="#" className="hover:text-white transition-colors">{t('pars.footer.semiVertical')}</Link></li>
                                    <li><Link to="#" className="hover:text-white transition-colors">{t('pars.footer.horizontal')}</Link></li>
                                </ul>
                            </div>

                            {/* Mobile */}
                            <div className="md:hidden">
                                <ToggleHeader id="urunler" title={t('pars.footer.products')} />

                                <div
                                    id="footer-panel-urunler"
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        open === 'urunler'
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div>
                                            <ul className="space-y-3 text-gray-300 text-sm font-medium">
                                                <li><Link to="#" className="block py-1 hover:text-white transition-colors">{t('pars.footer.deepFreezers')}</Link></li>
                                                <li><Link to="#" className="block py-1 hover:text-white transition-colors">{t('pars.footer.vertical')}</Link></li>
                                                <li><Link to="#" className="block py-1 hover:text-white transition-colors">{t('pars.footer.cake')}</Link></li>
                                                <li><Link to="#" className="block py-1 hover:text-white transition-colors">{t('pars.footer.promotions')}</Link></li>
                                                <li><Link to="#" className="block py-1 hover:text-white transition-colors">{t('pars.footer.semiVertical')}</Link></li>
                                                <li><Link to="#" className="block py-1 hover:text-white transition-colors">{t('pars.footer.horizontal')}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 4: İletişim Bilgilerimiz */}
                        <div>
                            {/* Desktop */}
                            <div className="hidden md:block">
                                <h3 className="font-bold text-white text-lg mb-6 border-gray-600 pb-2 inline-block">
                                    {t('pars.footer.contact')}
                                </h3>
                                <ul className="space-y-6 text-gray-300 text-sm font-medium">
                                    <li className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white text-[#0f172a] flex items-center justify-center flex-shrink-0">
                                            <MapPin size={16} aria-hidden="true" />
                                        </div>
                                        <span className="mt-1 text-xs lg:text-sm">{t('pars.footer.adress')}</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white text-[#0f172a] flex items-center justify-center flex-shrink-0">
                                            <Phone size={16} aria-hidden="true" />
                                        </div>

                                        <div className="flex flex-col items-center leading-tight">
                                            <span className="text-xs lg:text-sm mb-1">+90 543 170 72 77</span>
                                            <span className="text-xs lg:text-sm">+90 537 645 82 91</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white text-[#0f172a] flex items-center justify-center flex-shrink-0">
                                            <Mail size={16} aria-hidden="true" />
                                        </div>
                                        <span className="text-xs lg:text-sm">info@parsogutma.com</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white text-[#0f172a] flex items-center justify-center flex-shrink-0">
                                            <LucideMessageCircleMore size={16} aria-hidden="true" />
                                        </div>
                                        <span className="text-xs lg:text-sm">+90 543 170 72 77</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Mobile */}
                            <div className="md:hidden">
                                <ToggleHeader id="iletisim" title={t('pars.footer.telephone')} />

                                <div
                                    id="footer-panel-iletisim"
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        open === 'iletisim'
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div>
                                            <ul className="space-y-4 text-gray-300 text-sm font-medium">
                                                <li className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-white text-[#0f172a] flex items-center justify-center flex-shrink-0">
                                                        <MapPin size={16} aria-hidden="true" />
                                                    </div>
                                                    <span className="mt-1">{t('pars.footer.adress')}</span>
                                                </li>

                                                <li className="flex items-center gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-white text-[#0f172a] flex items-center justify-center flex-shrink-0">
                                                        <Phone size={16} aria-hidden="true" />
                                                    </div>

                                                    <div className="flex flex-col items-center leading-tight">
                                                        <span className="text-xs lg:text-sm mb-1">+90 543 170 72 77</span>
                                                        <span className="text-xs lg:text-sm">+90 537 645 82 91</span>
                                                    </div>
                                                </li>

                                                <li className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-white text-[#0f172a] flex items-center justify-center flex-shrink-0">
                                                        <Mail size={16} aria-hidden="true" />
                                                    </div>
                                                    <span>info@parsogutma.com</span>
                                                </li>

                                                <li className="flex items-center gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-white text-[#0f172a] flex items-center justify-center flex-shrink-0">
                                                        <LucideMessageCircleMore size={16} aria-hidden="true" />
                                                    </div>
                                                    <span className="text-xs lg:text-sm">+90 543 170 72 77</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center text-xs text-gray-400">
                        <p>{t('pars.footer')}</p>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="absolute bottom-8 right-8 w-10 h-10 bg-white text-[#0f172a] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg z-20"
                    type="button"
                    aria-label="Back to top"
                    title="Back to top"
                >
                    <ArrowUp size={20} aria-hidden="true" />
                </button>
            </footer>
        </section>
    );
}