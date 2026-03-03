import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, X, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const { t, language, setLanguage } = useLanguage();
    const navigate = useNavigate();

    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const q = searchQuery.trim();
        if (q) {
            const encoded = encodeURIComponent(q);

            // Hem search (genel arama fallback) hem filter (otomatik checkbox seçimi) gönderiyoruz
            navigate(`/products?search=${encoded}&filter=${encoded}`);

            onClose();
            setSearchQuery('');
        }
    };

    const menuItems = [
        { label: t('menu.home'), path: '/', hasSubmenu: false },
        {
            label: t('menu.corporate'),
            path: '#',
            hasSubmenu: true,
            submenuItems: [{ label: t('menu.about'), path: '/about' }]
        },
        {
            label: t('menu.products'),
            path: '/products',
            hasSubmenu: true,
            submenuItems: [
                // ✅ Yeni eklenen seçenek
                {
                    label: 'Tüm Ürünlerimiz', // i18n kullanacaksan t('menu.allProducts')
                    path: '/products'
                },
                {
                    label: t('menu.refrigerators'),
                    path: '#',
                    children: [
                        { label: t('menu.verticalCooling'), path: '/products?cat=vertical' },
                        { label: t('menu.wallCooling'), path: '/products?cat=wall' },
                        { label: t('menu.serviceAisles'), path: '/products?cat=service' },
                    ]
                },
                {
                    label: t('menu.productGroups'),
                    path: '#',
                    children: [
                        { label: t('menu.bakery'), path: '/products?cat=bakery' },
                        { label: t('menu.industrialKitchen'), path: '/products?cat=kitchen' },
                        { label: t('menu.marketEquip'), path: '/products?cat=market' },
                        { label: t('menu.coldStorage'), path: '/products?cat=coldStorage' },
                        { label: t('menu.coolingSystems'), path: '/products?cat=coolingSystems' },
                        { label: t('menu.coolingAisles'), path: '/products?cat=coolingAisles' },
                    ]
                }
            ]
        },
        { label: t('menu.references'), path: '/references', hasSubmenu: false },
        { label: t('menu.gallery'), path: '/gallery', hasSubmenu: false },
        { label: t('menu.contact'), path: '/contact', hasSubmenu: false },
    ];

    const toggleLanguage = () => {
        setLanguage(language === 'TR' ? 'EN' : 'TR');
    };

    const toggleSubmenu = (label: string) => {
        setExpandedMenu(expandedMenu === label ? null : label);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay with Blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 h-full w-[320px] sm:w-[380px] bg-white dark:bg-[#111827] z-[70] shadow-[4px_0_24px_rgba(0,0,0,0.1)] flex flex-col rounded-r-3xl border-r border-gray-100 dark:border-neutral-800 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 pb-2">
                            <span className="text-[15px] md:text-xl font-bold text-gray-900 dark:text-white tracking-tight">Menu</span>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-gray-50 dark:bg-neutral-800 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Search Bar */}
                        <div className="px-4 py-2 md:py-4">
                            <form onSubmit={handleSearch} className="relative group">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t('menu.search')}
                                    className="w-full bg-gray-50  text-gray-800  text-sm py-2 md.py-3.5 pl-11 pr-4 rounded-2xl  border-gray-300 border-[thin]  focus:bg-white  focus:outline-none  focus:ring-[#009FE3]/10 transition-all placeholder-gray-400"
                                />
                                <button type="submit" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#009FE3] transition-colors">
                                    <Search size={18} />
                                </button>
                            </form>
                        </div>

                        {/* Menu Items */}
                        <div className="flex-1 overflow-y-auto px-4 pb-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-full">
                            <div className="space-y-1">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div
                                            className={`flex items-center   justify-between px-4 py-3.5 rounded-2xl cursor-pointer transition-all group ${
                                                expandedMenu === item.label
                                                    ? 'bg-gray-50 '
                                                    : 'hover:bg-gray-50 '
                                            }`}
                                            onClick={() => {
                                                if (item.hasSubmenu) {
                                                    toggleSubmenu(item.label);
                                                } else {
                                                    onClose();
                                                }
                                            }}
                                        >
                                            <Link
                                                to={item.path}
                                                onClick={(e) => {
                                                    if (item.hasSubmenu) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                                className={`flex-1 text-[13px] md:text-sm font-semibold tracking-wide transition-colors ${
                                                    expandedMenu === item.label
                                                        ? 'text-'
                                                        : 'text-gray-700 dark:text-gray-200 group-hover:text-black'
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                            {item.hasSubmenu && (
                                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white  shadow-md border-gray-900   dark:border-neutral-300  transition-colors">
                                                    <ChevronRight
                                                        size={14}
                                                        className={`text-gray-400  transition-transform duration-300 ${expandedMenu === item.label ? 'rotate-90 text-[#009FE3]' : ''}`}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* Submenu */}
                                        <AnimatePresence>
                                            {item.hasSubmenu && expandedMenu === item.label && item.submenuItems && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="ml-6 pl-4 border-l-2 border-gray-100 dark:border-neutral-800 py-2 space-y-1 mt-1">
                                                        {item.submenuItems.map((subItem, subIndex) => (
                                                            <div key={subIndex} className="flex flex-col">
                                                                <div
                                                                    className="flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group/sub"
                                                                    onClick={(e) => {
                                                                        if (subItem.children) {
                                                                            e.preventDefault();
                                                                            e.stopPropagation();
                                                                        } else {
                                                                            onClose();
                                                                        }
                                                                    }}
                                                                >
                                                                    <Link
                                                                        to={subItem.path}
                                                                        onClick={(e) => {
                                                                            if (subItem.children) e.preventDefault();
                                                                            else onClose();
                                                                        }}
                                                                        className="text-[13px] md:text-sm font-bold text-gray-600 dark:text-white group-hover/sub:text-black transition-colors flex-1"
                                                                    >
                                                                        {subItem.label}
                                                                    </Link>
                                                                </div>

                                                                {/* Nested Submenu Items */}
                                                                {subItem.children && (
                                                                    <div className="ml-4 pl-3 border-l-2 border-gray-100 dark:border-neutral-800 space-y-0.5 mt-1 mb-2">
                                                                        {subItem.children.map((child, childIdx) => (
                                                                            <Link
                                                                                key={childIdx}
                                                                                to={child.path}
                                                                                onClick={onClose}
                                                                                className="block px-4 py-2 text-xs font-thin text-gray-500 dark:text-gray-300  dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-800/50 rounded-lg transition-all"
                                                                            >
                                                                                {child.label}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Language Selector Footer */}
                        <div className="p-5  bg-gray-50/50 dark:bg-[#111827]">
                            <button
                                onClick={toggleLanguage}
                                className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#111827] dark:shadow-sm dark:shadow-amber-50 hover:bg-gray-50 dark:hover:bg-neutral-700 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-50  flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Globe size={16} className="text-[#009FE3] dark:text-black " />
                                    </div>
                                    <span className="text-sm font-bold text-gray-700 dark:text-white">
                    {language === 'TR' ? 'Türkçe' : 'English'}
                  </span>
                                </div>
                                <div className="flex items-center gap-1 bg-gray-100  p-1 rounded-xl">
                                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors ${language === 'TR' ? 'bg-[#009FE3] text-white shadow-sm' : 'text-gray-500 dark:text-black'}`}>TR</span>
                                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors ${language === 'EN' ? 'bg-[#009FE3] text-white shadow-sm' : 'text-gray-500 dark:text-black'}`}>EN</span>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}