import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NotFound() {
    const { t } = useLanguage();

    useEffect(() => {
        // Update document title for SEO
        document.title = t('notfound.meta.title');

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', t('notfound.meta.desc'));

        // Add noindex meta tag to prevent search engines from indexing the 404 page
        let metaRobots = document.querySelector('meta[name="robots"]');
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.setAttribute('name', 'robots');
            document.head.appendChild(metaRobots);
        }
        metaRobots.setAttribute('content', 'noindex, follow');

        // Cleanup function to restore default meta tags when leaving the page
        return () => {
            document.title = "Pars Soğutma Sistemleri";
            metaDescription?.setAttribute('content', 'Pars Soğutma Sistemleri - Endüstriyel Soğutma Çözümleri');
            metaRobots?.remove();
        };
    }, [t]);

    return (
        <main className="min-h-[calc(100vh-80px)] bg-[#f8f9fa] dark:bg-[#111827] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 mb-20  transition-colors duration-300">
            <div className="max-w-3xl w-full text-center space-y-6 sm:space-y-8">
                {/* 404 Graphic */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <h1 className="text-[150px] sm:text-9xl md:text-[20rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-gray-50 dark:from-blue-950 dark:to-gray-50  opacity-20 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                {t('notfound.title')}
                            </h2>
                        </div>
                    </div>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-4 px-2 sm:px-0"
                >
                    <p className="text-xs md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t('notfound.desc')}
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4"
                >
                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        aria-label={t('notfound.back')}
                    >
                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{t('notfound.back')}</span>
                    </button>

                    <Link
                        to="/"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white dark:text-black dark:bg-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-md  transition-colors focus:ring-2  focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:outline-none"
                        aria-label={t('notfound.home')}
                    >
                        <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{t('notfound.home')}</span>
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
