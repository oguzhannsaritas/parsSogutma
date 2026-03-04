import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
        { id: 1, subtitle: t('hero.slide1.title'), title: t('menu.refrigerators'), image: '/images/home/buzdolabi2.jpg' },
        { id: 2, subtitle: t('hero.slide2.title'), title: t('menu.industrialKitchen'), image: '/images/home/masa.jpg' },
        { id: 3, subtitle: t('hero.slide3.title'), title: t('menu.marketEquip'), image: '/images/home/marketx.jpg' },
        { id: 4, subtitle: t('hero.slide4.title'), title: t('menu.coldStorage'), image: '/images/home/sogukHava2.jpg' },
        { id: 5, subtitle: t('hero.slide5.title'), title: t('menu.coolingSystems'), image: '/images/home/sogutma.jpg' },
        { id: 6, subtitle: t('hero.slide6.title'), title: t('menu.coolingAisles'), image: '/images/home/sogutmareyon.jpg' },
        { id: 7, subtitle: t('hero.slide7.title'), title: t('menu.bakery'), image: '/images/home/unluMamullx.jpg' },
    ];

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
                <div className="grid grid-cols-2 justify-center items-center gap-2 sm:gap-4 lg:gap-32 xl:gap-96 w-full">
                    {/* Text Content */}
                    <motion.div
                        key={textSlide}
                        variants={{
                            show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
                            hide: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                        }}
                        initial="hide"
                        animate={showText ? 'show' : 'hide'}
                        className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right space-y-2 sm:space-y-4 lg:space-y-9 relative lg:right-12 xl:right-28"
                        style={{ pointerEvents: showText ? 'auto' : 'none' }}
                    >
                        <motion.h2
                            variants={{
                                hide: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                            }}
                            className="text-[9px] sm:text-[10px] md:text-sm lg:text-base font-medium justify-center items-center text-center lg:text-right text-gray-800 dark:text-gray-200 uppercase"
                        >
                            {slides[textSlide].subtitle}
                        </motion.h2>

                        <motion.h1
                            variants={{
                                hide: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                            }}
                            className="text-base sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-right text-black dark:text-white tracking-tight leading-tight"
                        >
                            {slides[textSlide].title}
                        </motion.h1>

                        <Link to="/products">
                            <motion.button
                                variants={{
                                    hide: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                                }}
                                className="bg-[#111827] rounded-2xl dark:bg-gray-400 shadow-xs hover:bg-gray-700 shadow-amber-50 dark:hover:bg-white dark:text-black text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-8 md:py-3 text-[9px] sm:text-[10px] md:text-xs font-bold tracking-widest transition-all mt-2 md:mt-4 cursor-pointer whitespace-nowrap"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {t('hero.button')}
                            </motion.button>
                        </Link>
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
                            className="flex justify-end lg:justify-start relative z-10 w-full"
                        >
                            <div className="relative w-full aspect-square lg:aspect-[4/3] lg:scale-[1.5] xl:scale-[1.8] flex items-center justify-center">
                                <img
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].title}
                                    className="object-contain w-full h-full drop-shadow-2xl select-none"
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