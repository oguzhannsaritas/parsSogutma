import React, { useState, useRef, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const clients = [
    { name: "BİM", image: "/images/refences/bim.webp" },
    { name: "A-101", image: "/images/refences/a101.jpg" },
    { name: "ŞOK", image: "/images/refences/kayaCiftligi.webp" },
    { name: "Sarıyer", image: "/images/refences/metro.jpg" },
    { name: "Çağrı", image: "/images/refences/peynircibaba.webp" },
    { name: "Bizim", image: "/images/refences/sa.webp" },
    { name: "CarrefourSA", image: "/images/refences/sok.webp" },
    { name: "TR TARIM KREDİ KOOPERATIF", image: "/images/refences/koperatif.webp" },
    { name: "KIPA", image: "/images/refences/kipa.webp" },
    { name: "PINAR", image: "/images/refences/pinar.webp" },
    { name: "ERPILIC", image: "/images/refences/erpilic.webp" },




];

export const projects = [
    {
        id: 'byKasap',
        title: 'BY KASAP',
        location: 'İSTANBUL / ÜMRANİYE',
        coverImage: '/images/refences/byKasap/byKasap1.webp',
        images: [
            '/images/refences/byKasap/byKasap1.webp',
            '/images/refences/byKasap/byKasap2.webp',
            '/images/refences/byKasap/byKasap12.mp4',
        ]
    },
    {
        id: 'kaleRestoran',
        title: 'KALE RESTORAN',
        location: 'İSTANBUL / MALTEPE',
        coverImage: '/images/refences/kaleRestoran/kaleRestoran5.webp',
        images: [
            '/images/refences/kaleRestoran/kaleRestoran.webp',
            '/images/refences/kaleRestoran/kaleRestora2.webp',
            '/images/refences/kaleRestoran/kaleRestoran3.webp',
            '/images/refences/kaleRestoran/kaleRestoran4.webp',
            '/images/refences/kaleRestoran/kaleRestoran5.webp',
            '/images/refences/kaleRestoran/kaleRestoran6.webp',

        ]
    },
    {
        id: 'yildirimEt',
        title: 'YILDIRIM ET',
        location: 'Bursa / İznik',
        coverImage:   '/images/refences/yildirimEt/bursa4.webp',
        images: [
            '/images/refences/yildirimEt/bursa1.webp',
            '/images/refences/yildirimEt/bursa2.webp',
            '/images/refences/yildirimEt/bursa3.webp',
            '/images/refences/yildirimEt/bursa4.webp',
            '/images/refences/yildirimEt/bursa5.webp',
            '/images/refences/yildirimEt/bursa6.webp',
        ]
    },
    {
        id: 'yagizCiftligi',
        title: 'YAĞIZ ÇİFTLİĞİM',
        location: 'İSATNBUL / BEYLİK DÜZÜ',
        coverImage:  '/images/refences/yagizCiftligi/yagizCiftligi1.webp',
        images: [

            '/images/refences/yagizCiftligi/yagizCiftligi1.webp',
            '/images/refences/yagizCiftligi/yagizCiftligi2.webp',
            '/images/refences/yagizCiftligi/yagizCiftligi3.webp',
            '/images/refences/yagizCiftligi/yagizCiftligi4.webp',
            '/images/refences/yagizCiftligi/yagizCiftligi5.webp',
            '/images/refences/yagizCiftligi/yagizCiftligi6.webp',
            '/images/refences/yagizCiftligi/yagizCiftligi7.webp',
            '/images/refences/yagizCiftligi/yagizCiftligi8.webp',
            '/images/refences/yagizCiftligi/yagizCiftligi9.webp',
            '/images/refences/yagizCiftligi/yagizCiftligi.webp',
        ]
    },
    {
        id: 'tatOglu',
        title: 'TAT OĞLU FIRIN PASTANESİ',
        location: 'KOCAELİ / GEBZE',
        coverImage: '/images/refences/tatOglu/tatOglu.webp',
        images: [
            '/images/refences/tatOglu/tatOglu.webp',
            '/images/refences/tatOglu/tatOglu2.webp',
            '/images/refences/tatOglu/tatOglu3.webp',
            '/images/refences/tatOglu/tatOglu4.webp',
            '/images/refences/tatOglu/tatOglu5.webp',
            '/images/refences/tatOglu/tatOglu6.webp',
        ]
    },
    {
        id: 'tireBolu',
        title: 'TİREBOLU UNLU MAMÜLLER ',
        location: 'İSTANBUL / ÜMRANİYE',
        coverImage: '/images/refences/tireBolu/tirebolu.webp',
        images: [
            '/images/refences/tireBolu/tirebolu.webp',
            '/images/refences/tireBolu/tirebolu1.webp',
            '/images/refences/tireBolu/tirebolu2.webp',
            '/images/refences/tireBolu/tirebolu3.webp',
            '/images/refences/tireBolu/tirebolu4.webp',
            '/images/refences/tireBolu/tirebolu5.webp',
            '/images/refences/tireBolu/tirebolu6.webp',
            '/images/refences/tireBolu/tirebolu7.webp',
            '/images/refences/tireBolu/tirebolu8.webp',
        ]
    },
    {
        id: 'nuvo',
        title: 'TALHA ET GIDA',
        location: 'İSTANBUL / KARTAL',
        coverImage: '/images/refences/talhaEt/talhaEt.webp',
        images: [
            '/images/refences/talhaEt/talhaEt.webp',
            '/images/refences/talhaEt/talhaEt1.webp'
        ]
    },
    {
        id: 'İstanbul-Kartal',
        title: 'NUVO PASTANE',
        location: 'İSTANBUL / KARTAL',
        coverImage: '/images/refences/nuvo/nuvo.webp',
        images: [
            '/images/refences/nuvo/nuvo.webp',
            '/images/refences/nuvo/nuvo1.webp',
            '/images/refences/nuvo/nuvo2.webp',
            '/images/refences/nuvo/nuvo3.webp',
            '/images/refences/nuvo/nuvo4.webp',
        ]
    },
    {
        id: 'doganKasap',
        title: 'DOĞAN KASAP',
        location: 'İSTANBUL / KADIKÖY',
        coverImage: '/images/refences/doganKasap/doganKasap.webp',
        images: [
            '/images/refences/doganKasap/doganKasap.webp',
            '/images/refences/doganKasap/doganKasap1.webp',
        ]
    }
];

export default function References() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [direction, setDirection] = useState(1);
    const itemsPerPage = 6;
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const firstRenderRef = useRef(true);
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const handlePageChange = (pageNumber: number) => {
        setDirection(pageNumber > currentPage ? 1 : -1);
        setCurrentPage(pageNumber);

        requestAnimationFrame(() => {
            projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };
    const LCP_CANDIDATES = 3;
    useEffect(() => {
        firstRenderRef.current = false;
    }, []);

    return (
        <div className="bg-white dark:bg-[#111827] h-auto md:min-h-screen pt-24 pb-12 md:pb-24 transition-colors duration-300">
            {/* Header Banner */}
            <div className="bg-[#111827] dark:bg-white text-white dark:text-black py-4 md:py-16 mb-12 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-12 text-center">
                    <h1 className="text-lg md:text-4xl font-bold mb-4">{t('menu.references')}</h1>
                    <div className="text-xs md:text-sm text-gray-400 dark:text-gray-600 flex items-center justify-center gap-2 uppercase tracking-wider">
                        <Link to="/" >{t('menu.home')}</Link>
                        <span>/</span>
                        <span className="text-white dark:text-black">{t('menu.references')}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12">

                <div className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-7 gap-2 md:gap-5 mb-12 md:mb-24">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center border border-gray-300 transition-all duration-300 rounded-lg overflow-hidden bg-white aspect-[3/2]"
                        >
                            <img
                                src={client.image}
                                alt={client.name}
                                className="w-full h-full object-contain"
                                referrerPolicy="no-referrer"
                                width={300}
                                height={200}
                                loading="lazy"
                                decoding="async"
                                fetchPriority="low"
                            />
                        </div>
                    ))}
                </div>
                <div ref={projectsRef} className="scroll-mt-28" />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        custom={direction}
                        variants={{
                            enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 30 : -30 }),
                            center: { opacity: 1, x: 0 },
                            exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -30 : 30 }),
                        }}
                        initial={firstRenderRef.current ? false : "enter"}
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="grid grid-cols-3 md:grid-cols-2 gap-8"
                    >
                        {currentProjects.map((project, idx) => {
                            const isLcpCandidate = currentPage === 1 && idx < LCP_CANDIDATES;

                            return (
                                <div
                                    key={project.id}
                                    className="group cursor-pointer"
                                    onClick={() => navigate(`/references/${project.id}`)}
                                >
                                    <div className="relative overflow-hidden aspect-[4/3] mb-4 rounded-lg bg-black/5">
                                        <img
                                            src={project.coverImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            width={800}
                                            height={600}
                                            decoding="async"
                                            loading={isLcpCandidate ? "eager" : "lazy"}
                                            fetchPriority={isLcpCandidate ? "high" : "low"}
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xs md:text-xl font-bold text-black dark:text-white group-hover:text-[#009FE3] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-[10px] md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            {project.location}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-16">
                        <button
                            aria-label="Previous"
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="md:w-10 md:h-10 w-8 h-8 rounded-full flex items-center justify-center
                 text-black dark:text-white dark:hover:text-black
                 disabled:opacity-30 disabled:cursor-not-allowed
                 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
                            type="button"
                        >
                            <ChevronLeft size={20} aria-hidden="true" />
                        </button>

                        {[...Array(totalPages)].map((_, i) => {
                            const page = i + 1;
                            const isActive = currentPage === page;

                            return (
                                <button
                                    aria-label={`${page}. sayfaya git`}
                                    key={i}
                                    onClick={() => handlePageChange(page)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`w-8 h-8 md:h-10 md:w-10 rounded-full flex items-center justify-center font-medium
                      transition-all duration-300  
                      ${isActive
                                        ? 'bg-black text-white shadow-md scale-110 dark:bg-white dark:text-black'
                                        : 'bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:text-black dark:hover:bg-gray-200'
                                    }`}
                                    type="button"
                                >
                                    {page}
                                </button>
                            );
                        })}

                        <button
                            aria-label="Next"
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="md:w-10 md:h-10 w-8 h-8 rounded-full flex items-center justify-center
                 text-black dark:text-white dark:hover:text-black
                 disabled:opacity-30 disabled:cursor-not-allowed
                 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
                            type="button"
                        >
                            <ChevronRight size={20} aria-hidden="true" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}