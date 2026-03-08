import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function PageLoader() {
    const { t } = useLanguage();

    useEffect(() => {
        if (typeof document === 'undefined') return;

        const lcpUrl = '/images/home/parsLogo.webp';
        const existing = document.querySelector(`link[data-lcp-preload="page-loader"][href="${lcpUrl}"]`);
        if (existing) return;

        const link = document.createElement('link');
        link.setAttribute('rel', 'preload');
        link.setAttribute('as', 'image');
        link.setAttribute('href', lcpUrl);
        link.setAttribute('type', 'image/webp');
        link.setAttribute('fetchpriority', 'high');
        link.setAttribute('data-lcp-preload', 'page-loader');

        document.head.appendChild(link);

        return () => {
            try {
                document.head.removeChild(link);
            } catch {
                // ignore
            }
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-white dark:bg-[#111827] flex flex-col items-center justify-center transition-colors duration-300"
        >
            <div className="relative">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Logo Section */}
                    <div className="flex items-center justify-center mb-8">
                        <motion.img
                            src="/images/home/parsLogo.webp"
                            alt="PARS SOĞUTMA"
                            className="h-24 object-contain dark:invert dark:hue-rotate-180 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            // ✅ Loader’da doğru olan: eager (lazy değil)
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                        />
                    </div>

                    {/* Progress Bar */}
                    <div className="h-[3px] w-64 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-[#009FE3]"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="text-xs tracking-[0.4em] text-gray-400 dark:text-gray-500 uppercase mt-6 font-medium"
                    >
                        {t('loader.tagline')}
                    </motion.span>
                </motion.div>
            </div>
        </motion.div>
    );
}