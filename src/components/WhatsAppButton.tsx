import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

type Pos = { x: number; y: number };

const STORAGE_KEY = 'wa_fab_pos_v1';

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();

    // draggable container ölçüsü (yaklaşık: close btn dahil)
    const FAB_SIZE = useMemo(() => ({ w: 76, h: 76 }), []);

    const [pos, setPos] = useState<Pos>(() => {
        // SSR guard
        if (typeof window === 'undefined') return { x: 0, y: 0 };
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (raw) return JSON.parse(raw);
        } catch {
            // ignore
        }
        // default: sağ alt (tailwind bottom-6 right-6 gibi)
        return { x: 0, y: 0 };
    });

    // ilk mount'ta default konumu viewport'a göre ayarla (ilk kez geliyorsa)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // localStorage boşsa defaultu sağ alta ayarla
        let hasSaved = false;
        try {
            hasSaved = Boolean(window.localStorage.getItem(STORAGE_KEY));
        } catch {
            // ignore
        }
        if (hasSaved) return;

        const margin = 24; // bottom-6 / right-6
        const x = window.innerWidth - FAB_SIZE.w - margin;
        const y = window.innerHeight - FAB_SIZE.h - margin;
        setPos({ x: Math.max(0, x), y: Math.max(0, y) });
    }, [FAB_SIZE.h, FAB_SIZE.w]);

    // sayfa değişince tekrar göster
    useEffect(() => {
        setIsVisible(true);
    }, [location.key]);

    // viewport değişince (resize/orientation change) ekrandan taşmasın
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const onResize = () => {
            setPos((prev) => {
                const maxX = window.innerWidth - FAB_SIZE.w;
                const maxY = window.innerHeight - FAB_SIZE.h;
                const next = {
                    x: clamp(prev.x, 0, Math.max(0, maxX)),
                    y: clamp(prev.y, 0, Math.max(0, maxY)),
                };
                try {
                    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
                } catch {
                    // ignore
                }
                return next;
            });
        };

        window.addEventListener('resize', onResize);
        window.addEventListener('orientationchange', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('orientationchange', onResize);
        };
    }, [FAB_SIZE.h, FAB_SIZE.w]);

    // drag sonrası yanlış tıklamayı engellemek için
    const dragHappenedRef = useRef(false);

    const savePos = (p: Pos) => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
        } catch {
            // ignore
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    // ✅ draggable fixed container
                    className="fixed z-[100]"
                    style={{
                        left: 0,
                        top: 0,
                        x: pos.x,
                        y: pos.y,
                        touchAction: 'none', // mobilde drag düzgün olsun (scroll ile kavga etmesin)
                    }}
                    drag
                    dragMomentum={false}
                    dragElastic={0.12}
                    // ✅ ekran sınırları içinde kalsın
                    dragConstraints={{
                        left: 0,
                        top: 0,
                        right: typeof window !== 'undefined' ? window.innerWidth - FAB_SIZE.w : 0,
                        bottom: typeof window !== 'undefined' ? window.innerHeight - FAB_SIZE.h : 0,
                    }}
                    onDragStart={() => {
                        dragHappenedRef.current = false;
                    }}
                    onDrag={(_, info) => {
                        // çok küçük kıpırtıyı drag sayma
                        if (Math.abs(info.offset.x) > 3 || Math.abs(info.offset.y) > 3) {
                            dragHappenedRef.current = true;
                        }
                    }}
                    onDragEnd={(_, info) => {
                        const next = {
                            x: clamp(pos.x + info.offset.x, 0, window.innerWidth - FAB_SIZE.w),
                            y: clamp(pos.y + info.offset.y, 0, window.innerHeight - FAB_SIZE.h),
                        };
                        setPos(next);
                        savePos(next);
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                    <div className="relative flex flex-col items-center">
                        <button
                            onPointerDown={(e) => e.stopPropagation()} // drag başlatmasın
                            onClick={() => setIsVisible(false)}
                            className="absolute -top-4 -right-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full p-1 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10 border border-gray-200 dark:border-gray-700"
                            aria-label="Close WhatsApp"
                            type="button"
                        >
                            <X size={14} />
                        </button>

                        <a
                            href="https://wa.me/905431707277"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-[#128C7E] text-white p-2 md:p-3.5 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center select-none"
                            aria-label="Chat on WhatsApp"
                            draggable={false}
                            onClick={(e) => {
                                // drag olduysa linke tıklamasın
                                if (dragHappenedRef.current) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    dragHappenedRef.current = false;
                                }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.004-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}