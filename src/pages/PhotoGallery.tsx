import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../data/gallery/galleryImages';

function setUnsplashWidth(url: string, width: number) {
    try {
        const u = new URL(url);
        u.searchParams.set('w', String(width));
        if (!u.searchParams.get('q')) u.searchParams.set('q', '80');
        if (!u.searchParams.get('auto')) u.searchParams.set('auto', 'format');
        if (!u.searchParams.get('fit')) u.searchParams.set('fit', 'crop');
        return u.toString();
    } catch {
        return url;
    }
}

function buildUnsplashSrcSet(url: string, widths: number[]) {
    return widths.map((w) => `${setUnsplashWidth(url, w)} ${w}w`).join(', ');
}

export default function PhotoGallery() {
    const { t } = useLanguage();

    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const imagesPerPage = 12;
    const touchStartXRef = useRef<number | null>(null);
    const touchEndXRef = useRef<number | null>(null);

    const items = useMemo(() => {
        return galleryImages.map((url) => {
            const thumb = setUnsplashWidth(url, 600);
            const full = setUnsplashWidth(url, 1600);
            const srcSet = buildUnsplashSrcSet(url, [320, 480, 640, 800, 960, 1200]);

            return {
                url,
                thumb,
                full,
                srcSet
            };
        });
    }, []);

    const totalPages = Math.ceil(items.length / imagesPerPage);

    const paginatedItems = useMemo(() => {
        const startIndex = (currentPage - 1) * imagesPerPage;
        return items.slice(startIndex, startIndex + imagesPerPage);
    }, [items, currentPage, imagesPerPage]);

    const visiblePages = useMemo(() => {
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const half = Math.floor(maxVisiblePages / 2);

        let startPage = Math.max(currentPage - half, 1);
        let endPage = startPage + maxVisiblePages - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - maxVisiblePages + 1, 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }, [currentPage, totalPages]);

    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedImageIndex]);

    useEffect(() => {
        if (selectedImageIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedImageIndex(null);
                return;
            }

            if (e.key === 'ArrowRight') {
                setSelectedImageIndex((prev) => {
                    if (prev === null) return prev;
                    return (prev + 1) % items.length;
                });
                return;
            }

            if (e.key === 'ArrowLeft') {
                setSelectedImageIndex((prev) => {
                    if (prev === null) return prev;
                    return (prev - 1 + items.length) % items.length;
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImageIndex, items.length]);

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();

        setSelectedImageIndex((prev) => {
            if (prev === null) return prev;
            return (prev + 1) % items.length;
        });
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();

        setSelectedImageIndex((prev) => {
            if (prev === null) return prev;
            return (prev - 1 + items.length) % items.length;
        });
    };

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;

        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLightboxTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartXRef.current = e.targetTouches[0].clientX;
        touchEndXRef.current = null;
    };

    const handleLightboxTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndXRef.current = e.targetTouches[0].clientX;
    };

    const handleLightboxTouchEnd = () => {
        const startX = touchStartXRef.current;
        const endX = touchEndXRef.current;

        if (startX === null || endX === null) return;

        const distance = startX - endX;
        const minSwipeDistance = 40;

        if (distance > minSwipeDistance) {
            setSelectedImageIndex((prev) => {
                if (prev === null) return prev;
                return (prev + 1) % items.length;
            });
        } else if (distance < -minSwipeDistance) {
            setSelectedImageIndex((prev) => {
                if (prev === null) return prev;
                return (prev - 1 + items.length) % items.length;
            });
        }

        touchStartXRef.current = null;
        touchEndXRef.current = null;
    };

    const LCP_INDEX = 0;

    return (
        <div className="bg-white dark:bg-[#111827] h-auto md:min-h-screen pt-24 pb-2 md:pb-16 transition-colors duration-300">
            <div className="bg-[#111827] dark:bg-white text-white dark:text-black py-4 md:py-16 mb-12 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-12 text-center">
                    <h1 className="text-lg md:text-4xl font-bold mb-4">{t('menu.gallery')}</h1>

                    <div className="text-xs md:text-sm text-gray-400 dark:text-gray-600 flex items-center justify-center gap-2 uppercase tracking-wider">
                        <Link to="/" className="hover:text-white dark:hover:text-black transition-colors">
                            {t('menu.home')}
                        </Link>
                        <span>/</span>
                        <span className="text-white dark:text-black">{t('menu.gallery')}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {paginatedItems.map((item, index) => {
                        const globalIndex = (currentPage - 1) * imagesPerPage + index;
                        const isLcp = globalIndex === LCP_INDEX;

                        return (
                            <motion.div
                                key={`${item.url}-${globalIndex}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: Math.min(index * 0.03, 0.25) }}
                                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-100 dark:bg-neutral-800"
                                onClick={() => openLightbox(globalIndex)}
                            >
                                <img
                                    src={item.thumb}
                                    srcSet={item.srcSet}
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 260px"
                                    alt={`Gallery Image ${globalIndex + 1}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    width={600}
                                    height={600}
                                    loading={isLcp ? 'eager' : 'lazy'}
                                    decoding="async"
                                    fetchPriority={isLcp ? 'high' : 'low'}
                                    referrerPolicy="no-referrer"
                                    draggable={false}
                                />

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <ZoomIn className="text-white" size={32} aria-hidden="true" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {totalPages > 1 && (
                    <div className="mt-8 lg:mt-12 flex justify-center items-center gap-1.5 sm:gap-2 lg:gap-3">
                        <button
                            aria-label="Önceki sayfa"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                currentPage === 1
                                    ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-[#111827] dark:hover:bg-neutral-700 hover:text-white hover:shadow-md'
                            }`}
                            type="button"
                        >
                            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                        </button>

                        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 p-1 rounded-full">
                            {visiblePages[0] > 1 && (
                                <>
                                    <button
                                        aria-label="Sayfa 1"
                                        onClick={() => handlePageChange(1)}
                                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-xs sm:text-sm md:text-base rounded-full flex items-center justify-center font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:text-[#009FE3] dark:hover:text-white"
                                        type="button"
                                    >
                                        1
                                    </button>

                                    {visiblePages[0] > 2 && (
                                        <span className="px-1 text-gray-400 dark:text-gray-500 select-none">...</span>
                                    )}
                                </>
                            )}

                            {visiblePages.map((page) => (
                                <button
                                    aria-label={`Sayfa ${page}`}
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-xs sm:text-sm md:text-base rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                                        currentPage === page
                                            ? 'bg-[#111827] dark:bg-white text-white dark:text-black font-bold shadow-md transform scale-105'
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:text-[#009FE3] dark:hover:text-white hover:shadow-sm'
                                    }`}
                                    type="button"
                                >
                                    {page}
                                </button>
                            ))}

                            {visiblePages[visiblePages.length - 1] < totalPages && (
                                <>
                                    {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                                        <span className="px-1 text-gray-400 dark:text-gray-500 select-none">...</span>
                                    )}

                                    <button
                                        aria-label={`Sayfa ${totalPages}`}
                                        onClick={() => handlePageChange(totalPages)}
                                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-xs sm:text-sm md:text-base rounded-full flex items-center justify-center font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:text-[#009FE3] dark:hover:text-white"
                                        type="button"
                                    >
                                        {totalPages}
                                    </button>
                                </>
                            )}
                        </div>

                        <button
                            aria-label="Sonraki sayfa"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                currentPage === totalPages
                                    ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-[#111827] dark:hover:bg-neutral-700 hover:text-white hover:shadow-md'
                            }`}
                            type="button"
                        >
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50 p-2"
                            onClick={closeLightbox}
                            aria-label="Kapat"
                            title="Kapat"
                            type="button"
                        >
                            <X size={32} aria-hidden="true" />
                        </button>

                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-40 "
                            onClick={prevImage}
                            aria-label="Önceki"
                            title="Önceki"
                            type="button"
                        >
                            <ChevronLeft size={48} aria-hidden="true" />
                        </button>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-40 "
                            onClick={nextImage}
                            aria-label="Sonraki"
                            title="Sonraki"
                            type="button"
                        >
                            <ChevronRight size={48} aria-hidden="true" />
                        </button>

                        <div
                            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                            onTouchStart={handleLightboxTouchStart}
                            onTouchMove={handleLightboxTouchMove}
                            onTouchEnd={handleLightboxTouchEnd}
                        >
                            <motion.img
                                key={selectedImageIndex}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.22 }}
                                src={items[selectedImageIndex].full}
                                alt={`Gallery Preview ${selectedImageIndex + 1}`}
                                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl select-none"
                                loading="eager"
                                decoding="async"
                                fetchPriority="high"
                                referrerPolicy="no-referrer"
                                draggable={false}
                            />
                        </div>

                        <div className="absolute bottom-4 left-0 w-full text-center text-white text-sm tracking-widest">
                            {selectedImageIndex + 1} / {items.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}