import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, LayoutGrid, Maximize2, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';

type TabKey = 'about' | 'drawings' | 'catalog' | 'options';

type LightboxKind = 'main' | 'drawing';
type LightboxState = { kind: LightboxKind; index: number };

function useIsomorphicLayoutEffect(effect: React.EffectCallback, deps: React.DependencyList) {
    const useLE = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLE(effect, deps);
}

type HorizontalScrollerProps = {
    children: ReactNode;
    ariaLabel: string;
    wrapperClassName?: string;
    viewportClassName?: string;
    contentClassName?: string;
};

function HorizontalScroller({
                                children,
                                ariaLabel,
                                wrapperClassName = '',
                                viewportClassName = '',
                                contentClassName = '',
                            }: HorizontalScrollerProps) {
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollState = () => {
        const el = viewportRef.current;
        if (!el) return;

        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft < maxScrollLeft - 4);
    };

    const scrollByAmount = (dir: -1 | 1) => {
        const el = viewportRef.current;
        if (!el) return;

        const amount = Math.max(el.clientWidth * 0.72, 220);
        el.scrollBy({
            left: dir * amount,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        updateScrollState();

        const el = viewportRef.current;
        if (!el) return;

        const handleScroll = () => updateScrollState();

        el.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', updateScrollState);

        let resizeObserver: ResizeObserver | null = null;

        if (typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(() => updateScrollState());
            resizeObserver.observe(el);
        }

        return () => {
            el.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateScrollState);
            resizeObserver?.disconnect();
        };
    }, [children]);

    return (
        <div className={`relative ${wrapperClassName}`}>
            <div
                className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-10 md:w-14 bg-gradient-to-r from-white via-white/95 to-transparent dark:from-[#111827] dark:via-[#111827]/95 transition-opacity duration-300 ${
                    canScrollLeft ? 'opacity-100' : 'opacity-0'
                }`}
            />

            <div
                className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-10 md:w-14 bg-gradient-to-l from-white via-white/95 to-transparent dark:from-[#111827] dark:via-[#111827]/95 transition-opacity duration-300 ${
                    canScrollRight ? 'opacity-100' : 'opacity-0'
                }`}
            />

            {canScrollLeft && (
                <button
                    type="button"
                    onClick={() => scrollByAmount(-1)}
                    className="hidden sm:flex absolute left-2 top-1/2 z-20 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full border border-gray-200/80 dark:border-neutral-700/80 bg-white/95 dark:bg-neutral-900/95 shadow-lg backdrop-blur hover:scale-105 hover:bg-white dark:hover:bg-neutral-800 transition-all"
                    aria-label="Sola kaydır"
                    title="Sola kaydır"
                >
                    <ChevronLeft size={18} className="text-gray-800 dark:text-white" aria-hidden="true" />
                </button>
            )}

            {canScrollRight && (
                <button
                    type="button"
                    onClick={() => scrollByAmount(1)}
                    className="hidden sm:flex absolute right-2 top-1/2 z-20 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full border border-gray-200/80 dark:border-neutral-700/80 bg-white/95 dark:bg-neutral-900/95 shadow-lg backdrop-blur hover:scale-105 hover:bg-white dark:hover:bg-neutral-800 transition-all"
                    aria-label="Sağa kaydır"
                    title="Sağa kaydır"
                >
                    <ChevronRight size={18} className="text-gray-800 dark:text-white" aria-hidden="true" />
                </button>
            )}

            <div
                ref={viewportRef}
                aria-label={ariaLabel}
                className={`overflow-x-auto overflow-y-hidden scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x ${viewportClassName}`}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <div className={`inline-flex min-w-full ${contentClassName}`}>{children}</div>
            </div>
        </div>
    );
}

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, language } = useLanguage();
    const product = products.find((p) => p.id === Number(id));
    const [activeTab, setActiveTab] = useState<TabKey>('about');
    const [selectedImage, setSelectedImage] = useState(0);
    const [isExtraInfoOpen, setIsExtraInfoOpen] = useState(true);
    const [isSpecificationOpen, setIsSpecificationOpen] = useState(false);
    const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
    const [selectedDrawingImage, setSelectedDrawingImage] = useState(0);
    const [lightbox, setLightbox] = useState<LightboxState | null>(null);

    useEffect(() => {
        setSelectedImage(0);
        setSelectedDrawingImage(0);
        setLightbox(null);
    }, [id]);

    useEffect(() => {
        if (!lightbox) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [lightbox]);

    if (!product) {
        return (
            <div className="min-h-screen pt-32 text-center">
                <h1 className="text-2xl font-bold dark:text-white">{t('product.notFoundButton')}</h1>
                <button
                    aria-label="Back to Product"
                    onClick={() => navigate('/products')}
                    className="mt-4 text-[#009FE3] hover:underline"
                    type="button"
                >
                    {t('product.notFound')}
                </button>
            </div>
        );
    }

    const thumbnails = product.thumbnails || [product.image, product.image];

    const drawingImages = Array.isArray((product as any).drawingImage) ? (product as any).drawingImage : [];

    const specs = (product as any).specs || {
        modules: [937, 1250, 1875, 2500],
        sidePanel: 40,
        temp: 'M1 (-1/+5°C) - M2 (-1/+7°C)',
        optionalAccessory: [],
        technicalSpecification: [],
    };

    const tabs = [
        { id: 'about', label: t('product.tabs.about') },
        { id: 'drawings', label: t('product.tabs.drawings') },
        { id: 'options', label: t('product.tabs.options') },
    ] as const;

    const openLightbox = (kind: LightboxKind, index: number) => {
        setLightbox({ kind, index });
    };

    const closeLightbox = () => {
        setLightbox(null);
    };

    const getLightboxLen = (kind: LightboxKind) => (kind === 'main' ? thumbnails.length : drawingImages.length);

    const goStep = (dir: -1 | 1) => {
        setLightbox((prev) => {
            if (!prev) return prev;

            const len = getLightboxLen(prev.kind);
            if (len <= 1) return prev;

            const nextIndex = (prev.index + dir + len) % len;

            if (prev.kind === 'main') setSelectedImage(nextIndex);
            else setSelectedDrawingImage(nextIndex);

            return { ...prev, index: nextIndex };
        });
    };

    const goPrev = () => goStep(-1);
    const goNext = () => goStep(1);

    useIsomorphicLayoutEffect(() => {
        if (typeof document === 'undefined') return;

        const href = thumbnails[0];
        if (!href) return;

        const selector = `link[data-lcp-preload="product-detail-main"][href="${href}"]`;
        const existing = document.head.querySelector(selector);
        if (existing) return;

        const link = document.createElement('link');
        link.setAttribute('rel', 'preload');
        link.setAttribute('as', 'image');
        link.setAttribute('href', href);
        link.setAttribute('fetchpriority', 'high');
        link.setAttribute('data-lcp-preload', 'product-detail-main');
        document.head.appendChild(link);

        return () => {
            try {
                document.head.removeChild(link);
            } catch {
                // ignore
            }
        };
    }, [id, thumbnails]);

    useEffect(() => {
        if (!lightbox) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                closeLightbox();
                return;
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goPrev();
                return;
            }
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                goNext();
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [lightbox]);

    return (
        <div className="bg-white dark:bg-[#111827] min-h-screen pt-24 pb-16 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2 flex-wrap">
                        <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">
                            {t('products.breadcrumb.home')}
                        </Link>
                        <ChevronRight size={14} aria-hidden="true" />
                        <Link to="/products" className="hover:text-black dark:hover:text-white transition-colors">
                            {t('menu.products')}
                        </Link>
                        <ChevronRight size={14} aria-hidden="true" />
                        <span className="font-bold text-black dark:text-white">{product.name[language]}</span>
                    </div>

                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <button
                            type="button"
                            className="hover:text-black dark:hover:text-white transition-colors"
                            onClick={() => navigate(`/products/${Number(id) > 1 ? Number(id) - 1 : 1}`)}
                            aria-label="Önceki ürün"
                            title="Önceki ürün"
                        >
                            <ChevronLeft size={20} aria-hidden="true" />
                        </button>

                        <Link
                            to="/products"
                            className="hover:text-black dark:hover:text-white transition-colors"
                            aria-label="Ürün listesi"
                            title="Ürün listesi"
                        >
                            <LayoutGrid size={20} aria-hidden="true" />
                        </Link>

                        <button
                            type="button"
                            className="hover:text-black dark:hover:text-white transition-colors"
                            onClick={() =>
                                navigate(`/products/${Number(id) < products.length ? Number(id) + 1 : products.length}`)
                            }
                            aria-label="Sonraki ürün"
                            title="Sonraki ürün"
                        >
                            <ChevronRight size={20} aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <h1 className="text-lg md:text-4xl font-bold mb-2 md:mb-12 text-gray-900 dark:text-white">
                    {product.name[language]}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
                    <div className="space-y-6">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200/70 dark:border-neutral-700/70 bg-gradient-to-br from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-800 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                            <img
                                src={thumbnails[selectedImage]}
                                alt={product.name[language]}
                                className="w-full h-full object-inherit"
                                width={1200}
                                height={900}
                                loading="eager"
                                decoding="async"
                                fetchPriority="high"
                                referrerPolicy="no-referrer"
                                draggable={false}
                            />

                            <button
                                type="button"
                                onClick={() => openLightbox('main', selectedImage)}
                                className="absolute bottom-4 left-4 p-2.5 bg-white/95 dark:bg-neutral-800/95 border border-gray-200 dark:border-neutral-700 rounded-full shadow-lg hover:scale-105 hover:bg-white dark:hover:bg-neutral-700 transition-all"
                                aria-label="Görseli büyüt"
                                title="Görseli büyüt"
                            >
                                <Maximize2 size={18} className="text-black dark:text-white" aria-hidden="true" />
                            </button>
                        </div>

                        <HorizontalScroller
                            ariaLabel="Ürün küçük görselleri"
                            wrapperClassName="rounded-2xl border border-gray-200/70 dark:border-neutral-700/70 bg-gray-50/70 dark:bg-neutral-900/50 px-2 py-2"
                            viewportClassName="px-1"
                            contentClassName="gap-3"
                        >
                            {thumbnails.map((thumb, idx) => {
                                const active = selectedImage === idx;

                                return (
                                    <button
                                        key={`${thumb}-${idx}`}
                                        type="button"
                                        onClick={() => setSelectedImage(idx)}
                                        className={`group relative shrink-0 snap-start w-[84px] h-[84px] md:w-24 md:h-24 rounded-2xl overflow-hidden border transition-all duration-200 ${
                                            active
                                                ? 'border-[#009FE3] bg-white dark:bg-neutral-800 shadow-[0_8px_24px_rgba(0,159,227,0.20)] scale-[0.98]'
                                                : 'border-gray-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-900 hover:border-gray-300 dark:hover:border-neutral-500 hover:-translate-y-0.5'
                                        }`}
                                        aria-label={`Görsel ${idx + 1}`}
                                        title={`Görsel ${idx + 1}`}
                                    >
                                        <img
                                            src={thumb}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className="w-full h-full object-cover p-0 rounded-2xl"
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            decoding="async"
                                            fetchPriority="low"
                                            referrerPolicy="no-referrer"
                                            draggable={false}
                                        />

                                        <div
                                            className={`absolute inset-0 ring-1 ring-inset rounded-2xl transition-colors ${
                                                active
                                                    ? 'ring-[#009FE3]/30'
                                                    : 'ring-transparent group-hover:ring-gray-300/70 dark:group-hover:ring-neutral-600/70'
                                            }`}
                                        />
                                    </button>
                                );
                            })}
                        </HorizontalScroller>
                    </div>

                    <div>
                        <div className="mb-8 rounded-2xl border border-gray-200/80 dark:border-neutral-700/80 bg-gray-50/80 dark:bg-transparent p-1.5">
                            <div className="grid grid-cols-3 gap-1.5">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveTab(tab.id as TabKey)}
                                        className={`min-h-[52px] rounded-xl px-3 md:px-4 py-3 text-[11px] md:text-sm font-bold uppercase tracking-[0.08em] transition-all duration-200 ${
                                            activeTab === tab.id
                                                ? 'bg-white  text-black   shadow-sm dark:shadow-gray-600 '
                                                : 'text-gray-700 dark:text-white    hover:bg-gray-100 dark:hover:bg-white/30'
                                        }`}
                                        aria-label={tab.label}
                                        title={tab.label}
                                    >
                                        <span className="block leading-tight text-center break-words">{tab.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-12 min-h-[300px]">
                            {activeTab === 'about' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                    <div className="border border-gray-200 dark:border-neutral-700 rounded-2xl overflow-hidden bg-white dark:bg-transparent">
                                        <div className="bg-gray-50 dark:text-black px-6 py-3 border-b border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-bold text-gray-700 ">
                                            {t('product.table.modules')}
                                        </div>

                                        <div className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <div className="grid grid-cols-2">
                                                <div className="p-4 text-xs md:text-sm text-gray-600 dark:text-white border-r border-gray-200 dark:border-neutral-700">
                                                    {t('product.table.length')}
                                                </div>
                                                <div className="p-4 text-xs md:text-sm font-medium text-black dark:text-white">
                                                    {specs.modules}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2">
                                                <div className="p-4 text-xs md:text-sm text-gray-600 dark:text-white border-r border-gray-200 dark:border-neutral-700">
                                                    {t('product.table.sidePanel')}
                                                </div>
                                                <div className="p-4 text-xs md:text-sm font-medium text-black dark:text-white">
                                                    {specs.sidePanel}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50  px-6 py-3 border-y border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-bold text-gray-700 dark:text-black mt-4">
                                            {t('product.table.temp')}
                                        </div>

                                        <div className="divide-y   ">
                                            <div className="grid grid-cols-2 ">
                                                <div className="p-4 text-xs md:text-sm text-gray-600 dark:text-white border-r border-gray-200 dark:border-neutral-700">
                                                    {t('product.table.temp')}
                                                </div>
                                                <div className="p-4 text-xs md:text-sm font-medium text-black dark:text-white">
                                                    {specs.temp}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'drawings' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                    <div className="rounded-2xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4">
                                        {drawingImages.length > 0 ? (
                                            <div className="space-y-4">
                                                <div className="relative rounded-2xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 overflow-hidden">
                                                    <img
                                                        src={drawingImages[selectedDrawingImage]}
                                                        alt={`${product.name[language]} teknik çizim ${selectedDrawingImage + 1}`}
                                                        className="w-full h-auto object-contain rounded"
                                                        width={1400}
                                                        height={900}
                                                        loading="lazy"
                                                        decoding="async"
                                                        fetchPriority="low"
                                                        referrerPolicy="no-referrer"
                                                        draggable={false}
                                                    />

                                                    <button
                                                        type="button"
                                                        onClick={() => openLightbox('drawing', selectedDrawingImage)}
                                                        className="absolute bottom-3 left-3 p-2 bg-white/90 dark:bg-neutral-700/90 rounded-full shadow-md hover:bg-white dark:hover:bg-neutral-600 transition-colors"
                                                        aria-label="Teknik çizimi büyüt"
                                                        title="Teknik çizimi büyüt"
                                                    >
                                                        <Maximize2 size={18} className="text-black dark:text-white" aria-hidden="true" />
                                                    </button>
                                                </div>

                                                {drawingImages.length > 1 && (
                                                    <HorizontalScroller
                                                        ariaLabel="Teknik çizim küçük görselleri"
                                                        wrapperClassName="rounded-2xl border border-gray-200/70 dark:border-neutral-700/70 bg-gray-50/70 dark:bg-neutral-900/50 px-2 py-2"
                                                        viewportClassName="px-1"
                                                        contentClassName="gap-3"
                                                    >
                                                        {drawingImages.map((img: string, idx: number) => {
                                                            const active = selectedDrawingImage === idx;

                                                            return (
                                                                <button
                                                                    key={`${img}-${idx}`}
                                                                    type="button"
                                                                    onClick={() => setSelectedDrawingImage(idx)}
                                                                    className={`group relative shrink-0 snap-start w-[78px] h-[78px] md:w-20 md:h-20 rounded-2xl overflow-hidden border transition-all duration-200 ${
                                                                        active
                                                                            ? 'border-[#009FE3] bg-white dark:bg-neutral-800 shadow-[0_8px_24px_rgba(0,159,227,0.20)]'
                                                                            : 'border-gray-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-900 hover:border-gray-300 dark:hover:border-neutral-500 hover:-translate-y-0.5'
                                                                    }`}
                                                                    aria-label={`Teknik çizim ${idx + 1}`}
                                                                    title={`Teknik çizim ${idx + 1}`}
                                                                >
                                                                    <img
                                                                        src={img}
                                                                        alt={`Teknik çizim thumb ${idx + 1}`}
                                                                        className="w-full h-full object-cover p-0 rounded-2xl"
                                                                        width={200}
                                                                        height={200}
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        fetchPriority="low"
                                                                        referrerPolicy="no-referrer"
                                                                        draggable={false}
                                                                    />

                                                                    <div
                                                                        className={`absolute inset-0 ring-1 ring-inset rounded-2xl transition-colors ${
                                                                            active
                                                                                ? 'ring-[#009FE3]/30'
                                                                                : 'ring-transparent group-hover:ring-gray-300/70 dark:group-hover:ring-neutral-600/70'
                                                                        }`}
                                                                    />
                                                                </button>
                                                            );
                                                        })}
                                                    </HorizontalScroller>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-gray-500 md:text-sm text-xs dark:text-white italic p-8 text-center">
                                                {t('product.table.technicalDrawingImageNotAdded')}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'options' && (
                                <div className="text-gray-500 dark:text-white italic p-8 text-center bg-gray-50 dark:bg-neutral-800 rounded-2xl border border-gray-200 dark:border-neutral-700">
                                    Options content coming soon...
                                </div>
                            )}
                        </div>

                        <div className="border-t border-gray-200 dark:border-neutral-700 pt-4">
                            <button
                                type="button"
                                onClick={() => setIsExtraInfoOpen(!isExtraInfoOpen)}
                                className="flex items-center justify-between w-full py-4 text-left group"
                                aria-expanded={isExtraInfoOpen}
                            >
                                <span className="font-bold text-xs md:text-sm uppercase tracking-wider text-black dark:text-white">
                                    {t('product.extra.title')}
                                </span>
                                <ChevronRight
                                    size={20}
                                    className={`transform transition-transform text-black dark:text-white ${
                                        isExtraInfoOpen ? '-rotate-90' : 'rotate-90'
                                    }`}
                                    aria-hidden="true"
                                />
                            </button>

                            <AnimatePresence>
                                {isExtraInfoOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="py-4 space-y-4">
                                            <div className="flex justify-between border-b border-gray-100 dark:border-neutral-800 pb-2 border-dotted">
                                                <span className="font-bold text-xs md:text-sm text-black dark:text-white">
                                                    {t('product.extra.product')}
                                                </span>
                                                <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                                    {product.type[language]}
                                                </span>
                                            </div>

                                            <div className="flex justify-between border-b border-gray-100 dark:border-neutral-800 pb-2 border-dotted">
                                                <span className="font-bold text-xs md:text-sm text-black dark:text-white">
                                                    {t('product.extra.categories')}
                                                </span>
                                                <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                                    {product.category[language]}
                                                </span>
                                            </div>

                                            <div>
                                                <div
                                                    onClick={() => setIsSpecificationOpen((prev) => !prev)}
                                                    className="flex justify-between border-b border-gray-100 dark:border-neutral-800 pb-2 border-dotted cursor-pointer"
                                                    role="button"
                                                    tabIndex={0}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            e.preventDefault();
                                                            setIsSpecificationOpen((prev) => !prev);
                                                        }
                                                    }}
                                                >
                                                    <span className="font-bold text-xs md:text-sm text-black dark:text-white">
                                                        {t('product.table.specification')}
                                                    </span>

                                                    <span className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                                        <ChevronRight
                                                            size={16}
                                                            className={`transition-transform duration-200 ${
                                                                isSpecificationOpen ? 'rotate-90' : 'rotate-0'
                                                            }`}
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </div>

                                                <AnimatePresence initial={false}>
                                                    {isSpecificationOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.25 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-3 pb-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                                                                {Array.isArray(specs.technicalSpecification) &&
                                                                specs.technicalSpecification.length > 0 ? (
                                                                    <ul className="list-none pl-0 space-y-1">
                                                                        {specs.technicalSpecification.map((item: any, index: number) => (
                                                                            <li key={index} className="flex items-start gap-2">
                                                                                <span className="text-[#009FE3] leading-5">•</span>
                                                                                <span>{item[language]}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                ) : (
                                                                    <span>{t('product.technical')}</span>
                                                                )}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            <div>
                                                <div
                                                    onClick={() => setIsAccessoriesOpen((prev) => !prev)}
                                                    className="flex justify-between border-b border-gray-100 dark:border-neutral-800 pb-2 border-dotted cursor-pointer"
                                                    role="button"
                                                    tabIndex={0}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            e.preventDefault();
                                                            setIsAccessoriesOpen((prev) => !prev);
                                                        }
                                                    }}
                                                >
                                                    <span className="font-bold text-xs md:text-sm text-black dark:text-white">
                                                        {t('product.table.optionalAccessories')}
                                                    </span>

                                                    <span className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                                        <ChevronRight
                                                            size={16}
                                                            className={`transition-transform duration-200 ${
                                                                isAccessoriesOpen ? 'rotate-90' : 'rotate-0'
                                                            }`}
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </div>

                                                <AnimatePresence initial={false}>
                                                    {isAccessoriesOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.25 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-3 pb-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                                                                {Array.isArray(specs.optionalAccessory) &&
                                                                specs.optionalAccessory.length > 0 ? (
                                                                    <ul className="list-none pl-0 space-y-1">
                                                                        {specs.optionalAccessory.map((item: any, index: number) => (
                                                                            <li key={index} className="flex items-start gap-2">
                                                                                <span className="text-[#009FE3] leading-5">•</span>
                                                                                <span>{item[language]}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                ) : (
                                                                    <span>{t('product.optional')}</span>
                                                                )}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={closeLightbox}
                                className="absolute -top-10 right-0 md:top-3 md:right-3 z-20 p-2 rounded-full bg-white/90 dark:bg-neutral-700/90 hover:bg-white dark:hover:bg-neutral-600 transition-colors"
                                aria-label="Kapat"
                                title="Kapat"
                            >
                                <X size={18} className="text-black dark:text-white" aria-hidden="true" />
                            </button>

                            <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-black/50 text-white text-xs">
                                {(() => {
                                    const len = getLightboxLen(lightbox.kind);
                                    return `${lightbox.index + 1} / ${len}`;
                                })()}
                            </div>

                            {getLightboxLen(lightbox.kind) > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            goPrev();
                                        }}
                                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                                        aria-label="Önceki"
                                        title="Önceki"
                                    >
                                        <ChevronLeft size={28} className="text-white" aria-hidden="true" />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            goNext();
                                        }}
                                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                                        aria-label="Sonraki"
                                        title="Sonraki"
                                    >
                                        <ChevronRight size={28} className="text-white" aria-hidden="true" />
                                    </button>
                                </>
                            )}

                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={`${lightbox.kind}-${lightbox.index}`}
                                    src={lightbox.kind === 'main' ? thumbnails[lightbox.index] : drawingImages[lightbox.index]}
                                    alt={
                                        lightbox.kind === 'main'
                                            ? `${product.name[language]} görsel ${lightbox.index + 1}`
                                            : `${product.name[language]} teknik çizim ${lightbox.index + 1}`
                                    }
                                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl bg-white dark:bg-neutral-900 select-none"
                                    draggable={false}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.15 }}
                                    drag={getLightboxLen(lightbox.kind) > 1 ? 'x' : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.12}
                                    onDragEnd={(_, info) => {
                                        if (info.offset.x > 80) goPrev();
                                        if (info.offset.x < -80) goNext();
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                    loading="eager"
                                    decoding="async"
                                    fetchPriority="high"
                                    referrerPolicy="no-referrer"
                                />
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}