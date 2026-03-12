import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CategoriesSection() {
    const { t } = useLanguage();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const categories = [
        { title: t('menu.serviceAisles'), image: "/images/home/servisx.webp" },
        { title: t('menu.verticalCooling'), image: "/images/home/dikeyTip.webp" },
        { title: t('menu.wallCooling'), image: "/images/home/duvarTipix.webp" },
        { title: t('menu.bakery'), image: "/images/home/unluMamullx.webp" },
        { title: t('menu.industrialKitchen'), image: "/images/home/endustriyel-mutfak-home.webp" },
        { title: t('menu.marketEquip'), image: "/images/home/marketx.webp" },
        { title: t('menu.coolingSystems'),  image: "/images/home/sogutma.webp" },
        { title: t('menu.coolingAisles'),  image: "/images/home/sogutmaliReyon.webp"  },
        { title: t('menu.coldStorage'),  image:'/images/home/sogukHava2.webp' },
    ];

    const totalPages = Math.ceil(categories.length / itemsPerPage);
    const currentCategories = categories.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <section className="w-full bg-white dark:bg-[#111827] py-4 md:py-16 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-12">
                <h2 className="text-center text-[15px] md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-12 uppercase tracking-wide">
                    {t('cat.title')}
                </h2>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid  grid-cols-2 lg:grid-cols-4  gap-4 md:gap-8"
                    >
                        {currentCategories.map((cat, index) => (
                            <Link to="/products" key={index} className="flex flex-col items-center group cursor-pointer">
                                <div className="w-full bg-gray-100 aspect-[4/3] overflow-hidden mb-2 md:mb-4 border rounded-lg border-gray-200 dark:border-neutral-700">
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-[10px] md:text-sm font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider text-center transition-colors">
                                    {cat.title}
                                </h3>
                            </Link>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <div className="mt-12 flex justify-center items-center gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Previous Page"
                        title="Previous Page"
                        className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            aria-label="Current page"
                            title="Current page"
                            onClick={() => handlePageChange(page)}
                            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                                currentPage === page
                                    ? 'bg-black dark:bg-white dark:text-black font-bold text-white'
                                    : 'text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        aria-label="Next Page"
                        title="Next Page"
                        className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}