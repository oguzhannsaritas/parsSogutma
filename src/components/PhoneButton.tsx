import { useEffect, useMemo, useRef, useState } from 'react';
import { Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

type Pos = { x: number; y: number };

const STORAGE_KEY = 'phone_fab_pos_v1';
const PHONE_NUMBER = '+905376458291';

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

export default function PhoneButton() {
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();
    const FAB_SIZE = useMemo(() => ({ w: 76, h: 76 }), []);

    const [pos, setPos] = useState<Pos>(() => {
        if (typeof window === 'undefined') return { x: 0, y: 0 };
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (raw) return JSON.parse(raw);
        } catch {
            // Private browsing can block localStorage; the default position still works.
        }
        return { x: 0, y: 0 };
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        let hasSaved = false;
        try {
            hasSaved = Boolean(window.localStorage.getItem(STORAGE_KEY));
        } catch {
            // Use the default position when storage is unavailable.
        }
        if (hasSaved) return;

        const margin = 24;
        const widgetGap = 16;
        const x = window.innerWidth - FAB_SIZE.w - margin;
        const y = window.innerHeight - (FAB_SIZE.h * 2) - margin - widgetGap;
        setPos({ x: Math.max(0, x), y: Math.max(0, y) });
    }, [FAB_SIZE.h, FAB_SIZE.w]);

    useEffect(() => {
        setIsVisible(true);
    }, [location.key]);

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
                    // The position does not need to persist when storage is unavailable.
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

    const dragHappenedRef = useRef(false);

    const savePos = (next: Pos) => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
            // The button remains usable even when its position cannot be saved.
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed z-[100]"
                    style={{
                        left: 0,
                        top: 0,
                        x: pos.x,
                        y: pos.y,
                        touchAction: 'none',
                    }}
                    drag
                    dragMomentum={false}
                    dragElastic={0.12}
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
                            onPointerDown={(event) => event.stopPropagation()}
                            onClick={() => setIsVisible(false)}
                            className="absolute -top-4 -right-2 z-10 rounded-full border border-gray-200 bg-white p-1 text-gray-600 shadow-md transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5ED7] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            aria-label="Telefon butonunu kapat"
                            type="button"
                        >
                            <X size={14} aria-hidden="true" />
                        </button>

                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="flex items-center justify-center rounded-full bg-[#0B5ED7] p-2 text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#084298] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B5ED7] md:p-3.5"
                            aria-label="0537 645 82 91 numarasını ara"
                            title="0537 645 82 91 numarasını ara"
                            draggable={false}
                            onClick={(event) => {
                                if (dragHappenedRef.current) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    dragHappenedRef.current = false;
                                }
                            }}
                        >
                            <Phone size={32} strokeWidth={2.2} aria-hidden="true" />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
