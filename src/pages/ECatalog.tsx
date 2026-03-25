import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import {
    ZoomIn, ZoomOut, Grid, Play, Volume2, VolumeX, Share2, Maximize, Mail, Type,
    ChevronLeft, ChevronRight, ArrowLeft, ArrowRight
} from 'lucide-react';

const PageCover = React.forwardRef((props: any, ref: any) => {
    return (
        <div
            className={`w-full h-full bg-[#111827] shadow-sm shadow-gray-900 dark:shadow-white dark:shadow-sm  dark:bg-gray-600 flex flex-col items-center justify-center relative overflow-hidden ${
                props.isMobile ? 'rounded-2xl' : (props.isLeft ? 'rounded-r-2xl' : 'rounded-r-2xl')
            }`}
            ref={ref}
            data-density="hard"
        >
            <div className="w-full h-full flex flex-col items-center justify-center text-white border border-white/10 m-2 p-4 md:p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-center tracking-widest">{props.title}</h1>
                <span className="text-xs sm:text-sm md:text-base text-center text-gray-400">{props.desc}</span>
            </div>
        </div>
    );
});

const BookPage = React.forwardRef((props: any, ref: any) => {
    const isLeft = props.index % 2 !== 0;

    return (
        <div
            className={`w-full h-full bg-[#fdfbf7]  shadow-md shadow-gray-500 flex flex-col relative overflow-hidden ${
                props.isMobile
                    ? 'rounded-2xl border border-black/10'
                    : (isLeft
                        ? 'shadow-[inset_-40px_0_50px_rgba(0,0,0,0.08)] border-r rounded-l-2xl border-black/5'
                        : 'shadow-[inset_40px_0_50px_rgba(0,0,0,0.08)] border-l rounded-r-2xl border-black/5')
            }`}
            ref={ref}
            data-density="hard"
        >
            {/* İçerik Alanı - Burayı siz dolduracaksınız */}
            <div className="w-full h-full p-2 md:p-1  flex flex-col">
                <div className="flex-1  border-black/10 rounded-xl flex flex-col items-center justify-center text-gray-500 p-4 text-center">
                    <span className="text-xl md:text-2xl font-bold mb-2 text-gray-800">{props.title}</span>
                    <span className="text-sm">{props.desc}</span>
                    <span className="text-xs mt-4 opacity-50">İçerik Alanı (Boş Şablon)</span>
                </div>
            </div>

            {/* Sayfa Numarası */}
            {props.number && (
                <div className={`absolute bottom-6 text-gray-500 font-mono text-sm ${props.isMobile ? 'left-1/2 -translate-x-1/2' : (isLeft ? 'left-8' : 'right-8')}`}>
                    {props.number}
                </div>
            )}
        </div>
    );
});

export default function ECatalog() {
    const { t } = useLanguage();
    const bookRef = useRef<any>(null);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [bookDim, setBookDim] = useState({ width: 450, height: 630 });
    const [isSoundEnabled, setIsSoundEnabled] = useState(true);
    const [isZoomed, setIsZoomed] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const lastSoundTimeRef = useRef(0);
    const wheelLockRef = useRef(false);
    const bookViewportRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const audio = new Audio('/sound/pageSound/pageSound.mp3');
        audio.preload = 'auto';
        audioRef.current = audio;

        const checkMobile = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Tailwind px-4 (16px*2=32px) on mobile, md:px-16 (64px*2=128px) on tablet/desktop
            const paddingX = width >= 768 ? 128 : 32;
            const availableWidth = width - paddingX;
            const availableHeight = height - 180; // Header ve alt kontroller için boşluk

            const isPortrait = height > width;

            if (width < 768 || (width < 1024 && isPortrait)) {
                // Mobil veya Tablet Dikey: Tek sayfa (Portrait mode)
                setIsMobile(true);
                let w = availableWidth;
                let h = w * 1.4; // 1:1.4 oran (450x630)

                if (h > availableHeight) {
                    h = availableHeight;
                    w = h / 1.4;
                }
                setBookDim({ width: Math.floor(w), height: Math.floor(h) });
            } else if (width < 1024) {
                // Tablet Yatay: Çift sayfa (Landscape mode)
                setIsMobile(false);
                let w = availableWidth / 2;
                let h = w * 1.4;

                if (h > availableHeight) {
                    h = availableHeight;
                    w = h / 1.4;
                }
                setBookDim({ width: Math.floor(w), height: Math.floor(h) });
            } else {
                // Masaüstü: Çift sayfa, max 450x630
                setIsMobile(false);
                let w = 450;
                let h = 630;

                // Ekrana sığmıyorsa küçült
                if (w * 2 > availableWidth) {
                    w = availableWidth / 2;
                    h = w * 1.4;
                }
                if (h > availableHeight) {
                    h = availableHeight;
                    w = h / 1.4;
                }
                setBookDim({ width: Math.floor(w), height: Math.floor(h) });
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const playPageSound = () => {
        if (!isSoundEnabled || !audioRef.current) return;

        const now = Date.now();
        if (now - lastSoundTimeRef.current < 120) return;

        lastSoundTimeRef.current = now;
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => console.log('Audio play failed:', err));
    };

    const nextButtonClick = () => {
        playPageSound();
        bookRef.current?.pageFlip()?.flipNext();
    };

    const prevButtonClick = () => {
        playPageSound();
        bookRef.current?.pageFlip()?.flipPrev();
    };

    const onPage = (e: any) => {
        setPage(e.data);
    };

    const onInit = (e: any) => {
        setTotalPage(e.object.getPageCount());
    };

    const onFlipState = (e: any) => {
        if (e?.data === 'flipping') {
            playPageSound();
        }
    };

    useEffect(() => {
        // Tarayıcı seviyesinde trackpad "Geri/İleri" kaydırma hareketini tamamen engellemek için
        // html ve body elementlerine overscroll-behavior uyguluyoruz.
        document.documentElement.style.overscrollBehavior = 'none';
        document.body.style.overscrollBehavior = 'none';

        const handleWheel = (e: WheelEvent) => {
            // Trackpad'de en ufak bir yatay hareket algılandığında tarayıcı navigasyonunu kesinlikle durdur
            if (Math.abs(e.deltaX) > 0) {
                e.preventDefault();
            }

            const absX = Math.abs(e.deltaX);
            const absY = Math.abs(e.deltaY);
            const isHorizontal = absX > absY;

            if (isZoomed) return;
            if (wheelLockRef.current) return;

            // Sadece yatay kaydırmalarda (Trackpad sağ/sol) sayfayı çevir
            if (isHorizontal && absX > 30) {
                wheelLockRef.current = true;
                if (e.deltaX > 0) {
                    playPageSound();
                    bookRef.current?.pageFlip()?.flipNext();
                } else {
                    playPageSound();
                    bookRef.current?.pageFlip()?.flipPrev();
                }

                window.setTimeout(() => {
                    wheelLockRef.current = false;
                }, 450);
            }
        };

        // Sayfa genelinde dinle ki trackpad nerede olursa olsun çalışsın ve navigasyonu engellesin
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            // Sayfadan çıkıldığında eski haline getir
            document.documentElement.style.overscrollBehavior = '';
            document.body.style.overscrollBehavior = '';
        };
    }, [isZoomed, isSoundEnabled]);
    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    // Kitap kapalıyken kapağı ortalamak ve zoom durumunu yönetmek için
    const getContainerStyle = () => {
        let baseTransform = '';

        if (!isMobile) {
            if (page === 0) baseTransform = 'translateX(-25%)';
        }

        if (isZoomed) {
            return {
                transform: `${baseTransform} scale(${isMobile ? 1.5 : 1.8})`,
                transition: 'transform 0.5s ease-in-out',
                zIndex: 50,
                cursor: 'zoom-out'
            };
        }

        return {
            transform: baseTransform,
            transition: 'transform 0.5s ease-in-out',
            zIndex: 10
        };
    };

    return (
        <div className="bg-white dark:bg-[#111827] min-h-screen flex flex-col relative pt-20" style={{ overscrollBehaviorX: 'none' }}>
            {/* Ahşap Arka Plan Dokusu */}
            <div
                className="absolute inset-0 opacity-60 dark:opacity-30 pointer-events-none mix-blend-multiply z-0"
                style={{
                }}
            ></div>

            {/* Üst Bilgi Çubuğu */}
            <div className="bg-[#111827] dark:bg-white text-white dark:text-black py-4 md:py-16 mb-12 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-12 text-center">
                    <h1 className="text-lg md:text-4xl font-bold mb-4">{t('menu.catalog')}</h1>

                    <div className="text-xs md:text-sm text-gray-400 dark:text-gray-600 flex items-center justify-center gap-2 uppercase tracking-wider">
                        <Link to="/" className="hover:text-white dark:hover:text-black transition-colors">
                            {t('menu.home')}
                        </Link>
                        <span>/</span>
                        <span className="text-white dark:text-black">{t('menu.catalog')}</span>
                    </div>
                </div>
            </div>

            {/* Katalog Görüntüleyici */}
            <div className={`flex-1 relative flex items-center justify-center py-8 md:py-12 z-10 w-full max-w-[1600px] mx-auto px-4 md:px-16 ${isZoomed ? 'overflow-auto' : 'overflow-visible'}`}>
                {/* Masaüstü Sağ Üst Kontroller (Ses ve Zoom) */}
                <div className="hidden md:flex absolute right-4 top-4 z-50 gap-2">
                    <button
                        onClick={toggleZoom}
                        className="p-3 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all shadow-lg"
                        title={isZoomed ? "Uzaklaştır" : "Yakınlaştır"}
                    >
                        {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
                    </button>
                    <button
                        onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                        className="p-3 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all shadow-lg"
                        title={isSoundEnabled ? "Sesi Kapat" : "Sesi Aç"}
                    >
                        {isSoundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
                    </button>
                </div>

                {/* Sol Ok */}
                {!isZoomed && (
                    <button
                        onClick={prevButtonClick}
                        className="absolute left-2 md:left-8 z-30 p-2 md:p-4 text-black  dark:text-white cursor-pointer transition-colors"
                        aria-label="Önceki Sayfa"
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>
                )}

                {/* FlipBook Konteyneri */}
                <div
                    ref={bookViewportRef}
                    className="relative flex items-center justify-center w-full max-w-[950px] [overscroll-behavior-x:contain] [overscroll-behavior-y:none]"
                    style={{
                        ...getContainerStyle(),
                        overscrollBehaviorX: 'contain',
                        overscrollBehaviorY: 'none',
                    }}
                    onClick={isZoomed ? toggleZoom : undefined}
                >
                    {/* @ts-ignore */}
                    <HTMLFlipBook
                        width={bookDim.width}
                        height={bookDim.height}
                        size="fixed"
                        autoSize={false}
                        maxShadowOpacity={0.5}
                        showCover={true}
                        mobileScrollSupport={true}
                        usePortrait={isMobile}
                        onFlip={onPage}
                        onChangeState={onFlipState}
                        onInit={onInit}
                        ref={bookRef}
                        className="flip-book"
                        style={{ margin: '0 auto' }}
                    >
                        {/* Index 0: Ön Kapak (Sağ) */}
                        <PageCover title="KAPAK" desc="Ön Kapak (Sağda görünür)" isLeft={false} isMobile={isMobile} />

                        {/* Index 1: Kapak İçi (Sol) */}
                        <BookPage index={1} title="Kapak İçi" desc="Ön kapağın arka yüzü (Sol)" isMobile={isMobile} />

                        {/* Index 2: Sayfa 1 (Sağ) */}
                        <BookPage index={2} number="1" title="1. Sayfa" desc="İlk yaprağın ön yüzü (Sağ)" isMobile={isMobile} />

                        {/* Index 3: Sayfa 2 (Sol) */}
                        <BookPage index={3} number="2" title="2. Sayfa" desc="İlk yaprağın arka yüzü (Sol)" isMobile={isMobile} />

                        {/* Index 4: Sayfa 3 (Sağ) */}
                        <BookPage index={4} number="3" title="3. Sayfa" desc="İkinci yaprağın ön yüzü (Sağ)" isMobile={isMobile} />

                        {/* Index 5: Sayfa 4 (Sol) */}
                        <BookPage index={5} number="4" title="4. Sayfa" desc="İkinci yaprağın arka yüzü (Sol)" isMobile={isMobile} />

                        {/* Index 6: Sayfa 5 (Sağ) */}
                        <BookPage index={6} number="5" title="5. Sayfa" desc="Üçüncü yaprağın ön yüzü (Sağ)" isMobile={isMobile} />

                        {/* Index 7: Sayfa 6 (Sol) */}
                        <BookPage index={7} number="6" title="6. Sayfa" desc="Üçüncü yaprağın arka yüzü (Sol)" isMobile={isMobile} />

                        {/* Index 8: Sayfa 7 (Sağ) */}
                        <BookPage index={8} number="7" title="7. Sayfa" desc="Dördüncü yaprağın ön yüzü (Sağ)" isMobile={isMobile} />

                        {/* Index 9: Arka Kapak İçi (Sol) */}
                        <BookPage index={9} title="Arka Kapak İçi" desc="Arka kapağın iç yüzü (Sol)" isMobile={isMobile} />

                        {/* Index 10: Arka Kapak (Sağ) */}
                        <PageCover title="ARKA KAPAK" desc="Arka Kapak Dış Yüzü (Sağ)" isLeft={true} isMobile={isMobile} />
                    </HTMLFlipBook>
                </div>

                {/* Sağ Ok */}
                {!isZoomed && (
                    <button
                        onClick={nextButtonClick}
                        className="absolute right-2 md:right-8 z-30 p-2 md:p-4 text-black  dark:text-white cursor-pointer transition-colors"
                        aria-label="Sonraki Sayfa"
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>
                )}
            </div>

            {/* Alt Kontrol Çubuğu (Sadece Mobil/Tablet) */}
            <div className="bg-black text-white p-2 md:p-3 flex md:hidden items-center justify-between z-40 relative">
                <div className="flex items-center gap-2 md:gap-4">
                    <button onClick={toggleZoom} className="p-2 hover:text-[#009FE3] transition-colors" title="Yakınlaştır">
                        {isZoomed ? <ZoomOut size={20} strokeWidth={1.5} /> : <ZoomIn size={20} strokeWidth={1.5} />}
                    </button>
                    <button className="p-2 hover:text-[#009FE3] transition-colors hidden sm:block" title="Izgara Görünümü"><Grid size={20} strokeWidth={1.5} /></button>
                    <button className="p-2 hover:text-[#009FE3] transition-colors hidden sm:block" title="Otomatik Oynat"><Play size={20} strokeWidth={1.5} /></button>
                    <button onClick={() => setIsSoundEnabled(!isSoundEnabled)} className="p-2 hover:text-[#009FE3] transition-colors" title="Ses">
                        {isSoundEnabled ? <Volume2 size={20} strokeWidth={1.5} /> : <VolumeX size={20} strokeWidth={1.5} />}
                    </button>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <button onClick={prevButtonClick} className="p-2 hover:text-[#009FE3] transition-colors"><ArrowLeft size={20} strokeWidth={1.5} /></button>

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

                    <button onClick={nextButtonClick} className="p-2 hover:text-[#009FE3] transition-colors"><ArrowRight size={20} strokeWidth={1.5} /></button>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <button className="p-2 hover:text-[#009FE3] transition-colors" title="Paylaş"><Share2 size={20} strokeWidth={1.5} /></button>
                    <button className="p-2 hover:text-[#009FE3] transition-colors hidden sm:block" title="Tam Ekran"><Maximize size={20} strokeWidth={1.5} /></button>
                    <button className="p-2 hover:text-[#009FE3] transition-colors hidden sm:block" title="E-Posta"><Mail size={20} strokeWidth={1.5} /></button>
                    <button className="p-2 hover:text-[#009FE3] transition-colors hidden sm:block" title="Metin"><Type size={20} strokeWidth={1.5} /></button>
                </div>
            </div>
        </div>
    );
}