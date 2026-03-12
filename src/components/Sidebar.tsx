import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'motion/react';
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
    const dragControls = useDragControls();
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();

        // @ts-ignore
        if (mq.addEventListener) mq.addEventListener('change', update);
        // @ts-ignore
        else mq.addListener(update);

        return () => {
            // @ts-ignore
            if (mq.removeEventListener) mq.removeEventListener('change', update);
            // @ts-ignore
            else mq.removeListener(update);
        };
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const q = searchQuery.trim();
        if (q) {
            const encoded = encodeURIComponent(q);
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
                { label: 'Tüm Ürünlerimiz', path: '/products' },
                {
                    label: t('menu.refrigerators'),
                    path: '#',
                    children: [
                        { label: t('menu.verticalCooling'), path: '/products?cat=vertical' },
                        { label: t('menu.wallCooling'), path: '/products?cat=wall' },
                        { label: t('menu.serviceAisles'), path: '/products?cat=service' }
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
                        { label: t('menu.coolingAisles'), path: '/products?cat=coolingAisles' }
                    ]
                }
            ]
        },
        { label: t('menu.references'), path: '/references', hasSubmenu: false },
        { label: t('menu.gallery'), path: '/gallery', hasSubmenu: false },
        { label: t('menu.contact'), path: '/contact', hasSubmenu: false }
    ];

    const toggleLanguage = () => setLanguage(language === 'TR' ? 'EN' : 'TR');
    const toggleSubmenu = (label: string) => setExpandedMenu(expandedMenu === label ? null : label);

    const sidebarInitial = isMobile ? { y: '100%', x: 0 } : { x: '-100%', y: 0 };
    const sidebarAnimate = isMobile ? { y: 0, x: 0 } : { x: 0, y: 0 };
    const sidebarExit = isMobile ? { y: '100%', x: 0 } : { x: '-100%', y: 0 };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    <motion.div
                        drag={isMobile ? 'y' : false}
                        dragControls={dragControls}
                        dragListener={false}
                        dragConstraints={isMobile ? { top: 0, bottom: 9999 } : undefined}
                        dragElastic={isMobile ? 0.05 : undefined}
                        onDragEnd={(_, info) => {
                            if (!isMobile) return;
                            if (info.offset.y > 120 || info.velocity.y > 800) onClose();
                        }}
                        initial={sidebarInitial}
                        animate={sidebarAnimate}
                        exit={sidebarExit}
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.4
                        }}
                        style={{ touchAction: isMobile ? 'pan-y' : 'auto' }}
                        className={[
                            'fixed z-[70] bg-white dark:bg-[#1f2937] overflow-hidden flex flex-col',
                            'inset-x-0 bottom-0 h-[85vh] w-full rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)]',
                            'md:inset-y-0 md:left-0 md:right-auto md:h-full md:w-[380px] md:rounded-none md:rounded-r-3xl md:shadow-[4px_0_24px_rgba(0,0,0,0.1)]'
                        ].join(' ')}
                    >
                        {isMobile && (
                            <div
                                className="touch-none cursor-grab active:cursor-grabbing bg-white dark:bg-[#1f2937] z-10 md:hidden"
                                onPointerDown={(e) => dragControls.start(e)}
                            >
                                <div className="w-full flex justify-center pt-4 pb-2">
                                    <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center justify-between px-6 py-4 md:pt-6 md:pb-2 border-b border-gray-100 dark:border-gray-800 md:border-none">
              <span className="text-[15px] md:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                Menu
              </span>
                            <button
                                onPointerDown={(e) => e.stopPropagation()}
                                onClick={onClose}
                                className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="px-4 py-3 md:py-4 border-b border-gray-100 dark:border-gray-700">
                            <form onSubmit={handleSearch} className="relative group">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t('menu.search')}
                                    className="w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white text-sm py-3 pl-11 pr-4 rounded-2xl border border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-700 focus:outline-none focus:ring-1  transition-all placeholder-gray-400 dark:placeholder-gray-500"
                                />
                                <button
                                    type="submit"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500  transition-colors"
                                    aria-label="Search"
                                >
                                    <Search size={18} />
                                </button>
                            </form>
                        </div>

                        <div className="flex-1 overflow-y-auto px-4 py-2 pb-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-gray-500">
                            <div className="space-y-1">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div
                                            className={`flex items-center justify-between px-4 py-3.5 rounded-2xl cursor-pointer transition-all group ${
                                                expandedMenu === item.label
                                                    ? 'bg-gray-100 dark:bg-gray-800'
                                                    : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                            }`}
                                            onClick={() => {
                                                if (item.hasSubmenu) toggleSubmenu(item.label);
                                                else onClose();
                                            }}
                                        >
                                            <Link
                                                to={item.path}
                                                onClick={(e) => {
                                                    if (item.hasSubmenu) e.preventDefault();
                                                }}
                                                className={`flex-1 text-[13px] md:text-sm font-semibold tracking-wide transition-colors ${
                                                    expandedMenu === item.label
                                                        ? 'text-[#009FE3] dark:text-[#009FE3]'
                                                        : 'text-gray-700 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white'
                                                }`}
                                            >
                                                {item.label}
                                            </Link>

                                            {item.hasSubmenu && (
                                                <div
                                                    className={`flex items-center justify-center w-6 h-6 rounded-full transition-colors ${
                                                        expandedMenu === item.label ? 'bg-white dark:bg-gray-700 shadow-sm' : 'bg-transparent'
                                                    }`}
                                                >
                                                    <ChevronRight
                                                        size={16}
                                                        className={`text-gray-400 dark:text-gray-500 transition-transform duration-300 ${
                                                            expandedMenu === item.label ? 'rotate-90 text-[#009FE3] dark:text-[#009FE3]' : ''
                                                        }`}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <AnimatePresence>
                                            {item.hasSubmenu && expandedMenu === item.label && item.submenuItems && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="ml-6 pl-4 border-l-2 border-gray-100 dark:border-gray-700 py-2 space-y-1 mt-1">
                                                        {item.submenuItems.map((subItem, subIndex) => (
                                                            <div key={subIndex} className="flex flex-col">
                                                                <div
                                                                    className="flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group/sub"
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
                                                                        className="text-[13px] md:text-sm font-bold text-gray-600 dark:text-gray-300 group-hover/sub:text-black dark:group-hover/sub:text-white transition-colors flex-1"
                                                                    >
                                                                        {subItem.label}
                                                                    </Link>
                                                                </div>

                                                                {subItem.children && (
                                                                    <div className="ml-4 pl-3 border-l-2 border-gray-100 dark:border-gray-700 space-y-0.5 mt-1 mb-2">
                                                                        {subItem.children.map((child, childIdx) => (
                                                                            <Link
                                                                                key={childIdx}
                                                                                to={child.path}
                                                                                onClick={onClose}
                                                                                className="block px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all"
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

                        <div className="p-5 bg-gray-50/50 dark:bg-[#1f2937] border-t border-gray-100 dark:border-gray-700">
                            <button
                                onClick={toggleLanguage}
                                className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Globe size={16} className="text-[#009FE3]" />
                                    </div>
                                    <span className="text-sm font-bold text-gray-700 dark:text-white">
                    {language === 'TR' ? 'Türkçe' : 'English'}
                  </span>
                                </div>
                                <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-900 p-1 rounded-xl">
                  <span
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors ${
                          language === 'TR' ? 'bg-[#009FE3] text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'
                      }`}
                  >
                    TR
                  </span>
                                    <span
                                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors ${
                                            language === 'EN' ? 'bg-[#009FE3] text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'
                                        }`}
                                    >
                    EN
                  </span>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}