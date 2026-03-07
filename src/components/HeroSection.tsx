import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Twitter, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [textSlide, setTextSlide] = useState(0);
    const [showText, setShowText] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [wipeState, setWipeState] = useState<'idle' | 'in' | 'out'>('idle');
    const { t } = useLanguage();

    // Sadece mobilde swipe aktif olsun
    const [swipeEnabled, setSwipeEnabled] = useState(false);

    useEffect(() => {
        // Resimleri önceden yükle (preload) ki geçişlerde donma olmasın
        const imageUrls = [
            '/images/parsLogo.web',
            '/images/home/buzdolabi2.web',
            '/images/home/masa.web',
            '/images/home/marketx.web',
            '/images/home/sogukHava2.web',
            '/images/home/sogutma.web',
            '/images/home/sogutmareyon.web',
            '/images/home/unluMamullx.web'
        ];
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mqCoarse = window.matchMedia('(pointer: coarse)');
        const mqNoHover = window.matchMedia('(hover: none)');

        const update = () => {
            setSwipeEnabled(mqCoarse.matches || mqNoHover.matches);
        };

        update();

        // Safari eski sürümlerde addEventListener olmayabilir
        const add = (mq: MediaQueryList) => {
            // @ts-ignore
            if (mq.addEventListener) mq.addEventListener('change', update);
            // @ts-ignore
            else mq.addListener(update);
        };
        const remove = (mq: MediaQueryList) => {
            // @ts-ignore
            if (mq.removeEventListener) mq.removeEventListener('change', update);
            // @ts-ignore
            else mq.removeListener(update);
        };

        add(mqCoarse);
        add(mqNoHover);

        return () => {
            remove(mqCoarse);
            remove(mqNoHover);
        };
    }, []);

    const SWIPE_THRESHOLD = 80;
    const MOVE_START_THRESHOLD = 8;

    const swipeRef = useRef({
        active: false,
        pointerId: -1,
        startX: 0,
        startY: 0,
        decided: false,
        isHorizontal: false,
    });

    const swipeJustHappenedRef = useRef(false);
    const swipeResetTimerRef = useRef<number | null>(null);

    const slides = [
        {
            id: 0,
            title: 'Pars Soğutma Sistemleri',
            description: 'İşletmeniz için yüksek verimli, yenilikçi ve estetik soğutma çözümleri üretiyoruz. Sosyal Medya kanallarımızdan bizleri takip edebilir aynı zamanda iletişime geçebilirsiniz.',
            image: '/images/parsLogo.web',
            isSocial: true
        },
        { id: 1, subtitle: t('hero.slide1.title'), title: t('menu.refrigerators'), image: '/images/home/buzdolabi2.web' },
        { id: 2, subtitle: t('hero.slide2.title'), title: t('menu.industrialKitchen'), image: '/images/home/masa.web' },
        { id: 3, subtitle: t('hero.slide3.title'), title: t('menu.marketEquip'), image: '/images/home/marketx.web' },
        { id: 4, subtitle: t('hero.slide4.title'), title: t('menu.coldStorage'), image: '/images/home/sogukHava2.web' },
        { id: 5, subtitle: t('hero.slide5.title'), title: t('menu.coolingSystems'), image: '/images/home/sogutma.web' },
        { id: 6, subtitle: t('hero.slide6.title'), title: t('menu.coolingAisles'), image: '/images/home/sogutmareyon.web' },
        { id: 7, subtitle: t('hero.slide7.title'), title: t('menu.bakery'), image: '/images/home/unluMamullx.web' },
    ];

    const isSocialText = !!slides[textSlide]?.isSocial;     // mobil tasarım kararları (ilk slayt için)
    const isSocialImage = !!slides[currentSlide]?.isSocial; // görsel tarafı (o an gösterilen resim)

    const markSwipeJustHappened = () => {
        swipeJustHappenedRef.current = true;
        if (swipeResetTimerRef.current) window.clearTimeout(swipeResetTimerRef.current);
        swipeResetTimerRef.current = window.setTimeout(() => {
            swipeJustHappenedRef.current = false;
            swipeResetTimerRef.current = null;
        }, 250);
    };

    const changeSlide = (direction: 'next' | 'prev') => {
        if (isAnimating) return;
        setIsAnimating(true);

        const nextIndex =
            direction === 'next'
                ? (currentSlide + 1) % slides.length
                : (currentSlide - 1 + slides.length) % slides.length;

        setWipeState('in');
        setShowText(false);
        setCurrentSlide(nextIndex);

        setTimeout(() => {
            setTextSlide(nextIndex);
            setShowText(true);
            setWipeState('out');

            setTimeout(() => {
                setWipeState('idle');
                setIsAnimating(false);
            }, 600);
        }, 800);
    };

    const nextSlide = () => changeSlide('next');
    const prevSlide = () => changeSlide('prev');

    const resetSwipeState = () => {
        swipeRef.current.active = false;
        swipeRef.current.pointerId = -1;
        swipeRef.current.decided = false;
        swipeRef.current.isHorizontal = false;
    };

    const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
        if (!swipeEnabled) return;     // ✅ sadece mobil
        if (isAnimating) return;
        if (e.isPrimary === false) return;

        swipeRef.current.active = true;
        swipeRef.current.pointerId = e.pointerId;
        swipeRef.current.startX = e.clientX;
        swipeRef.current.startY = e.clientY;
        swipeRef.current.decided = false;
        swipeRef.current.isHorizontal = false;
    };

    const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
        if (!swipeEnabled) return;     // ✅ sadece mobil
        if (isAnimating) return;
        if (!swipeRef.current.active) return;
        if (swipeRef.current.pointerId !== e.pointerId) return;

        const dx = e.clientX - swipeRef.current.startX;
        const dy = e.clientY - swipeRef.current.startY;

        if (!swipeRef.current.decided) {
            if (Math.abs(dx) < MOVE_START_THRESHOLD && Math.abs(dy) < MOVE_START_THRESHOLD) return;

            swipeRef.current.decided = true;
            swipeRef.current.isHorizontal = Math.abs(dx) >= Math.abs(dy);

            if (swipeRef.current.isHorizontal) {
                try {
                    e.currentTarget.setPointerCapture(e.pointerId);
                } catch {
                    // ignore
                }
            } else {
                resetSwipeState();
                return;
            }
        }

        if (!swipeRef.current.isHorizontal) return;

        if (dx > SWIPE_THRESHOLD) {
            resetSwipeState();
            markSwipeJustHappened();
            prevSlide();
            return;
        }

        if (dx < -SWIPE_THRESHOLD) {
            resetSwipeState();
            markSwipeJustHappened();
            nextSlide();
        }
    };

    const onPointerUp = (e: React.PointerEvent<HTMLElement>) => {
        if (!swipeEnabled) return;     // ✅ sadece mobil
        if (swipeRef.current.pointerId === e.pointerId) {
            try {
                e.currentTarget.releasePointerCapture(e.pointerId);
            } catch {
                // ignore
            }
            resetSwipeState();
        }
    };

    const onPointerCancel = (e: React.PointerEvent<HTMLElement>) => {
        if (!swipeEnabled) return;     // ✅ sadece mobil
        if (swipeRef.current.pointerId === e.pointerId) {
            try {
                e.currentTarget.releasePointerCapture(e.pointerId);
            } catch {
                // ignore
            }
            resetSwipeState();
        }
    };

    // Mobil swipe sonrası “yanlış click”leri engelle
    const onClickCapture = (e: React.MouseEvent<HTMLElement>) => {
        if (!swipeEnabled) return;     // ✅ sadece mobil
        if (!swipeJustHappenedRef.current) return;
        e.preventDefault();
        e.stopPropagation();
        swipeJustHappenedRef.current = false;
    };

    return (
        <section
            className="relative w-full lg:min-h-[calc(100vh-80px)] bg-[#f8f9fa] py-8 md:py-12 dark:bg-[#111827] flex items-center overflow-hidden touch-pan-y"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            onClickCapture={onClickCapture}
        >
            {/* Wipe Animation Overlay */}
            <motion.div
                initial={false}
                animate={{
                    x: wipeState === 'idle' ? '-100%' : wipeState === 'in' ? '0%' : '100%',
                }}
                transition={{
                    duration: wipeState === 'idle' ? 0 : wipeState === 'in' ? 0.4 : 0.6,
                    ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute inset-0 z-20 bg-black/40 pointer-events-none"
            />

            {/* Modern Geometric Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[80%] h-full bg-white dark:bg-[#1f2937] transform -skew-x-[20deg] translate-x-[20%] shadow-[-20px_0_40px_rgba(0,0,0,0.02)]"></div>
                <div className="absolute top-0 right-0 w-[60%] h-full bg-[#f1f3f5] dark:bg-[#374151] transform -skew-x-[20deg] translate-x-[40%] opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-transparent to-transparent dark:from-[#111827] opacity-80"></div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                }}
                disabled={isAnimating}
                className="absolute left-1 sm:left-2 md:left-8 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-500/50 hover:bg-gray-600/60 text-white flex items-center justify-center transition-colors rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                }}
                disabled={isAnimating}
                className="absolute right-1 sm:right-2 md:right-8 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-500/50 hover:bg-gray-600/60 text-white flex items-center justify-center transition-colors rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
            >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* Content Container */}
            <div className="container mx-auto justify-center items-center px-8 sm:px-12 md:px-24 relative z-30 py-6 md:py-12 h-full">
                <div
                    className={`grid justify-center items-center w-full transition-all duration-500
                        ${isSocialText
                        ? 'grid-cols-1 lg:grid-cols-2  lg:gap-32 xl:gap-96'
                        : 'grid-cols-2 gap-2 sm:gap-4 lg:gap-32 xl:gap-96'
                    }
                    `}
                >
                    {/* Text Content */}
                    <motion.div
                        key={textSlide}
                        variants={{
                            show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
                            hide: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                        }}
                        initial="hide"
                        animate={showText ? 'show' : 'hide'}
                        className={`flex flex-col justify-center items-center space-y-2 sm:space-y-4 lg:space-y-9 relative text-center
                            ${isSocialText ? 'order-2 lg:order-1 w-full max-w-md mx-auto' : ''}
                            ${isSocialText ? ' dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4   md:dark:bg-transparent lg:backdrop-blur-0' : ''}
                        `}
                        style={{ pointerEvents: showText ? 'auto' : 'none' }}
                    >
                        {slides[textSlide].subtitle && (
                            <motion.h2
                                variants={{
                                    hide: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                                }}
                                className="text-[9px] sm:text-[10px] md:text-sm lg:text-base font-medium justify-center items-center text-center text-gray-800 dark:text-gray-200 uppercase"
                            >
                                {slides[textSlide].subtitle}
                            </motion.h2>
                        )}

                        {slides[textSlide].isSocial ? (
                            <>
                                <motion.h1
                                    variants={{
                                        hide: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                                    }}
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center tracking-tight leading-tight text-black dark:text-white"
                                >
                                    {slides[textSlide].title}
                                </motion.h1>
                                <motion.p
                                    variants={{
                                        hide: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                                    }}
                                    className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 text-center max-w-md"
                                >
                                    {slides[textSlide].description}
                                </motion.p>
                            </>
                        ) : (
                            <motion.h1
                                variants={{
                                    hide: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                                }}
                                className="text-base sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-center tracking-tight leading-tight text-black dark:text-white"
                            >
                                {slides[textSlide].title}
                            </motion.h1>
                        )}

                        {slides[textSlide].isSocial && (
                            <motion.div
                                variants={{
                                    hide: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                                }}
                                className="flex flex-col items-center mt-4 w-full"
                            >
                                <span className="text-[10px] sm:text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                                    İletişim & Sosyal Medya
                                </span>
                                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                                    {/* WhatsApp */}
                                    <a
                                        href="https://wa.me/905431707277"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                                        aria-label="WhatsApp"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.07 0C5.48 0 .11 5.37.11 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.94 11.94 0 0 0 5.87 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.53-8.42ZM12.08 21.5h-.01a9.56 9.56 0 0 1-4.88-1.34l-.35-.21-3.68.97.98-3.59-.23-.37a9.56 9.56 0 0 1-1.46-5.09c0-5.29 4.31-9.6 9.62-9.6 2.57 0 4.99.99 6.81 2.8a9.56 9.56 0 0 1 2.82 6.81c0 5.3-4.31 9.62-9.62 9.62Zm5.6-7.17c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.46-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.48 1.08 2.92 1.23 3.12.15.2 2.12 3.24 5.12 4.54.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.43.25-.71.25-1.31.17-1.43-.07-.12-.27-.2-.56-.35Z" />
                                        </svg>
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        href="http://instagram.com/parsogutma/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                                        aria-label="Instagram"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Instagram size={18} />
                                    </a>

                                    {/* Twitter / X */}
                                    <a
                                        href="https://x.com/ParsSogutma"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                                        aria-label="X (Twitter)"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    </a>

                                    {/* YouTube */}
                                    <a
                                        href="https://www.youtube.com/@parssogutma/videos?app=desktop"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                                        aria-label="YouTube"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Youtube size={18} />
                                    </a>

                                    {/* Pinterest */}
                                    <a
                                        href="https://tr.pinterest.com/parsogutma/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E60023] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                                        aria-label="Pinterest"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12.04 2C6.58 2 3 5.64 3 9.89c0 2.64 1.49 4.16 2.39 4.16.37 0 .58-.96.58-1.23 0-.32-.92-1.14-.92-2.65 0-3.12 2.38-5.33 5.54-5.33 2.7 0 4.7 1.53 4.7 4.35 0 2.08-.84 6.02-3.57 6.02-.99 0-1.84-.72-1.84-1.73 0-1.49 1.03-2.92 1.03-4.5 0-2.62-3.7-2.15-3.7.88 0 .83.1 1.75.46 2.5L6.3 20.2c-.18.77-.26 1.53-.24 2.3h2.02l1.31-5.04c.36.69 1.28 1.04 2.06 1.04 4.25 0 6.55-4.23 6.55-8.06C18 5.33 15.27 2 12.04 2z"/>
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://linkedin.com/in/parsogutma?originalSubdomain=tr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                                        aria-label="LinkedIn"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"/>
                                        </svg>
                                    </a>

                                    {/* Facebook */}
                                    <a
                                        href="https://www.facebook.com/parsogutma/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                                        aria-label="Facebook"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.764v2.313h3.59l-.467 3.696h-3.123V24h6.127C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        )}

                        {textSlide !== 0 && (
                            <Link to="/products">
                                <motion.button
                                    variants={{
                                        hide: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                                    }}
                                    className="bg-[#111827] rounded-2xl dark:bg-gray-400 shadow-xs hover:bg-gray-700 shadow-amber-50 dark:hover:bg-white dark:text-black text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-8 md:py-3 text-[9px] sm:text-[10px] md:text-xs font-bold tracking-widest transition-all mt-2 md:mt-4 cursor-pointer"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {t('hero.button')}
                                </motion.button>
                            </Link>
                        )}
                    </motion.div>

                    {/* Image Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            variants={{
                                initial: { opacity: 0, x: 20 },
                                animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
                                exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
                            }}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`flex relative z-10 w-full
                                ${isSocialText ? 'justify-center lg:justify-start order-1 lg:order-2' : 'justify-end lg:justify-start'}
                            `}
                        >
                            <div
                                className={`relative w-full flex items-center justify-center lg:scale-[1.5] xl:scale-[1.8]
                                    ${isSocialImage ? 'aspect-[16/9] sm:aspect-square lg:aspect-[4/3]' : 'aspect-square lg:aspect-[4/3]'}
                                `}
                            >
                                {slides[currentSlide].isSocial && (
                                    <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl scale-150 animate-pulse pointer-events-none" />
                                )}
                                <motion.img
                                    animate={slides[currentSlide].isSocial ? { y: [0, -15, 0] } : { y: 0 }}
                                    transition={slides[currentSlide].isSocial ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : {}}
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].title}
                                    className={`object-contain w-full h-full drop-shadow-2xl select-none relative z-10 ${
                                        slides[currentSlide].isSocial
                                            ? 'dark:invert dark:hue-rotate-180 scale-[0.70] sm:scale-[0.75] md:scale-[0.78] lg:scale-[0.78] xl:scale-[0.82]'
                                            : ''
                                    }`}
                                    draggable={false}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}