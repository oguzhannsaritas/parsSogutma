import React, { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const galleryImages = [
    "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1571175443880-49e1d25b79b1?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1606859191214-25806e8e2423?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200"
];

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
    return widths.map(w => `${setUnsplashWidth(url, w)} ${w}w`).join(', ');
}

export default function PhotoGallery() {
    const { t } = useLanguage();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const items = useMemo(() => {
        return galleryImages.map((url) => {
            const thumb = setUnsplashWidth(url, 600);
            const full = setUnsplashWidth(url, 1600);
            const srcSet = buildUnsplashSrcSet(url, [320, 480, 640, 800, 960, 1200]);
            return { url, thumb, full, srcSet };
        });
    }, []);

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % items.length : null));
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
        }
    };

    const LCP_INDEX = 0;

    return (
        <div className="bg-white dark:bg-[#111827] h-auto md:min-h-screen pt-24 pb-2 md:pb-16 transition-colors duration-300">
            <div className="bg-[#111827] dark:bg-white text-white dark:text-black py-4 md:py-16 mb-12 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-12 text-center">
                    <h1 className="text-lg md:text-4xl font-bold mb-4">{t('menu.gallery')}</h1>
                    <div className="text-xs md:text-sm text-gray-400 dark:text-gray-600 flex items-center justify-center gap-2 uppercase tracking-wider">
                        <Link to="/" className="hover:text-white dark:hover:text-black transition-colors">{t('menu.home')}</Link>
                        <span>/</span>
                        <span className="text-white dark:text-black">{t('menu.gallery')}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => {
                        const isLcp = index === LCP_INDEX;

                        return (
                            <motion.div
                                key={`${item.url}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: Math.min(index * 0.03, 0.25) }}
                                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-100 dark:bg-neutral-800"
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    src={item.thumb}
                                    srcSet={item.srcSet}
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 260px"
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    width={600}
                                    height={600}
                                    loading={isLcp ? "eager" : "lazy"}
                                    decoding="async"
                                    fetchPriority={isLcp ? "high" : "low"}
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
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 hidden md:block"
                            onClick={prevImage}
                            aria-label="Önceki"
                            title="Önceki"
                            type="button"
                        >
                            <ChevronLeft size={48} aria-hidden="true" />
                        </button>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 hidden md:block"
                            onClick={nextImage}
                            aria-label="Sonraki"
                            title="Sonraki"
                            type="button"
                        >
                            <ChevronRight size={48} aria-hidden="true" />
                        </button>

                        <div
                            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                key={selectedImageIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                src={items[selectedImageIndex].full}
                                alt="Gallery Preview"
                                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
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