import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from './References';

export default function ReferenceDetail() {
    const { t } = useLanguage();
    const { id } = useParams();
    const navigate = useNavigate();
    const project = useMemo(() => projects.find((p) => p.id === id), [id]);
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const isMobile = typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false;

    if (!project) {
        return (
            <div className="min-h-screen pt-32 text-center bg-white dark:bg-neutral-900 text-black dark:text-white">
                <h1 className="text-2xl font-bold">{t('references.notFound')}</h1>
                <button onClick={() => navigate('/references')} className="mt-4 text-blue-600 hover:underline">
                    {t('references.back')}
                </button>
            </div>
        );
    }

    const total = project.images.length;
    const openAt = (index: number) => {
        setActiveIndex(index);
        setIsOpen(true);
    };
    const close = () => setIsOpen(false);
    const prev = () => {
        setActiveIndex((i) => (i - 1 + total) % total);
    };
    const next = () => {
        setActiveIndex((i) => (i + 1) % total);
    };
    const SWIPE_DISTANCE = 80;
    const SWIPE_VELOCITY = 500;
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, total]);

    useEffect(() => {
        if (!isOpen) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = original;
        };
    }, [isOpen]);

    return (
        <div className="bg-white dark:bg-[#111827] h-auto md:min-h-screen pt-24 pb-16 transition-colors duration-300">
            <div className="bg-[#111827] dark:bg-white text-white dark:text-black py-4 md:py-16 mb-12">
                <div className="container mx-auto px-4 md:px-12 text-center">
                    <h1 className="text-lg md:text-4xl font-bold mb-4">{project.title}</h1>
                    <div className="text-xs md:text-sm text-gray-400 flex items-center justify-center gap-2 uppercase tracking-wider">
                        <span
                            className="cursor-pointer hover:text-white dark:hover:text-black"
                            onClick={() => navigate('/')}
                        >
                            {t('menu.home')}
                        </span>
                        <span>/</span>
                        <span
                            className="cursor-pointer hover:text-white dark:hover:text-black"
                            onClick={() => navigate('/references')}
                        >
                            {project.title}
                        </span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                    {project.images.map((image, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => openAt(index)}
                            className="aspect-[4/3] overflow-hidden group rounded-lg relative focus:outline-none"
                            aria-label={`Open image ${index + 1} of ${total}`}
                        >
                            <img
                                src={image}
                                alt={`${project.title} - ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                        </button>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="overlay"
                        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
                        role="dialog"
                        aria-modal="true"
                        onMouseDown={(e) => {
                            if (e.target === e.currentTarget) close();
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                        <motion.div
                            key="content"
                            className="relative w-full h-full md:h-auto md:w-[min(1100px,92vw)] flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.96, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 8 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                        >
                            {/* Close */}
                            <button
                                type="button"
                                onClick={close}
                                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>

                            {total > 1 && (
                                <button
                                    type="button"
                                    onClick={prev}
                                    className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={22} />
                                </button>
                            )}

                            {total > 1 && (
                                <button
                                    type="button"
                                    onClick={next}
                                    className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={22} />
                                </button>
                            )}

                            <div className="w-full h-full md:h-auto px-4 md:px-14 flex items-center justify-center touch-pan-y">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={project.images[activeIndex]}
                                        src={project.images[activeIndex]}
                                        alt={`${project.title} - ${activeIndex + 1}`}
                                        className="max-h-[85vh] md:max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl select-none"
                                        draggable={false}
                                        initial={{ opacity: 0, scale: 0.985 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.99 }}
                                        transition={{ duration: 0.18, ease: 'easeOut' }}
                                        drag={isMobile ? 'x' : false}
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.15}
                                        onDragEnd={(_, info) => {
                                            if (total <= 1) return;
                                            const offsetX = info.offset.x;
                                            const velocityX = info.velocity.x;
                                            const shouldGoNext =
                                                offsetX < -SWIPE_DISTANCE || velocityX < -SWIPE_VELOCITY;
                                            const shouldGoPrev =
                                                offsetX > SWIPE_DISTANCE || velocityX > SWIPE_VELOCITY;
                                            if (shouldGoNext) next();
                                            else if (shouldGoPrev) prev();
                                        }}
                                    />
                                </AnimatePresence>
                            </div>

                            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-white text-xs md:text-sm bg-white/10 px-3 py-1.5 rounded-full">
                                {activeIndex + 1} / {total}
                            </div>

                            {total > 1 && (
                                <div className="hidden md:flex absolute -bottom-20 left-1/2 -translate-x-1/2 gap-2">
                                    {project.images.map((img, idx) => {
                                        const isActive = idx === activeIndex;
                                        return (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => setActiveIndex(idx)}
                                                className={`w-16 h-12 rounded-md overflow-hidden border transition-all ${
                                                    isActive ? 'border-white' : 'border-white/30 hover:border-white/70'
                                                }`}
                                                aria-label={`Go to image ${idx + 1}`}
                                            >
                                                <img src={img} alt={`thumb-${idx + 1}`} className="w-full h-full object-cover" />
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}