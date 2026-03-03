import React, { useState, useEffect, useRef } from 'react';
import { Menu, Search, ChevronDown, ChevronRight, Moon, Sun, X, ArrowRight } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from "@/src/context/ThemeContext.tsx";

export default function Header() {
    const { scrollY } = useScroll();
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';
    const { t, language, setLanguage } = useLanguage();

    const { theme, toggleTheme } = useTheme();

    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Search input focus
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Animated Words State
    const [wordIndex, setWordIndex] = useState(0);
    const animatedWords = ['Severek', 'Çalışıyoruz', 'Severek', 'Üretiyoruz'];

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % animatedWords.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!isSearchOpen) return;

        const raf = requestAnimationFrame(() => {
            searchInputRef.current?.focus();
        });

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsSearchOpen(false);
        };

        window.addEventListener('keydown', onKeyDown);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isSearchOpen]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY;
        setLastScrollY(latest);

        if (latest > 50) setIsScrolled(true);
        else setIsScrolled(false);

        if (latest > previous && latest > 150) setHidden(true);
        else setHidden(false);
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    type NavLink = {
        label: string;
        path: string;
        hasDropdown?: boolean;
        isMegaMenu?: boolean;
        dropdownItems?: {
            label: string;
            path: string;
            children?: { label: string; path: string; }[];
        }[];
    };

    const navLinks: NavLink[] = [
        { label: t('menu.home'), path: '/' },
        {
            label: t('menu.corporate'),
            path: '#',
            hasDropdown: true,
            dropdownItems: [{ label: t('menu.about'), path: '/about' }]
        },
        { label: t('menu.products'), path: '/products', isMegaMenu: true },
        { label: t('menu.references'), path: '/references' },
        { label: t('menu.gallery'), path: '/gallery' },
        { label: t('menu.contact'), path: '/contact' },
    ];

    const megaMenuItems = [
        { title: 'Dikey Reyonlar', path: '/products?cat=vertical', image: 'src/public/images/home/buzdolabi.jpg' },
        { title: 'Yatay Reyonlar', path: '/products?cat=service', image: 'src/public/images/home/yatayReyonx.jpg' },
        { title: 'Dikey Dondurucular', path: '/products?cat=vertical', image: 'src/public/images/home/buzdolabi.jpg' },
        { title: 'Yatay Dondurucular', path: '/products?cat=service', image: 'src/public/images/home/sogutmareyon.jpg' },
        { title: 'Soğuk Hava Depoları', path: '/products?cat=coldStorage', image: 'src/public/images/home/sogukHava2.jpg' },
        { title: 'Alçak Dikey Reyonlar', path: '/products?cat=vertical', image: 'src/public/images/home/yarimx.jpg' },
        { title: 'Servis Reyonları', path: '/products?cat=service', image: 'src/public/images/home/servisx.jpg' },
        {
            isSpecial: true,
            title: 'Severek',
            icon: (
                <img
                    src="../../public/images/parsLogo.png"
                    alt="Pars Logo"
                    className="h-10 object-cover invert hue-rotate-180 saturate-150 dark:invert-0 dark:hue-rotate-0 dark:saturate-100 transition-all duration-300"
                />
            )
        },
        { title: 'Pasta Reyonları', path: '/products?cat=bakery', image: 'src/public/images/home/unluMamül.jpg' },
        { title: 'Soğutma Sistemleri', path: '/products?cat=coolingSystems', image: 'src/public/images/home/sogutma.jpg' },
    ];

    const toggleLanguage = () => {
        setLanguage(language === 'TR' ? 'EN' : 'TR');
        setIsLangMenuOpen(false);
    };

    const flagSrc = language === 'TR' ? '/public/assets/icons/tr.svg' : '/public/assets/icons/us.svg';

    const searchPanelInputClasses = isHome
        ? "bg-transparent border-none ml-2  focus:outline-none text-white text-sm w-full placeholder-white/50"
        : "bg-transparent border-none focus:outline-none ml-2 text-gray-900 dark:text-white text-sm w-full placeholder-gray-500 dark:placeholder-gray-400";

    const searchPanelWrapperClasses = isHome
        ? "bg-gray-400 "
        : "bg-gray-100 dark:bg-neutral-800";

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <motion.header
                variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed top-0 left-0 w-full z-50 h-20 transition-colors duration-300 ${
                    isHome
                        ? (isScrolled ? "bg-[#111827] dark:bg-[#111827] shadow-md text-white" : "bg-gradient-to-b from-[#111827] to-transparent text-white")
                        : "bg-white dark:bg-[#111827] shadow-md text-black dark:text-white"
                }`}
            >
                <div className="w-full h-full flex items-center justify-between px-4 md:px-12 relative z-10">
                    {isHome ? (
                        <>
                            {/* Left: Menu */}
                            <div
                                className="flex items-center gap-2 cursor-pointer m-4 hover:text-gray-300 transition-colors"
                                onClick={() => setIsSidebarOpen(true)}
                            >
                                <Menu size={24} />
                                <span className="font-bold text-sm tracking-wide hidden sm:block">{t('menu.menu')}</span>
                            </div>

                            {/* Center: Logo */}
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src="https://parsogutma.com/wp-content/uploads/2022/03/pars-logo.png"
                                    alt="PARS SOĞUTMA"
                                    className={`h-12 object-contain transition-all duration-300 ${
                                        (isScrolled || theme === 'dark') ? 'invert hue-rotate-180' : ''
                                    }`}
                                />
                            </div>

                            {/* Right: Actions */}
                            <div className="flex items-center ">
                                {/* Theme */}
                                <button
                                    onClick={toggleTheme}
                                    className="pl-2 rounded-full cursor-pointer hover:bg-white/10 transition-colors text-white"
                                    aria-label="Toggle theme"
                                >
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </button>

                                {/* Language */}
                                <button
                                    onClick={toggleLanguage}
                                    className="p-2 rounded-full cursor-pointer hover:bg-white/10 transition-colors text-white flex items-center gap-2"
                                    aria-label="Toggle language"
                                >
                                    <img
                                        src={flagSrc}
                                        alt={language === 'TR' ? 'Türkçe' : 'English'}
                                        className="w-5 h-5 object-contain"
                                        draggable={false}
                                    />
                                    <span className="text-[11px] font-bold tracking-wide">{language}</span>
                                </button>

                                {/* Search (ikon sabit, input aşağıda açılıyor) */}
                                <button
                                    type="button"
                                    onClick={() => setIsSearchOpen(true)}
                                    className="pl-4 rounded-full hover:bg-white/10 transition-colors text-white"
                                    aria-label="Open search"
                                >
                                    <Search size={20} className="cursor-pointer" />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Left: Logo */}
                            <Link to="/" className="flex flex-col items-center justify-center cursor-pointer">
                                <img
                                    src="https://parsogutma.com/wp-content/uploads/2022/03/pars-logo.png"
                                    alt="PARS SOĞUTMA"
                                    className="h-10 object-contain dark:invert dark:hue-rotate-180 transition-all duration-300"
                                />
                            </Link>

                            {/* Center: Nav Links (Desktop) */}
                            <nav className="hidden lg:flex items-center gap-6 h-full">
                                {navLinks.map((link, index) => (
                                    <div key={index} className="relative group h-full flex items-center">
                                        <Link
                                            to={link.path}
                                            className="text-xs font-bold tracking-wide text-gray-900 dark:text-white hover:text-[#009FE3] dark:hover:text-[#009FE3] transition-colors flex items-center gap-1 h-full"
                                        >
                                            {link.label}
                                            {(link.hasDropdown || link.isMegaMenu) && <ChevronDown size={14} />}
                                        </Link>

                                        {/* Normal Dropdown Menu */}
                                        {link.hasDropdown && link.dropdownItems && !link.isMegaMenu && (
                                            <div className="absolute top-full left-0 bg-white dark:bg-neutral-800 shadow-lg rounded-sm py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 dark:border-neutral-700 z-50">
                                                {link.dropdownItems.map((item, idx) => (
                                                    <div key={idx} className="relative group/sub">
                                                        <Link
                                                            to={item.path}
                                                            className="flex items-center justify-between px-4 py-2 text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 hover:text-[#009FE3] dark:hover:text-[#009FE3] transition-colors"
                                                        >
                                                            {item.label}
                                                            {item.children && <ChevronRight size={12} />}
                                                        </Link>

                                                        {/* Nested Dropdown */}
                                                        {item.children && (
                                                            <div className="absolute top-0 left-full bg-white dark:bg-neutral-800 shadow-lg rounded-sm py-2 min-w-[220px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 border border-gray-100 dark:border-neutral-700 z-50 -ml-1 mt-0">
                                                                {item.children.map((child, childIdx) => (
                                                                    <Link
                                                                        key={childIdx}
                                                                        to={child.path}
                                                                        className="block px-4 py-2 text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 hover:text-[#009FE3] dark:hover:text-[#009FE3] transition-colors"
                                                                    >
                                                                        {child.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Mega Menu */}
                                        {link.isMegaMenu && (
                                            <div className="fixed top-20 left-0 w-full dark:bg-white bg-[#111827] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t border-neutral-800 shadow-2xl">
                                                <div className="container mx-auto py-8">
                                                    <div className="grid grid-cols-5 gap-4">
                                                        {megaMenuItems.map((item, idx) => (
                                                            item.isSpecial ? (
                                                                <div key={idx} className="dark:bg-white bg-[#111827] rounded-sm p-6 flex flex-col items-center justify-center text-white aspect-[4/3] transform hover:-translate-y-1 transition-transform duration-300 cursor-default">
                                                                    {item.icon}
                                                                    <div className="h-10 flex items-center mt-8 relative justify-center">
                                                                        <AnimatePresence mode="wait">
                                                                            <motion.span
                                                                                key={wordIndex}
                                                                                initial={{ opacity: 0, y: 15 }}
                                                                                animate={{ opacity: 1, y: 0 }}
                                                                                exit={{ opacity: 0, y: -15 }}
                                                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                                                className="font-bold dark:text-black text-2xl tracking-wider text-center"
                                                                            >
                                                                                {animatedWords[wordIndex]}
                                                                            </motion.span>
                                                                        </AnimatePresence>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <Link
                                                                    key={idx}
                                                                    to={item.path || '#'}
                                                                    className="bg-[#1f2937] rounded-2xl p-4 flex flex-col aspect-[4/3] group/card hover:bg-[#273548] transition-colors duration-300"
                                                                >
                                                                    <div className="flex items-start gap-3 mb-auto">
                                                                        <span className="text-white text-sm relative top-1 gap-2 flex font-medium leading-tight">
                                                                            {item.title} <ArrowRight size={14} />
                                                                        </span>
                                                                    </div>
                                                                    <div className="w-full h-full rounded-lg mt-4 relative overflow-hidden">
                                                                        <img
                                                                            src={item.image}
                                                                            alt={item.title}
                                                                            className="w-full h-full object-contain transform group-hover/card:scale-110 transition-transform duration-500"
                                                                        />
                                                                    </div>
                                                                </Link>
                                                            )
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Right: Actions */}
                            <div className="flex items-center gap-2">
                                {/* Theme */}
                                <button
                                    onClick={toggleTheme}
                                    className="rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-gray-900 dark:text-white"
                                    aria-label="Toggle theme"
                                >
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </button>

                                {/* Language */}
                                <button
                                    onClick={toggleLanguage}
                                    className="rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-gray-900 dark:text-white flex items-center gap-2"
                                    aria-label="Toggle language"
                                >
                                    <img
                                        src={flagSrc}
                                        alt={language === 'TR' ? 'Türkçe' : 'English'}
                                        className="w-5 h-5 object-contain"
                                        draggable={false}
                                    />
                                    <span className="text-[11px] font-bold tracking-wide">{language}</span>
                                </button>

                                {/* Search (ikon sabit, input aşağıda açılıyor) */}
                                <button
                                    type="button"
                                    onClick={() => setIsSearchOpen(true)}
                                    className="rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-gray-900 dark:text-white"
                                    aria-label="Open search"
                                >
                                    <Search
                                        size={20}
                                        className="cursor-pointer hover:text-[#009FE3] dark:hover:text-[#009FE3]"
                                    />
                                </button>

                                {/* Mobile Menu Trigger */}
                                <div
                                    className="lg:hidden cursor-pointer text-gray-900 dark:text-white hover:text-[#009FE3] dark:hover:text-[#009FE3]"
                                    onClick={() => setIsSidebarOpen(true)}
                                >
                                    <Menu size={24} />
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* SEARCH PANEL (header altı, animasyonlu, ikonları itmez) */}
                <AnimatePresence>
                    {isSearchOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[55] bg-black/0"
                                onClick={() => setIsSearchOpen(false)}
                            />

                            {/* Panel */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.22, ease: "easeOut" }}
                                className="fixed top-16 md:left-0 left-2/4 md:w-full  w-[550]  z-[60] px-4 md:px-12"
                            >
                                <div className="w-full md:max-w-[520px] md:ml-auto">
                                    <form
                                        onSubmit={handleSearch}
                                        className={`flex items-center rounded-2xl px-4 py-3 shadow-lg border border-white/10 ${searchPanelWrapperClasses}`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Search size={20} className={isHome ? "text-white/80" : "text-gray-500 dark:text-gray-400"} />

                                        <input
                                            ref={searchInputRef}
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder={t('menu.search')}
                                            className={searchPanelInputClasses}
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setIsSearchOpen(false)}
                                            className={isHome ? "text-white hover:text-gray-300 ml-2" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 ml-2"}
                                            aria-label="Close search"
                                        >
                                            <X size={18} />
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
}