import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
    Grid,
    List,
    LayoutGrid,
    SlidersHorizontal,
    ChevronRight,
    ChevronDown,
    ChevronUp,
    X
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence, useDragControls } from 'motion/react';
import { products } from '../data/products';
import { Product } from "@/src/data/products/types.ts";

function ProductCard({
                         product,
                         priority = 'auto',
                         loading = 'lazy',
                     }: {
    product: Product;
    key?: React.Key;
    priority?: 'high' | 'low' | 'auto';
    loading?: 'eager' | 'lazy';
}) {
    const { language } = useLanguage();
    const [currentImage, setCurrentImage] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);
    const images = [product.image, ...(product.thumbnails || [])];

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (images.length <= 1) return;

        const { left, width } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const sectionWidth = width / images.length;
        const newIndex = Math.min(Math.floor(x / sectionWidth), images.length - 1);

        setCurrentImage(Math.max(0, newIndex));
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (images.length <= 1) return;
        setTouchStartX(e.targetTouches[0].clientX);
        setTouchEndX(null);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (images.length <= 1) return;
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX) return;

        const distance = touchStartX - touchEndX;
        const isLeftSwipe = distance > 30;
        const isRightSwipe = distance < -30;

        if (isLeftSwipe) {
            setCurrentImage((prev) => (prev + 1) % images.length);
        } else if (isRightSwipe) {
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        }

        setTimeout(() => {
            setTouchStartX(null);
            setTouchEndX(null);
        }, 50);
    };

    const handleClick = (e: React.MouseEvent) => {
        if (touchStartX && touchEndX) {
            const distance = Math.abs(touchStartX - touchEndX);
            if (distance > 30) {
                e.preventDefault();
            }
        }
    };

    return (
        <Link
            to={`/products/${product.id}`}
            onClick={handleClick}
            className="group cursor-pointer border border-gray-300 dark:border-neutral-800 hover:border-gray-500 dark:hover:border-neutral-600 hover:shadow-lg transition-all duration-300 bg-white dark:bg-[#1a2232] p-2 sm:p-3 lg:p-4 flex flex-col rounded-xl"
            onMouseLeave={() => setCurrentImage(0)}
        >
            <div
                className="aspect-square overflow-hidden mb-2 sm:mb-3 lg:mb-4 relative bg-white dark:bg-[#1a2232] rounded-lg touch-pan-y"
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <img
                    src={images[currentImage]}
                    alt={product.name[language]}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    loading={loading}
                    decoding="async"
                    fetchPriority={priority}
                    width={800}
                    height={800}
                    draggable={false}
                />

                {images.length > 1 && (
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        {images.map((_: any, idx: number) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${
                                    currentImage === idx ? 'bg-[#009FE3] scale-125' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="space-y-1 flex-grow flex flex-col justify-end">
                <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-900 dark:text-white transition-colors leading-tight line-clamp-2">
                    {product.name[language]}
                </h3>

                <p className="text-xs sm:text-sm md:text-sm text-gray-700 dark:text-gray-300 leading-tight truncate">
                    {product.category[language]}
                </p>

                <p className="text-xs sm:text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-tight truncate">
                    {product.type[language]}
                </p>
            </div>
        </Link>
    );
}

export default function Products() {
    const { t, language } = useLanguage();
    const [searchParams] = useSearchParams();
    const dragControls = useDragControls();

    const searchQuery = (searchParams.get('search') || '').trim();
    const urlFilter = (searchParams.get('filter') || '').trim();
    const urlCat = (searchParams.get('cat') || '').trim();

    const normalize = (s: string) =>
        String(s ?? '')
            .toLocaleLowerCase('tr-TR')
            .replace(/\s*-\s*/g, '-')
            .replace(/\s+/g, ' ')
            .trim();

    const FILTER_TR_VALUE: Record<string, string> = {
        'filters.items.reyonDolabi': 'Reyon Dolabı',
        'filters.items.kasapDolabi': 'Kasap Dolabı',
        'filters.items.kasapTeshirDolabi': 'Kasap Teşhir Dolabı',
        'filters.items.kebabMezeDolabi': 'Kebab-Meze Dolabı',
        'filters.items.kebapMezeDolabi': 'Kebap - Meze Dolabı',
        'filters.items.kasapDolabiDikCamli': 'Kasap Dolabı Dik Camlı',
        'filters.items.reyonDolabiDikCamli': 'Reyon Dolabı Dik Camlı',
        'filters.items.balikMostraDolabi': 'Balık Mostra Dolabı',
        'filters.items.kasapDolabiDuzeCamli': 'Kasap Dolabı Düze Camlı',
        'filters.items.sogutmaliBalikDolabi': 'Soğutmalı Balık Dolabı',
        'filters.items.kasapReyonDolabiBombeCamli': 'Kasap Reyon Dolabı Bombe Camlı',
        'filters.items.kasapReyonDolabiDuzCamli': 'Kasap Reyon Dolabı Düz Camlı',
        'filters.items.mezeDolabiDikeyTip': 'Meze Dolabı Dikey Tip',
        'filters.items.sogukTeshirDolabi': 'Soğuk Teşhir Dolabı',
        'filters.items.yatayEklerPastaDolabi': 'Yatay Ekler Pasta Dolabı',
        'filters.items.venusPastaTeshirDolabi': 'VENUS - Pasta Teşhir Dolabı',
        'filters.items.moonBombeCamliReyonDolabi': 'MOON - Bombe Camlı Reyon Dolabı',
        'filters.items.fullMoonDikCamliReyonDolabi': 'FULL MOON - Dik Camlı Reyon Dolabı',
        'filters.items.newMoonDuzeCamliReyonDolabi': 'NEW MOON - Düz Camlı Reyon Dolabı',
        'filters.items.newMoonDuzCamliReyonDolabi': 'NEW MOON - Düz Camlı Reyon Dolabı',
        'filters.items.duzCamliReyonDolabi': 'Düz Camlı Reyon Dolabı',
        'filters.items.kuruSogutmaliReyonDolabi': 'Kuru Soğutmalı Reyon Dolabı',
        'filters.items.reyonTeshirDolabi': 'Reyon Teşhir Dolabı',
        'filters.items.kafeRestoranTeshirDolabi': 'Kafe Restoran Teşhir Dolabı',
        'filters.items.kasapReyonDolabi': 'Kasap Reyon Dolabı',
        'filters.items.uflemeliReyonDolabi': 'Üflemeli Reyon Dolabı',
        'filters.items.balikTeshirDolabi': 'Balık Teşhir Dolabı',
        'filters.items.mezeTeshirDolabi': 'Meze Teşhir Dolabı',
        'filters.items.kebapTeshirDolabi': 'Kebap Teşhir Dolabı',
        'filters.items.promosyonDolabi': 'Promosyon Dolabı',
        'filters.items.statikSogutmaliReyonDolabi': 'Statik Soğutmalı Reyon Dolabı',
        'filters.items.dikCamliReyonDolabi': 'Dik Camlı Reyon Dolabı',
        'filters.items.yarimCamliReyonDolabi': 'Yarım Camlı Reyon Dolabı',
        'filters.items.bombeCamliReyonDolabi': 'Bombe Camlı Reyon Dolabı',

        'filters.items.kuzuEtAskiDolabi': 'Kuzu Et Askı Dolabı',
        'filters.items.dikeyPastaDolabi': 'Dikey Pasta Dolabı',
        'filters.items.manavSutlukDolabi': 'Manav Sütlük Dolabı',
        'filters.items.yarimBoySutlukDolabi': 'Yarım Boy Sütlük Dolabı',
        'filters.items.camKapakliSutlukDolabi': 'Cam Kapaklı Sütlük Dolabı',
        'filters.items.sutlukDolabi': 'Sütlük Dolabı',
        'filters.items.etAskiDolabi': 'Et Askı Dolabı',
        'filters.items.dryAgedDolabi': 'Dry Aged Dolabı',

        'filters.items.dikeyTipAlttanMotorluSutluk': 'Dikey Tip Alttan Motorlu Sütlük',
        'filters.items.dikeySiseSogutucuAhsapKaplamali': 'Dikey Şişe soğutucu Ahşap Kaplamalı',
        'filters.items.petrolDolabiSiseSogutucu': 'Petrol Dolabı Şişe Soğutucu',
        'filters.items.mesrubatVeKolaDolabi': 'Meşrubat ve kola Dolabı',
        'filters.items.siseSogutucuDolabi': 'Şişe Soğutucu Dolabı',
        'filters.items.marketDolabi': 'Market Dolabı',
        'filters.items.sarkuteriDolabi': 'Şarküteri Dolabı',
        'filters.items.duvarTipiPeynirReyonlari': 'Duvar Tipi Peynir Reyonları',
        'filters.items.duvarTipiSutlukReyonlari': 'Duvar Tipi Sütlük Reyonları',

        'filters.items.pastaCikolataDolabi': 'Pasta - Çikolata Dolabı',
        'filters.items.eklerPastaDolabi': 'Ekler Pasta Dolabı',
        'filters.items.pastaDolabi': 'Pasta Dolabı',
        'filters.items.yatayPastaDolabi': 'Yatay Pasta Dolabı',
        'filters.items.pastaneTezgahi': 'Pastane Tezgahı',
        'filters.items.firinDolabi': 'Fırın Dolabı',
        'filters.items.isitmaliBorekTezgahi': 'Isıtmalı Börek Tezgahı',
        'filters.items.isitmaliPogacaTezgahi': 'Isıtmalı Poğaça Tezgahı',
        'filters.items.kumpirWaffleDolabi': 'Kumpir Waffle Dolabı',
        'filters.items.kuruyemisDolabi': 'Kuruyemiş Dolabı',
        'filters.items.cikolataDolabi': 'Çikolata Dolabı',
        'filters.items.baklavaTezgahi': 'Baklava Tezgahı',
        'filters.items.kuruPastaDolabi': 'Kuru Pasta Dolabı',
        'filters.items.cephePastaTeshirDolabi': 'Cephe Pasta Teşhir Dolabı',
        'filters.items.yatayPastaTeshirDolabi': 'Yatay Pasta Teşhir Dolabı',
        'filters.items.pastaTeshirDolabi': 'Pasta Teşhir Dolabı',

        'filters.items.ortaTipPaslanmazDavlumbaz': 'Orta Tip Paslanmaz Davlumbaz',
        'filters.items.kutuTipiPaslanmazDavlumbaz': 'Kutu Tipi Paslanmaz Davlumbaz',
        'filters.items.duvarTipiFiltreliDavlumbaz': 'Duvar Tipi Filtreli Davlumbaz',
        'filters.items.duvarTipiDavlumbaz': 'Duvar Tipi Davlumbaz',
        'filters.items.dikeyTipBuzdolabiPaslanmazCiftKapiliCamli':
            'Dikey Tip Buzdolabı Paslanmaz Çift Kapılı Camlı',
        'filters.items.paslanmaz': 'Paslanmaz',
        'filters.items.dikeyTipBuzBuzdolabiCiftKapili': 'Dikey Tip Buz Buzdolabı Çift Kapılı',
        'filters.items.dikeyTipBuzdolabiCamli': 'Dikey Tip Buzdolabı Camlı',
        'filters.items.paslanmazBuzdolabiDikeyTip': 'Paslanmaz Buzdolabı Dikey Tip',
        'filters.items.tezgahAltiDolapCamli': 'Tezgah Altı Dolap Camlı',
        'filters.items.tezgahAltiBuzdolabi': 'Tezgah Altı Buzdolabı',
        'filters.items.calismaTezgahiAraRafli': 'Çalışma Tezgahı Ara Raflı',
        'filters.items.calismaTezgahiTabanRafli': 'Çalışma Tezgahı Taban Raflı',
        'filters.items.calismaTezgahiPolietilenTablaliTabanRafli':
            'Çalışma Tezgahı Polietilen Tablalı Taban Raflı',
        'filters.items.tekEvyeliTezgahPaslanmaz': 'Tek Evyeli Tezgah Paslanmaz',
        'filters.items.sogukOdaRafi': 'Soğuk Oda Rafı',
        'filters.items.paslanmazTelRaf': 'Paslanmaz Tel Raf',
        'filters.items.telRafIstifRafi': 'Tel Raf İstif Rafı',
        'filters.items.paslanmazEvyeliDolapliTezgah': 'Paslanmaz Evyeli Dolaplı Tezgah',
        'filters.items.paslanmazDolapliCalismaTezgahi': 'Paslanmaz Dolaplı Çalışma Tezgahı',
        'filters.items.paslanmazCalismaTezgahi': 'Paslanmaz Çalışma Tezgahı',

        'filters.items.sutluk': 'Sütlük',
        'filters.items.zeytinDolabi': 'Zeytin Dolabı',
        'filters.items.manavTezgahi': 'Manav Tezgahı',
        'filters.items.zeytinlikVeRecetelikDolabi': 'Zeytinlik ve Reçetelik Dolabı',

        'filters.items.endustriyelSogutmaSistemleri': 'Endüstriyel Soğutma Sistemleri',
        'filters.items.monoblokSogutmaSistemleri': 'Monoblok Soğutma Sistemleri',
        'filters.items.splitSogutmaGrubu': 'Split Soğutma Grubu',
        'filters.items.merkeziSogutmaSistemleri': 'Merkezi Soğutma Sistemleri',
        'filters.items.bireyselSogutmaGruplari': 'Bireysel Soğutma Grupları',

        'filters.items.sogukHavaDeposu': 'Soğuk Hava Deposu',
        'filters.items.eksi18SogukHavaDeposu': '-18 Derece Soğuk Hava Deposu',
        'filters.items.pvcSeritHavaPerdesi': 'PVC Şerit Hava Perdesi',
        'filters.items.pvcPerde': 'PVC Perde',
        'filters.items.pvcPerdeSistemleri': 'PVC Perde Sistemleri',
        'filters.items.sogukOdaPanelleri': 'Soğuk Oda Panelleri',
        'filters.items.sogukHavaDeposuPvcAksesuar':
            'Soğuk Hava Deposu PVC Perde Sistemleri Soğuk Hava Deposu Aksesuarları',
        'filters.items.menteseliSogukHavaDeposuKapisi': 'Menteşeli Soğuk Hava Deposu Kapısı',
        'filters.items.surguluSogukHavaDeposuKapisi': 'Sürgülü Soğuk Hava Deposu Kapısı',

        'filters.items.yarimBoySurtlukDolabi': 'Yarım Boy Sütlük Dolabı'
    };

    const getTrValue = (key: string) => FILTER_TR_VALUE[key] ?? key;

    const appliedUrlPresetKeyRef = useRef<string | null>(null);
    const [draftFilters, setDraftFilters] = useState<string[]>([]);
    const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

    const [viewMode, setViewMode] = useState<'grid3' | 'grid4' | 'list'>('grid3');
    const [expandedCategories, setExpandedCategories] = useState<string[]>(['service']);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        if (isMobileFilterOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileFilterOpen]);

    useEffect(() => {
        if (isMobileFilterOpen) {
            setDraftFilters(appliedFilters);
        }
    }, [isMobileFilterOpen, appliedFilters]);

    const filterCategories = useMemo(
        () => [
            {
                id: 'service',
                title: t('menu.serviceAisles'),
                items: [
                    'filters.items.reyonDolabi',
                    'filters.items.kasapDolabi',
                    'filters.items.kasapTeshirDolabi',
                    'filters.items.kebabMezeDolabi',
                    'filters.items.kasapDolabiDikCamli',
                    'filters.items.reyonDolabiDikCamli',
                    'filters.items.balikMostraDolabi',
                    'filters.items.kasapDolabiDuzeCamli',
                    'filters.items.sogutmaliBalikDolabi',
                    'filters.items.kasapReyonDolabiBombeCamli',
                    'filters.items.mezeDolabiDikeyTip',
                    'filters.items.sogukTeshirDolabi',
                    'filters.items.yatayEklerPastaDolabi',
                    'filters.items.venusPastaTeshirDolabi',
                    'filters.items.moonBombeCamliReyonDolabi',
                    'filters.items.fullMoonDikCamliReyonDolabi',
                    'filters.items.newMoonDuzCamliReyonDolabi',
                    'filters.items.duzCamliReyonDolabi',
                    'filters.items.kuruSogutmaliReyonDolabi',
                    'filters.items.reyonTeshirDolabi',
                    'filters.items.kafeRestoranTeshirDolabi',
                    'filters.items.kasapReyonDolabi',
                    'filters.items.uflemeliReyonDolabi',
                    'filters.items.kasapDolabi',
                    'filters.items.reyonDolabi',
                    'filters.items.balikTeshirDolabi',
                    'filters.items.mezeTeshirDolabi',
                    'filters.items.kebapTeshirDolabi',
                    'filters.items.promosyonDolabi',
                    'filters.items.statikSogutmaliReyonDolabi',
                    'filters.items.dikCamliReyonDolabi',
                    'filters.items.duzCamliReyonDolabi',
                    'filters.items.yarimCamliReyonDolabi',
                    'filters.items.bombeCamliReyonDolabi'
                ]
            },
            {
                id: 'vertical',
                title: t('menu.verticalCooling'),
                items: [
                    'filters.items.mezeDolabiDikeyTip',
                    'filters.items.kuzuEtAskiDolabi',
                    'filters.items.dikeyPastaDolabi',
                    'filters.items.manavSutlukDolabi',
                    'filters.items.yarimBoySutlukDolabi',
                    'filters.items.camKapakliSutlukDolabi',
                    'filters.items.sutlukDolabi',
                    'filters.items.etAskiDolabi',
                    'filters.items.dryAgedDolabi'
                ]
            },
            {
                id: 'wall',
                title: t('menu.wallCooling'),
                items: [
                    'filters.items.mezeDolabiDikeyTip',
                    'filters.items.dryAgedDolabi',
                    'filters.items.dikeyTipAlttanMotorluSutluk',
                    'filters.items.dikeySiseSogutucuAhsapKaplamali',
                    'filters.items.petrolDolabiSiseSogutucu',
                    'filters.items.mesrubatVeKolaDolabi',
                    'filters.items.siseSogutucuDolabi',
                    'filters.items.marketDolabi',
                    'filters.items.sarkuteriDolabi',
                    'filters.items.kebapTeshirDolabi',
                    'filters.items.duvarTipiPeynirReyonlari',
                    'filters.items.duvarTipiSutlukReyonlari',
                    'filters.items.promosyonDolabi',
                    'filters.items.manavSutlukDolabi',
                    'filters.items.yarimBoySutlukDolabi',
                    'filters.items.camKapakliSutlukDolabi',
                    'filters.items.sutlukDolabi',
                    'filters.items.etAskiDolabi'
                ]
            },
            {
                id: 'bakery',
                title: t('menu.bakery'),
                items: [
                    'filters.items.pastaCikolataDolabi',
                    'filters.items.sogukTeshirDolabi',
                    'filters.items.yatayEklerPastaDolabi',
                    'filters.items.venusPastaTeshirDolabi',
                    'filters.items.yatayTipPastaDolabi',
                    'filters.items.dikeyPastaDolabi',
                    'filters.items.eklerPastaDolabi',
                    'filters.items.pastaDolabi',
                    'filters.items.yatayPastaDolabi',
                    'filters.items.pastaneTezgahi',
                    'filters.items.firinDolabi',
                    'filters.items.isitmaliBorekTezgahi',
                    'filters.items.isitmaliPogacaTezgahi',
                    'filters.items.kumpirWaffleDolabi',
                    'filters.items.kuruyemisDolabi',
                    'filters.items.cikolataDolabi',
                    'filters.items.baklavaTezgahi',
                    'filters.items.kuruPastaDolabi',
                    'filters.items.cephePastaTeshirDolabi',
                    'filters.items.yatayPastaTeshirDolabi',
                    'filters.items.pastaTeshirDolabi'
                ]
            },
            {
                id: 'kitchen',
                title: t('menu.industrialKitchen'),
                items: [
                    'filters.items.ortaTipPaslanmazDavlumbaz',
                    'filters.items.kutuTipiPaslanmazDavlumbaz',
                    'filters.items.duvarTipiFiltreliDavlumbaz',
                    'filters.items.duvarTipiDavlumbaz',
                    'filters.items.dikeyTipBuzdolabiPaslanmazCiftKapiliCamli',
                    'filters.items.paslanmaz',
                    'filters.items.dikeyTipBuzBuzdolabiCiftKapili',
                    'filters.items.dikeyTipBuzdolabiCamli',
                    'filters.items.paslanmazBuzdolabiDikeyTip',
                    'filters.items.tezgahAltiDolapCamli',
                    'filters.items.tezgahAltiBuzdolabi',
                    'filters.items.calismaTezgahiAraRafli',
                    'filters.items.calismaTezgahiTabanRafli',
                    'filters.items.calismaTezgahiPolietilenTablaliTabanRafli',
                    'filters.items.tekEvyeliTezgahPaslanmaz',
                    'filters.items.sogukOdaRafi',
                    'filters.items.paslanmazTelRaf',
                    'filters.items.telRafIstifRafi',
                    'filters.items.paslanmazEvyeliDolapliTezgah',
                    'filters.items.paslanmazDolapliCalismaTezgahi',
                    'filters.items.paslanmazCalismaTezgahi'
                ]
            },
            {
                id: 'market',
                title: t('menu.marketEquip'),
                items: [
                    'filters.items.sutluk',
                    'filters.items.zeytinDolabi',
                    'filters.items.manavTezgahi',
                    'filters.items.zeytinlikVeRecetelikDolabi'
                ]
            },
            {
                id: 'coolingSystems',
                title: t('menu.coolingSystems'),
                items: [
                    'filters.items.endustriyelSogutmaSistemleri',
                    'filters.items.monoblokSogutmaSistemleri',
                    'filters.items.splitSogutmaGrubu',
                    'filters.items.merkeziSogutmaSistemleri',
                    'filters.items.bireyselSogutmaGruplari'
                ]
            },
            {
                id: 'coolingAisles',
                title: t('menu.coolingAisles'),
                items: [
                    'filters.items.reyonDolabi',
                    'filters.items.kasapDolabi',
                    'filters.items.kasapTeshirDolabi',
                    'filters.items.pastaCikolataDolabi',
                    'filters.items.kebapMezeDolabi',
                    'filters.items.kasapDolabiDikCamli',
                    'filters.items.reyonDolabiDikCamli',
                    'filters.items.balikMostraDolabi',
                    'filters.items.kasapReyonDolabiDuzCamli',
                    'filters.items.sogutmaliBalikDolabi',
                    'filters.items.kasapReyonDolabiBombeCamli',
                    'filters.items.mezeDolabiDikeyTip',
                    'filters.items.sogukTeshirDolabi',
                    'filters.items.yatayEklerPastaDolabi',
                    'filters.items.venusPastaTeshirDolabi',
                    'filters.items.moonBombeCamliReyonDolabi',
                    'filters.items.fullMoonDikCamliReyonDolabi',
                    'filters.items.newMoonDuzCamliReyonDolabi',
                    'filters.items.dryAgedDolabi',
                    'filters.items.kuzuEtAskiDolabi',
                    'filters.items.duzCamliReyonDolabi',
                    'filters.items.kuruSogutmaliReyonDolabi',
                    'filters.items.reyonTeshirDolabi',
                    'filters.items.uflemeliReyonDolabi',
                    'filters.items.dikeySiseSogutucuAhsapKaplamali',
                    'filters.items.petrolDolabiSiseSogutucu',
                    'filters.items.mesrubatVeKolaDolabi',
                    'filters.items.siseSogutucuDolabi',
                    'filters.items.marketDolabi',
                    'filters.items.sarkuteriDolabi',
                    'filters.items.duvarTipiPeynirReyonlari',
                    'filters.items.duvarTipiSutlukReyonlari',
                    'filters.items.promosyonDolabi',
                    'filters.items.manavSutlukDolabi',
                    'filters.items.yarimBoySutlukDolabi',
                    'filters.items.camKapakliSutlukDolabi',
                    'filters.items.sutlukDolabi',
                    'filters.items.etAskiDolabi'
                ]
            },
            {
                id: 'coldStorage',
                title: t('menu.coldStorage'),
                items: [
                    'filters.items.sogukHavaDeposu',
                    'filters.items.eksi18SogukHavaDeposu',
                    'filters.items.pvcSeritHavaPerdesi',
                    'filters.items.pvcPerde',
                    'filters.items.pvcPerdeSistemleri',
                    'filters.items.sogukOdaPanelleri',
                    'filters.items.sogukHavaDeposuPvcAksesuar',
                    'filters.items.menteseliSogukHavaDeposuKapisi',
                    'filters.items.surguluSogukHavaDeposuKapisi'
                ]
            }
        ],
        [t]
    );

    const allFilterKeys = useMemo(() => {
        return Array.from(new Set(filterCategories.flatMap((category) => category.items)));
    }, [filterCategories]);

    const matchedUrlFilterKey = useMemo(() => {
        if (!urlFilter) return null;

        const q = normalize(urlFilter);

        const exactKey = allFilterKeys.find((k) => normalize(getTrValue(k)) === q);
        if (exactKey) return exactKey;

        const partial = allFilterKeys.filter((k) => normalize(getTrValue(k)).includes(q));
        if (partial.length === 1) return partial[0];

        const startsWith = allFilterKeys.filter((k) => normalize(getTrValue(k)).startsWith(q));
        if (startsWith.length === 1) return startsWith[0];

        return null;
    }, [urlFilter, allFilterKeys]);

    const matchedUrlCategory = useMemo(() => {
        if (!urlCat) return null;
        return filterCategories.find((c) => normalize(c.id) === normalize(urlCat)) ?? null;
    }, [urlCat, filterCategories]);

    useEffect(() => {
        const presetKey = urlFilter
            ? `filter:${normalize(urlFilter)}`
            : matchedUrlCategory
                ? `cat:${normalize(matchedUrlCategory.id)}`
                : null;

        if (!presetKey) return;

        if (appliedUrlPresetKeyRef.current === presetKey) return;
        appliedUrlPresetKeyRef.current = presetKey;

        if (urlFilter) {
            if (matchedUrlFilterKey) {
                setDraftFilters([matchedUrlFilterKey]);
                setAppliedFilters([matchedUrlFilterKey]);

                const parentCategory = filterCategories.find((category) =>
                    category.items.includes(matchedUrlFilterKey)
                );

                if (parentCategory) {
                    setExpandedCategories((prev) =>
                        prev.includes(parentCategory.id) ? prev : [...prev, parentCategory.id]
                    );
                }
            } else {
                setDraftFilters([]);
                setAppliedFilters([]);
            }

            setCurrentPage(1);
            return;
        }

        if (matchedUrlCategory) {
            const uniqueItems = Array.from(new Set(matchedUrlCategory.items));

            setDraftFilters(uniqueItems);
            setAppliedFilters(uniqueItems);

            setExpandedCategories((prev) =>
                prev.includes(matchedUrlCategory.id) ? prev : [...prev, matchedUrlCategory.id]
            );

            setCurrentPage(1);
        }
    }, [urlFilter, matchedUrlFilterKey, matchedUrlCategory, filterCategories]);

    const toggleFilter = (itemKey: string) => {
        setDraftFilters((prev) => {
            const next = prev.includes(itemKey) ? prev.filter((i) => i !== itemKey) : [...prev, itemKey];

            if (!isMobileFilterOpen) {
                setAppliedFilters(next);
                setCurrentPage(1);
            }

            return next;
        });
    };

    const toggleCategory = (id: string) => {
        setExpandedCategories((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    };

    const isChecked = (itemKey: string) => {
        return isMobileFilterOpen ? draftFilters.includes(itemKey) : appliedFilters.includes(itemKey);
    };

    const filteredProducts = useMemo(() => {
        let result = products;

        const shouldDisableSearchFallback = Boolean(urlFilter || urlCat || appliedFilters.length > 0);
        const effectiveSearchQuery = shouldDisableSearchFallback ? '' : searchQuery;

        if (effectiveSearchQuery) {
            const q = normalize(effectiveSearchQuery);
            result = result.filter(
                (product: Product) =>
                    normalize(product.name[language]).includes(q) ||
                    normalize(product.category[language]).includes(q) ||
                    normalize(product.type[language]).includes(q)
            );
        }

        if (appliedFilters.length > 0) {
            result = result.filter((product: Product) =>
                appliedFilters.some((k) => {
                    const trValue = getTrValue(k);
                    return (
                        normalize(product.type.TR) === normalize(trValue) ||
                        normalize(product.category.TR) === normalize(trValue)
                    );
                })
            );
        }

        return result;
    }, [appliedFilters, searchQuery, urlFilter, urlCat, language]);

    const previewFilteredCount = useMemo(() => {
        let result = products;

        const shouldDisableSearchFallback = Boolean(urlFilter || urlCat || draftFilters.length > 0);
        const effectiveSearchQuery = shouldDisableSearchFallback ? '' : searchQuery;

        if (effectiveSearchQuery) {
            const q = normalize(effectiveSearchQuery);
            result = result.filter(
                (product: Product) =>
                    normalize(product.name[language]).includes(q) ||
                    normalize(product.category[language]).includes(q) ||
                    normalize(product.type[language]).includes(q)
            );
        }

        if (draftFilters.length > 0) {
            result = result.filter((product: Product) =>
                draftFilters.some((k) => {
                    const trValue = getTrValue(k);
                    return (
                        normalize(product.type.TR) === normalize(trValue) ||
                        normalize(product.category.TR) === normalize(trValue)
                    );
                })
            );
        }

        return result.length;
    }, [draftFilters, searchQuery, urlFilter, urlCat, language]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredProducts, currentPage, itemsPerPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white dark:bg-[#111827] min-h-screen pt-24 pb-16 transition-colors duration-300">
            <div className="bg-[#111827] dark:bg-white text-white dark:text-black py-4 md:py-16 mb-8 md:mb-12 transition-colors duration-300">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
                    <h1 className="text-lg md:text-4xl font-bold">{t('products.title')}</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 lg:mb-8 pb-4 border-b border-gray-200 dark:border-neutral-700 gap-4">
                    <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <span>{t('products.breadcrumb.home')}</span>
                        <ChevronRight size={14} />
                        <span className="font-bold text-black dark:text-white">{t('products.title')}</span>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-wrap justify-between w-full md:w-auto">
                        <button
                            className="flex items-center gap-2 text-black dark:text-white font-bold text-sm cursor-pointer lg:hidden bg-gray-100 dark:bg-neutral-800 px-4 py-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-neutral-700"
                            onClick={() => setIsMobileFilterOpen(true)}
                            aria-label="Filter"
                            type="button"
                        >
                            <SlidersHorizontal size={16} />
                            <span className="text-xs">
                                {t('products.filter')} {appliedFilters.length > 0 && `(${appliedFilters.length})`}
                            </span>
                        </button>

                        <label
                            htmlFor="products-items-per-page"
                            className="hidden md:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                            <span>{t('products.show')}:</span>

                            <select
                                id="products-items-per-page"
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                                className="bg-gray-50 dark:bg-[#1f2937] border border-gray-200 dark:border-neutral-700 rounded px-2 py-1 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#009FE3]"
                            >
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                                <option value={25}>25</option>
                            </select>
                        </label>

                        <div className="hidden md:block text-sm text-gray-600 dark:text-gray-300">
                            {t('products.view')} :{' '}
                            <span className="font-bold text-black dark:text-white">{filteredProducts.length}</span> /{' '}
                            {products.length}
                        </div>

                        <div className="flex items-center gap-2 text-gray-400">
                            <LayoutGrid
                                size={20}
                                className={`cursor-pointer hover:text-black dark:hover:text-white ${
                                    viewMode === 'grid3' ? 'text-black dark:text-white' : ''
                                }`}
                                onClick={() => setViewMode('grid3')}
                            />
                            <Grid
                                size={20}
                                className={`cursor-pointer hover:text-black dark:hover:text-white hidden sm:block ${
                                    viewMode === 'grid4' ? 'text-black dark:text-white' : ''
                                }`}
                                onClick={() => setViewMode('grid4')}
                            />
                            <List
                                size={20}
                                className={`cursor-pointer hover:text-black dark:hover:text-white ${
                                    viewMode === 'list' ? 'text-black dark:text-white' : ''
                                }`}
                                onClick={() => setViewMode('list')}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 lg:gap-12 relative">
                    <AnimatePresence>
                        {isMobileFilterOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[60] bg-black/60 lg:hidden backdrop-blur-sm"
                                onClick={() => setIsMobileFilterOpen(false)}
                            />
                        )}
                    </AnimatePresence>

                    <motion.div
                        drag="y"
                        dragControls={dragControls}
                        dragListener={false}
                        dragConstraints={{ top: 0 }}
                        dragElastic={0.05}
                        initial={{ y: "100%" }}
                        animate={{ y: isMobileFilterOpen ? 0 : "100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        onDragEnd={(_, info) => {
                            if (info.offset.y > 100 || info.velocity.y > 500) {
                                setIsMobileFilterOpen(false);
                            }
                        }}
                        className={`fixed inset-x-0 bottom-0 z-[70] h-[85vh] w-full bg-white dark:bg-[#1f2937] md:dark:bg-transparent rounded-t-3xl flex flex-col lg:static lg:h-auto lg:w-1/4 lg:rounded-none lg:bg-transparent lg:z-auto lg:block lg:!transform-none ${
                            isMobileFilterOpen ? 'shadow-[0_-10px_40px_rgba(0,0,0,0.1)]' : ''
                        }`}
                    >
                        <div
                            className="lg:hidden touch-none cursor-grab active:cursor-grabbing"
                            onPointerDown={(e) => dragControls.start(e)}
                        >
                            <div className="w-full flex justify-center pt-4 pb-2">
                                <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                            </div>

                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                                <div className="flex items-center gap-3 text-gray-900 dark:text-white font-bold">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-[#009FE3]">
                                        <SlidersHorizontal size={20} />
                                    </div>
                                    <span className="text-xl">{t('products.filter')}</span>
                                </div>
                                <button
                                    aria-label="Close"
                                    onPointerDown={(e) => e.stopPropagation()}
                                    onClick={() => setIsMobileFilterOpen(false)}
                                    className="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                                    type="button"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        <h2 className="sr-only">{t('products.filter')}</h2>

                        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-0 space-y-6 lg:space-y-8">
                            {filterCategories.map((category) => (
                                <div
                                    key={category.id}
                                    className="border border-gray-100 dark:border-gray-800 rounded-2xl p-4 lg:border-0 lg:p-0 lg:rounded-none pb-4 lg:pb-0 last:border-0 bg-gray-50/50 md:dark:bg-transparent dark:bg-gray-700/30 lg:bg-transparent"
                                >
                                    <div
                                        className="flex items-center justify-between cursor-pointer group"
                                        onClick={() => toggleCategory(category.id)}
                                    >
                                        <h3 className="font-bold text-xs sm:text-base md:text-[15px] uppercase text-gray-900 dark:text-white group-hover:text-[#009FE3] dark:group-hover:text-[#009FE3] transition-colors leading-tight">
                                            {category.title}
                                        </h3>
                                        <div className="p-1.5 rounded-full transition-colors bg-transparent dark:bg-transparent">
                                            {expandedCategories.includes(category.id) ? (
                                                <ChevronUp size={16} className="text-gray-600 dark:text-gray-300" />
                                            ) : (
                                                <ChevronDown size={16} className="text-gray-600 dark:text-gray-300" />
                                            )}
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {expandedCategories.includes(category.id) && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="space-y-1 pl-1 mt-4 max-h-48 lg:max-h-60 overflow-y-auto overscroll-contain pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-gray-500 transition-colors">
                                                    {category.items.map((itemKey, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex items-center justify-between group cursor-pointer py-2 lg:py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/80 px-2 -mx-2 transition-colors"
                                                            onClick={() => toggleFilter(itemKey)}
                                                        >
                                                            <div className="flex items-center gap-3 lg:gap-3">
                                                                <div
                                                                    className={`w-5 h-5 lg:w-4 lg:h-4 border-2 lg:border rounded flex items-center justify-center transition-all flex-shrink-0 ${
                                                                        isChecked(itemKey)
                                                                            ? 'bg-[#009FE3] border-[#009FE3]'
                                                                            : 'border-gray-300 dark:border-gray-600 group-hover:border-[#009FE3] dark:group-hover:border-[#009FE3]'
                                                                    }`}
                                                                >
                                                                    {isChecked(itemKey) && (
                                                                        <motion.div
                                                                            initial={{ scale: 0 }}
                                                                            animate={{ scale: 1 }}
                                                                            className="w-2.5 h-2.5 lg:w-2 lg:h-2 bg-white rounded-sm"
                                                                        />
                                                                    )}
                                                                </div>

                                                                <span
                                                                    className={`text-xs md:text-sm text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors leading-tight ${
                                                                        isChecked(itemKey) ? 'font-bold text-black dark:text-white' : ''
                                                                    }`}
                                                                >
                                                                    {t(itemKey)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 lg:hidden bg-white dark:bg-[#1f2937] border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-10">
                            <div className="flex gap-3">
                                <button
                                    aria-label="Clear"
                                    onClick={() => {
                                        setDraftFilters([]);
                                        setAppliedFilters([]);
                                        setCurrentPage(1);
                                    }}
                                    className="flex-1 py-3.5 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    type="button"
                                >
                                    {t('filter.items.clear')}
                                </button>
                                <button
                                    aria-label="See Results"
                                    onClick={() => {
                                        setAppliedFilters(draftFilters);
                                        setCurrentPage(1);
                                        setIsMobileFilterOpen(false);
                                    }}
                                    className="flex-[2] py-3.5 px-4 text-sm font-semibold bg-[#005F91] text-white rounded-xl hover:bg-[#004a72] transition-colors shadow-lg shadow-[#005F91]/30 flex items-center justify-center gap-2"
                                    type="button"
                                >
                                    <span>{t('filter.items.seeResults')}</span>
                                    <span className="bg-white text-[#003b5c] px-2 py-0.5 rounded-full text-xs font-bold">
        {previewFilteredCount}
    </span>
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <div className="w-full lg:w-3/4">
                        <h2 className="sr-only">{t('products.title')}</h2>

                        <div
                            className={`grid gap-3 sm:gap-4 md:gap-6 lg:gap-8 ${
                                viewMode === 'grid4'
                                    ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4'
                                    : viewMode === 'list'
                                        ? 'grid-cols-1'
                                        : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-3'
                            }`}
                        >
                            {paginatedProducts.map((product: Product, idx: number) => {
                                const priorityCount = viewMode === 'list' ? 1 : 2;
                                const isPotentialLcp = currentPage === 1 && idx < priorityCount;

                                return (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        loading={isPotentialLcp ? 'eager' : 'lazy'}
                                        priority={isPotentialLcp ? 'high' : 'auto'}
                                    />
                                );
                            })}
                        </div>

                        {paginatedProducts.length === 0 && (
                            <div className="mt-8 rounded-2xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-[#111827] p-6 text-center text-sm text-gray-600 dark:text-gray-300">
                                {t('products.notFound')}
                            </div>
                        )}

                        {totalPages > 1 && (
                            <div className="mt-8 lg:mt-16 flex justify-center items-center gap-1.5 sm:gap-2 lg:gap-3">
                                <button
                                    aria-label="Right"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                        currentPage === 1
                                            ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                            : 'text-gray-600 dark:text-gray-300 hover:bg-[#111827] dark:hover:bg-neutral-700 hover:text-white hover:shadow-md'
                                    }`}
                                    type="button"
                                >
                                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 rotate-180" />
                                </button>

                                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 p-1 rounded-full">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            aria-label="Now Page"
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-xs sm:text-sm md:text-base rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                                                currentPage === page
                                                    ? 'bg-[#111827] dark:bg-white text-white dark:text-black font-bold shadow-md transform scale-105'
                                                    : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-neutral-700 hover:text-[#009FE3] dark:hover:text-white hover:shadow-sm'
                                            }`}
                                            type="button"
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    aria-label="Left"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 group ${
                                        currentPage === totalPages
                                            ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                            : 'text-gray-600 dark:text-gray-300 hover:bg-[#111827] dark:hover:bg-neutral-700 hover:text-white hover:shadow-md'
                                    }`}
                                    type="button"
                                >
                                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}