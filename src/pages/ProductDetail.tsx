import { useEffect, useLayoutEffect, useState } from 'react';
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
                    className="mt-4 text-[#009FE3]  hover:underline"
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
                {/* Breadcrumb & Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black/5">
                            <img
                                src={thumbnails[selectedImage]}
                                alt={product.name[language]}
                                className="w-full h-full object-cover"
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
                                className="absolute bottom-4 left-4 p-2 bg-white dark:bg-neutral-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-neutral-600 transition-colors"
                                aria-label="Görseli büyüt"
                                title="Görseli büyüt"
                            >
                                <Maximize2 size={20} className="text-black dark:text-white" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {thumbnails.map((thumb, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`w-24 h-24 flex-shrink-0 border-2 rounded-md cursor-pointer overflow-hidden ${
                                        selectedImage === idx
                                            ? 'border-black dark:border-white'
                                            : 'border-transparent hover:border-gray-300 dark:hover:border-neutral-600'
                                    }`}
                                >
                                    <img
                                        src={thumb}
                                        alt={`Thumbnail ${idx}`}
                                        className="w-full h-full object-cover p-2"
                                        width={200}
                                        height={200}
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                        referrerPolicy="no-referrer"
                                        draggable={false}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex border-b border-gray-200 dark:border-neutral-700 mb-8 overflow-x-auto">
                            {[
                                { id: 'about', label: t('product.tabs.about') },
                                { id: 'drawings', label: t('product.tabs.drawings') },
                                { id: 'options', label: t('product.tabs.options') },
                            ].map((tab) => (
                                <button
                                    aria-label="info"
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id as TabKey)}
                                    className={`px-6 py-4 text-xs md:text-sm font-bold uppercase tracking-wide whitespace-nowrap border-b-2 transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-[#009FE3] text-[#005A8E] dark:text-[#38BDF8]'
                                            : 'border-transparent text-gray-700 dark:text-gray-300 hover:text-[#005A8E] dark:hover:text-[#38BDF8]'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="mb-12 min-h-[300px]">
                            {activeTab === 'about' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                    <div className="border border-gray-200 dark:border-neutral-700 rounded-sm overflow-hidden">
                                        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-bold text-gray-700">
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

                                        <div className="bg-gray-50 px-6 py-3 border-y border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-bold text-gray-700 mt-4">
                                            {t('product.table.temp')}
                                        </div>

                                        <div className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <div className="grid grid-cols-2">
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
                                    <div className="rounded-lg p-4">
                                        {drawingImages.length > 0 ? (
                                            <div className="space-y-4">
                                                <div className="relative rounded-lg border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 overflow-hidden">
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
                                                    <div className="flex gap-3 overflow-x-auto pb-2">
                                                        {drawingImages.map((img: string, idx: number) => (
                                                            <button
                                                                key={`${img}-${idx}`}
                                                                type="button"
                                                                onClick={() => setSelectedDrawingImage(idx)}
                                                                className={`w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 bg-white dark:bg-neutral-900 ${
                                                                    selectedDrawingImage === idx
                                                                        ? 'border-white'
                                                                        : 'border-transparent hover:border-gray-300 dark:hover:border-neutral-600'
                                                                }`}
                                                                aria-label={`Teknik çizim ${idx + 1}`}
                                                                title={`Teknik çizim ${idx + 1}`}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`Teknik çizim thumb ${idx + 1}`}
                                                                    className="w-full h-full object-cover p-1"
                                                                    width={200}
                                                                    height={200}
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    fetchPriority="low"
                                                                    referrerPolicy="no-referrer"
                                                                    draggable={false}
                                                                />
                                                            </button>
                                                        ))}
                                                    </div>
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
                                <div className="text-gray-500 dark:text-white italic p-8 text-center bg-gray-50 dark:bg-neutral-800 rounded-lg">
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