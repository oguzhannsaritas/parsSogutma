import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import {
    ZoomIn,
    ZoomOut,
    Grid,
    Play,
    Volume2,
    VolumeX,
    Share2,
    Maximize,
    Mail,
    Type,
    ChevronLeft,
    ChevronRight,
    ArrowLeft,
    ArrowRight,
    Download
} from 'lucide-react';

const DESKTOP_PAGE_WIDTH = 568;
const DESKTOP_PAGE_HEIGHT = 711;
const PAGE_RATIO = DESKTOP_PAGE_HEIGHT / DESKTOP_PAGE_WIDTH;

const FRONT_COVER_IMAGE = '/images/eCatalog/kapak.webp';
const BACK_COVER_IMAGE = '/images/eCatalog/arka.webp';
const PDF_FILE_PATH = '/eCatalogParsSogutma.pdf';

const PAGE_IMAGES = [
    '/images/eCatalog/onyazi.webp',
    '/images/eCatalog/sayfa.webp',
    '/images/eCatalog/menu.webp',
    '/images/eCatalog/servisReyon.webp',
    '/images/eCatalog/servisReyonKapak.webp',
    '/images/eCatalog/servisReyonUrun.webp',
    '/images/eCatalog/sayfa.webp',
    '/images/eCatalog/dikeyTipSogutuculuReyonlar.webp',
    '/images/eCatalog/dikeyTipSogutuculuReyonlarKapak.webp',
    '/images/eCatalog/dikeyTipSogutuculuReyonlarMenu.webp',
    '/images/eCatalog/sayfa.webp',
    '/images/eCatalog/pastaDolablari.webp',
    '/images/eCatalog/pastaDolablariKapak.webp',
    '/images/eCatalog/pastaDolablariUrun.webp',
    '/images/eCatalog/sayfa.webp',
    '/images/eCatalog/marketEkipmanlari.webp',
    '/images/eCatalog/marketEkipmanlariKapak.webp',
    '/images/eCatalog/marketEkipmanlariUrunler.webp',
    '/images/eCatalog/sayfa.webp',
    '/images/eCatalog/kafeRestoranDolaplari.webp',
    '/images/eCatalog/kafeRestoranDolaplariKapak.webp',
    '/images/eCatalog/kafeRestoranDolaplariUrun.webp',
    '/images/eCatalog/sayfa.webp',
    '/images/eCatalog/endustriyelMutfakEkipmanlari.webp',
    '/images/eCatalog/endustriyelMutfakEkipmanlariKapak.webp',
    '/images/eCatalog/endustriyelMutfakEkipmanlariUrunler.webp',
    '/images/eCatalog/endustriyelMutfakEkipmanlariUrunler2.webp',
    '/images/eCatalog/endustriyelMutfakEkipmanlariUrunler3.webp',
    '/images/eCatalog/sayfa.webp',
    '/images/eCatalog/sogukHavaDepolari.webp',
    '/images/eCatalog/sogukHavaDepolariKapak.webp',
    '/images/eCatalog/sogukHavaDepolariUrunler.webp',
    '/images/eCatalog/sayfa.webp',
    '/images/eCatalog/sogutmaGruplari.webp',
    '/images/eCatalog/sogutmaGruplariKapak.webp',
    '/images/eCatalog/sogutmaGruplariUrunler.webp',
    '/images/eCatalog/sayfa.webp',
    '/images/eCatalog/ozelTasarimDryAged.webp',
    '/images/eCatalog/ozelTasarimDryAgedKapak.webp',
    '/images/eCatalog/ozelTasarimDryAgedUrunler.webp',
];

const SHOW_PAGE_NUMBERS = false;

const PageCover = React.forwardRef((props: any, ref: any) => {
    return (
        <div
            className={`w-full h-full bg-[#111827] shadow-sm shadow-gray-900 dark:shadow-white dark:shadow-sm dark:bg-gray-600 flex flex-col items-center justify-center relative overflow-hidden ${
                props.isMobile ? 'rounded-2xl' : (props.isLeft ? 'rounded-l-2xl' : 'rounded-r-2xl')
            }`}
            ref={ref}
            data-density="hard"
        >
            {props.image ? (
                <img
                    src={props.image}
                    alt={props.alt || props.title || 'Kapak'}
                    className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
                    draggable={false}
                    loading={props.priority ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={props.priority ? 'high' : 'auto'}
                />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white border border-white/10 m-2 p-4 md:p-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-center tracking-widest">
                        {props.title}
                    </h1>
                    <span className="text-xs sm:text-sm md:text-base text-center text-gray-400">
                        {props.desc}
                    </span>
                </div>
            )}
        </div>
    );
});

PageCover.displayName = 'PageCover';

const BookImagePage = React.forwardRef((props: any, ref: any) => {
    const isLeft = props.index % 2 !== 0;

    return (
        <div
            className={`w-full h-full bg-[#fdfbf7] shadow-md shadow-gray-500 flex flex-col relative mt-[-5px] overflow-hidden ${
                props.isMobile
                    ? 'rounded-2xl border border-black/10'
                    : (isLeft
                        ? 'shadow-[inset_-40px_0_50px_rgba(0,0,0,0.08)] border-r rounded-l-2xl border-black/5'
                        : 'shadow-[inset_40px_0_50px_rgba(0,0,0,0.08)] border-l rounded-r-2xl border-black/5')
            }`}
            ref={ref}
        >
            <img
                src={props.image}
                alt={props.alt || `Katalog sayfa ${props.index}`}
                className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
                draggable={false}
                loading={props.priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={props.priority ? 'high' : 'auto'}
            />

            {SHOW_PAGE_NUMBERS && props.number && (
                <div
                    className={`absolute bottom-6 z-10 text-white/90 font-mono text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded ${
                        props.isMobile
                            ? 'left-1/2 -translate-x-1/2'
                            : (isLeft ? 'left-8' : 'right-8')
                    }`}
                >
                    {props.number}
                </div>
            )}
        </div>
    );
});

BookImagePage.displayName = 'BookImagePage';

export default function ECatalog() {
    const { t } = useLanguage();

    const bookRef = useRef<any>(null);
    const bookViewportRef = useRef<HTMLDivElement | null>(null);
    const bookStageRef = useRef<HTMLDivElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const lastSoundTimeRef = useRef(0);
    const wheelLockRef = useRef(false);
    const audioUnlockedRef = useRef(false);

    const zoomDragRef = useRef({
        dragging: false,
        startX: 0,
        startY: 0,
        originX: 0,
        originY: 0
    });

    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isSoundEnabled, setIsSoundEnabled] = useState(true);
    const [isZoomed, setIsZoomed] = useState(false);
    const [isDraggingZoom, setIsDraggingZoom] = useState(false);
    const [closedSide, setClosedSide] = useState<'front' | 'back' | 'none'>('none');

    const [bookDim, setBookDim] = useState({
        width: DESKTOP_PAGE_WIDTH,
        height: DESKTOP_PAGE_HEIGHT
    });

    const [zoomOffset, setZoomOffset] = useState({
        x: 0,
        y: 0
    });

    const getZoomScale = () => {
        return isMobile ? 1.5 : 1.8;
    };

    const getStageSize = () => {
        if (!bookStageRef.current) {
            return {
                width: isMobile ? bookDim.width : bookDim.width * 2,
                height: bookDim.height
            };
        }

        const flipRoot =
            (bookStageRef.current.querySelector('.stf__parent') as HTMLElement | null) ||
            (bookStageRef.current.querySelector('.stf__block') as HTMLElement | null) ||
            (bookStageRef.current.querySelector('.flip-book') as HTMLElement | null);

        const width = flipRoot?.offsetWidth ?? (isMobile ? bookDim.width : bookDim.width * 2);
        const height = flipRoot?.offsetHeight ?? bookDim.height;

        return { width, height };
    };

    const clampZoomOffset = (x: number, y: number) => {
        if (!bookViewportRef.current) {
            return { x, y };
        }

        const viewportRect = bookViewportRef.current.getBoundingClientRect();
        const { width: stageWidth, height: stageHeight } = getStageSize();
        const zoomScale = getZoomScale();

        const scaledWidth = stageWidth * zoomScale;
        const scaledHeight = stageHeight * zoomScale;

        const maxX = Math.max(0, (scaledWidth - viewportRect.width) / 2);
        const maxY = Math.max(0, (scaledHeight - viewportRect.height) / 2);

        return {
            x: Math.max(-maxX, Math.min(maxX, x)),
            y: Math.max(-maxY, Math.min(maxY, y))
        };
    };

    const startZoomDrag = (clientX: number, clientY: number) => {
        if (!isZoomed) return;

        zoomDragRef.current = {
            dragging: true,
            startX: clientX,
            startY: clientY,
            originX: zoomOffset.x,
            originY: zoomOffset.y
        };

        setIsDraggingZoom(true);
    };

    const handleZoomMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomed) return;

        e.preventDefault();
        startZoomDrag(e.clientX, e.clientY);
    };

    const handleZoomTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isZoomed) return;
        if (e.touches.length !== 1) return;

        const touch = e.touches[0];
        startZoomDrag(touch.clientX, touch.clientY);
    };

    const detectClosedSide = () => {
        if (isMobile) {
            setClosedSide('none');
            return;
        }

        const stageEl = bookStageRef.current;
        if (!stageEl) {
            setClosedSide('none');
            return;
        }

        const block =
            (stageEl.querySelector('.stf__block') as HTMLElement | null) ||
            (stageEl.querySelector('.stf__parent') as HTMLElement | null);

        if (!block) {
            setClosedSide('none');
            return;
        }

        const items = Array.from(stageEl.querySelectorAll('.stf__item')) as HTMLElement[];

        const visibleItems = items.filter((item) => {
            const style = window.getComputedStyle(item);
            const rect = item.getBoundingClientRect();

            return (
                style.display !== 'none' &&
                style.visibility !== 'hidden' &&
                rect.width > 20 &&
                rect.height > 20
            );
        });

        if (visibleItems.length !== 1) {
            setClosedSide('none');
            return;
        }

        const blockRect = block.getBoundingClientRect();
        const pageRect = visibleItems[0].getBoundingClientRect();

        const leftGap = Math.abs(pageRect.left - blockRect.left);
        const rightGap = Math.abs(blockRect.right - pageRect.right);
        const tolerance = 12;

        if (leftGap <= tolerance && rightGap > tolerance) {
            setClosedSide('back');
            return;
        }

        if (rightGap <= tolerance && leftGap > tolerance) {
            setClosedSide('front');
            return;
        }

        setClosedSide('none');
    };

    const scheduleClosedSideDetection = () => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                detectClosedSide();
            });
        });
    };

    const tryUnlockAudio = useCallback(async () => {
        const audio = audioRef.current;

        if (!audio || audioUnlockedRef.current) return;

        const prevMuted = audio.muted;
        const prevVolume = audio.volume;

        try {
            audio.muted = true;
            audio.volume = 0;
            audio.currentTime = 0;

            await audio.play();
            audio.pause();
            audio.currentTime = 0;

            audioUnlockedRef.current = true;
        } catch (err) {
            console.log('Audio unlock failed:', err);
        } finally {
            audio.muted = prevMuted;
            audio.volume = prevVolume;
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!zoomDragRef.current.dragging || !isZoomed) return;

            e.preventDefault();

            const dx = e.clientX - zoomDragRef.current.startX;
            const dy = e.clientY - zoomDragRef.current.startY;

            const next = clampZoomOffset(
                zoomDragRef.current.originX + dx,
                zoomDragRef.current.originY + dy
            );

            setZoomOffset(next);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!zoomDragRef.current.dragging || !isZoomed) return;
            if (e.touches.length !== 1) return;

            e.preventDefault();

            const touch = e.touches[0];
            const dx = touch.clientX - zoomDragRef.current.startX;
            const dy = touch.clientY - zoomDragRef.current.startY;

            const next = clampZoomOffset(
                zoomDragRef.current.originX + dx,
                zoomDragRef.current.originY + dy
            );

            setZoomOffset(next);
        };

        const stopDragging = () => {
            if (!zoomDragRef.current.dragging) return;

            zoomDragRef.current.dragging = false;
            setIsDraggingZoom(false);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: false });
        window.addEventListener('mouseup', stopDragging);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', stopDragging);
        window.addEventListener('touchcancel', stopDragging);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', stopDragging);
            window.removeEventListener('touchcancel', stopDragging);
        };
    }, [isZoomed, isMobile, bookDim.width, bookDim.height, zoomOffset.x, zoomOffset.y]);

    useEffect(() => {
        if (!isZoomed) return;

        setZoomOffset(prev => clampZoomOffset(prev.x, prev.y));
    }, [isZoomed, page, isMobile, bookDim.width, bookDim.height]);

    useEffect(() => {
        const audio = new Audio('/sound/pageSound/pageSound.mp3');
        audio.preload = 'auto';
        audioRef.current = audio;

        const checkMobile = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            const paddingX = width >= 768 ? 128 : 32;
            const availableWidth = width - paddingX;
            const availableHeight = height - 180;

            const isPortrait = height > width;

            if (width < 768 || (width < 1024 && isPortrait)) {
                setIsMobile(true);

                let w = availableWidth;
                let h = w * PAGE_RATIO;

                if (h > availableHeight) {
                    h = availableHeight;
                    w = h / PAGE_RATIO;
                }

                setBookDim({
                    width: Math.floor(w),
                    height: Math.floor(h)
                });
            } else if (width < 1024) {
                setIsMobile(false);

                let w = availableWidth / 2;
                let h = w * PAGE_RATIO;

                if (h > availableHeight) {
                    h = availableHeight;
                    w = h / PAGE_RATIO;
                }

                setBookDim({
                    width: Math.floor(w),
                    height: Math.floor(h)
                });
            } else {
                setIsMobile(false);

                let w = DESKTOP_PAGE_WIDTH;
                let h = DESKTOP_PAGE_HEIGHT;

                if (w * 2 > availableWidth) {
                    w = availableWidth / 2;
                    h = w * PAGE_RATIO;
                }

                if (h > availableHeight) {
                    h = availableHeight;
                    w = h / PAGE_RATIO;
                }

                setBookDim({
                    width: Math.floor(w),
                    height: Math.floor(h)
                });
            }

            setZoomOffset({ x: 0, y: 0 });
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    useEffect(() => {
        scheduleClosedSideDetection();
    }, [isMobile, bookDim.width, bookDim.height]);

    useEffect(() => {
        const unlockHandler = () => {
            void tryUnlockAudio();
        };

        window.addEventListener('pointerdown', unlockHandler, { passive: true });
        window.addEventListener('touchstart', unlockHandler, { passive: true });
        window.addEventListener('click', unlockHandler, { passive: true });
        window.addEventListener('keydown', unlockHandler);

        return () => {
            window.removeEventListener('pointerdown', unlockHandler);
            window.removeEventListener('touchstart', unlockHandler);
            window.removeEventListener('click', unlockHandler);
            window.removeEventListener('keydown', unlockHandler);
        };
    }, [tryUnlockAudio]);

    const playPageSound = async () => {
        if (!isSoundEnabled || !audioRef.current) return;

        const now = Date.now();

        if (now - lastSoundTimeRef.current < 120) return;

        lastSoundTimeRef.current = now;

        try {
            audioRef.current.currentTime = 0;
            await audioRef.current.play();
            audioUnlockedRef.current = true;
        } catch (err) {
            console.log('Audio play failed:', err);
        }
    };

    const nextButtonClick = () => {
        void tryUnlockAudio();
        void playPageSound();
        bookRef.current?.pageFlip()?.flipNext();
    };

    const prevButtonClick = () => {
        void tryUnlockAudio();
        void playPageSound();
        bookRef.current?.pageFlip()?.flipPrev();
    };

    const onPage = (e: any) => {
        setPage(e.data);
        scheduleClosedSideDetection();
    };

    const onInit = (e: any) => {
        setTotalPage(e.object.getPageCount());
        scheduleClosedSideDetection();
    };

    const onFlipState = (e: any) => {
        if (e?.data === 'flipping') {
            setClosedSide('none');
            void playPageSound();
            return;
        }

        scheduleClosedSideDetection();
    };

    useEffect(() => {
        const viewportEl = bookViewportRef.current;
        if (!viewportEl) return;

        const handleWheel = (e: WheelEvent) => {
            if (isZoomed) return;
            if (wheelLockRef.current) return;

            const absX = Math.abs(e.deltaX);
            const absY = Math.abs(e.deltaY);
            const isStrongHorizontalIntent = absX > 30 && absX > absY * 1.2;

            if (!isStrongHorizontalIntent) return;

            e.preventDefault();

            wheelLockRef.current = true;

            if (e.deltaX > 0) {
                void playPageSound();
                bookRef.current?.pageFlip()?.flipNext();
            } else {
                void playPageSound();
                bookRef.current?.pageFlip()?.flipPrev();
            }

            window.setTimeout(() => {
                wheelLockRef.current = false;
            }, 450);
        };

        viewportEl.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            viewportEl.removeEventListener('wheel', handleWheel);
        };
    }, [isZoomed, isSoundEnabled, page]);

    const toggleZoom = () => {
        if (isZoomed) {
            setIsZoomed(false);
            setIsDraggingZoom(false);
            zoomDragRef.current.dragging = false;
            setZoomOffset({ x: 0, y: 0 });
            return;
        }

        setIsZoomed(true);
        setZoomOffset({ x: 0, y: 0 });
    };

    const getStageStyle = () => {
        const halfPageShift = Math.round(bookDim.width / 2);

        let shiftX = 0;

        if (!isMobile) {
            if (closedSide === 'front') {
                shiftX = -halfPageShift;
            } else if (closedSide === 'back') {
                shiftX = halfPageShift;
            }
        }

        const baseTransform = `translate3d(${shiftX}px, 0, 0)`;

        if (isZoomed) {
            return {
                transform: `${baseTransform} translate3d(${zoomOffset.x}px, ${zoomOffset.y}px, 0) scale(${getZoomScale()})`,
                transition: isDraggingZoom ? 'none' : 'transform 0.35s ease',
                zIndex: 20,
                cursor: isDraggingZoom ? 'grabbing' : 'grab',
                transformOrigin: 'center center',
                willChange: 'transform',
                userSelect: 'none' as const
            };
        }

        return {
            transform: baseTransform,
            transition: 'transform 0.5s ease-in-out',
            zIndex: 10,
            cursor: 'default',
            transformOrigin: 'center center',
            willChange: 'transform'
        };
    };

    return (
        <div className="bg-white dark:bg-[#111827] min-h-screen flex flex-col relative pt-20">
            <div
                className="absolute inset-0 opacity-60 dark:opacity-30 pointer-events-none mix-blend-multiply z-0"
                style={{}}
            ></div>

            <div className="bg-[#111827] dark:bg-white text-white dark:text-black py-4 md:py-16 mb-12 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-12 text-center">
                    <h1 className="text-lg md:text-4xl font-bold mb-4">
                        {t('menu.catalog')}
                    </h1>

                    <div className="text-xs md:text-sm text-gray-400 dark:text-gray-600 flex items-center justify-center gap-2 uppercase tracking-wider">
                        <Link
                            to="/"
                            className="hover:text-white dark:hover:text-black transition-colors"
                        >
                            {t('menu.home')}
                        </Link>
                        <span>/</span>
                        <span className="text-white dark:text-black">
                            {t('menu.catalog')}
                        </span>
                    </div>
                </div>
            </div>

            <div
                className={`flex-1 relative flex items-center justify-center py-12 md:py-12 z-10 w-full max-w-[1600px] mx-auto px-4 md:px-16 isolate ${
                    isZoomed ? 'overflow-hidden' : 'overflow-visible'
                }`}
            >
                <div className="hidden md:flex absolute right-4 top-4 md:right-6 md:top-6 z-40 gap-2 pointer-events-auto">
                    <button
                        onClick={toggleZoom}
                        className="p-3 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all shadow-lg"
                        title={isZoomed ? 'Uzaklaştır' : 'Yakınlaştır'}
                    >
                        {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
                    </button>

                    <button
                        onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                        className="p-3 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all shadow-lg"
                        title={isSoundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
                    >
                        {isSoundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
                    </button>

                    <a
                        href={PDF_FILE_PATH}
                        download="Pars-Sogutma-E-Katalog.pdf"
                        className="p-3 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all shadow-lg inline-flex items-center justify-center"
                        title="PDF İndir"
                        aria-label="PDF İndir"
                    >
                        <Download size={24} />
                    </a>
                </div>

                {!isZoomed && (
                    <button
                        onClick={prevButtonClick}
                        className="absolute left-2 md:left-8 z-30 p-2 md:p-4 text-black dark:text-white cursor-pointer transition-colors"
                        aria-label="Önceki Sayfa"
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>
                )}

                <div
                    ref={bookViewportRef}
                    className={`relative flex items-center justify-center w-full max-w-[1200px] [overscroll-behavior-x:contain] ${
                        isZoomed ? 'overflow-hidden' : 'overflow-x-hidden overflow-y-visible'
                    }`}
                    style={{
                        overscrollBehaviorX: 'contain',
                        overscrollBehaviorY: 'auto'
                    }}
                >
                    <div
                        ref={bookStageRef}
                        style={{
                            ...getStageStyle(),
                            touchAction: isZoomed ? 'none' : 'pan-y'
                        }}
                        onMouseDown={handleZoomMouseDown}
                        onTouchStart={handleZoomTouchStart}
                    >
                        {/* @ts-ignore */}
                        <HTMLFlipBook
                            width={bookDim.width}
                            height={bookDim.height}
                            size="fixed"
                            autoSize={false}
                            drawShadow={true}
                            maxShadowOpacity={0.5}
                            showCover={true}
                            mobileScrollSupport={true}
                            usePortrait={isMobile}
                            onFlip={onPage}
                            onChangeState={onFlipState}
                            onInit={onInit}
                            ref={bookRef}
                            className="flip-book"
                            style={{
                                margin: '0 auto',
                                pointerEvents: isZoomed ? 'none' : 'auto'
                            }}
                        >
                            <PageCover
                                image={FRONT_COVER_IMAGE}
                                alt="Ön kapak"
                                title="KAPAK"
                                desc="Ön Kapak"
                                isLeft={false}
                                isMobile={isMobile}
                                priority={true}
                            />

                            {PAGE_IMAGES.map((image, index) => (
                                <BookImagePage
                                    key={`${image}-${index}`}
                                    index={index + 1}
                                    image={image}
                                    alt={`Katalog sayfa ${index + 1}`}
                                    number={`${index + 1}`}
                                    isMobile={isMobile}
                                    priority={index < 2}
                                />
                            ))}

                            <PageCover
                                image={BACK_COVER_IMAGE}
                                alt="Arka kapak"
                                title="ARKA KAPAK"
                                desc="Arka Kapak"
                                isLeft={true}
                                isMobile={isMobile}
                            />
                        </HTMLFlipBook>
                    </div>
                </div>

                {!isZoomed && (
                    <button
                        onClick={nextButtonClick}
                        className="absolute right-2 md:right-8 z-30 p-2 md:p-4 text-black dark:text-white cursor-pointer transition-colors"
                        aria-label="Sonraki Sayfa"
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>
                )}
            </div>

            <div className="bg-black text-white p-2 md:p-3 flex md:hidden items-center justify-between z-40 relative">
                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        onClick={toggleZoom}
                        className="p-2 hover:text-[#009FE3] transition-colors"
                        title="Yakınlaştır"
                    >
                        {isZoomed ? (
                            <ZoomOut size={20} strokeWidth={1.5} />
                        ) : (
                            <ZoomIn size={20} strokeWidth={1.5} />
                        )}
                    </button>

                    <button
                        className="p-2 hover:text-[#009FE3] transition-colors hidden sm:block"
                        title="Izgara Görünümü"
                    >
                        <Grid size={20} strokeWidth={1.5} />
                    </button>

                    <button
                        className="p-2 hover:text-[#009FE3] transition-colors hidden sm:block"
                        title="Otomatik Oynat"
                    >
                        <Play size={20} strokeWidth={1.5} />
                    </button>

                    <button
                        onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                        className="p-2 hover:text-[#009FE3] transition-colors"
                        title="Ses"
                    >
                        {isSoundEnabled ? (
                            <Volume2 size={20} strokeWidth={1.5} />
                        ) : (
                            <VolumeX size={20} strokeWidth={1.5} />
                        )}
                    </button>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        onClick={prevButtonClick}
                        className="p-2 hover:text-[#009FE3] transition-colors"
                    >
                        <ArrowLeft size={20} strokeWidth={1.5} />
                    </button>

                    <div className="flex items-center bg-white/10 rounded px-2 py-1">
                        <input
                            type="text"
                            value={isMobile ? (page + 1).toString() : (page === 0 ? '1' : `${page}-${page + 1}`)}
                            readOnly
                            className="bg-transparent text-center w-12 text-sm outline-none font-mono"
                        />
                        <span className="text-gray-400 text-sm mx-1">/</span>
                        <span className="text-gray-400 text-sm font-mono">{totalPage}</span>
                    </div>

                    <button
                        onClick={nextButtonClick}
                        className="p-2 hover:text-[#009FE3] transition-colors"
                    >
                        <ArrowRight size={20} strokeWidth={1.5} />
                    </button>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <a
                        href={PDF_FILE_PATH}
                        download="Pars-Sogutma-E-Katalog.pdf"
                        className="p-2 hover:text-[#009FE3] transition-colors inline-flex items-center justify-center"
                        title="PDF İndir"
                        aria-label="PDF İndir"
                    >
                        <Download size={20} strokeWidth={1.5} />
                    </a>

                    <button
                        className="p-2 hover:text-[#009FE3] transition-colors"
                        title="Paylaş"
                    >
                        <Share2 size={20} strokeWidth={1.5} />
                    </button>

                    <button
                        className="p-2 hover:text-[#009FE3] transition-colors hidden sm:block"
                        title="Tam Ekran"
                    >
                        <Maximize size={20} strokeWidth={1.5} />
                    </button>

                    <button
                        className="p-2 hover:text-[#009FE3] transition-colors hidden sm:block"
                        title="E-Posta"
                    >
                        <Mail size={20} strokeWidth={1.5} />
                    </button>

                    <button
                        className="p-2 hover:text-[#009FE3] transition-colors hidden sm:block"
                        title="Metin"
                    >
                        <Type size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </div>
    );
}