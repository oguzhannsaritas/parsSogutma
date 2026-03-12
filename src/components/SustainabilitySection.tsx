import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeftRight, Fan, RefreshCw, Layers, Leaf, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SustainabilitySection() {
    const { t } = useLanguage();

    const features = [
        { icon: <ArrowLeftRight className="md:size-[32px] size-5 " />, label: t('sust.slidingDoors') },
        { icon: <Fan className="md:size-[32px] size-5" />, label: t('sust.efficientFans') },
        { icon: <RefreshCw className="md:size-[32px] size-5" />, label: t('sust.cycle') },
        { icon: <Layers className="md:size-[32px] size-5" />, label: t('sust.shelving') },
        { icon: <Leaf className="md:size-[32px] size-5" />, label: t('sust.greenTech') },
        { icon: <Lightbulb className="md:size-[32px] size-5" />, label: t('sust.ledLighting') },
    ];

    const videoWrapRef = useRef<HTMLDivElement | null>(null);
    const [loadVideo, setLoadVideo] = useState(false);

    useEffect(() => {
        if (!videoWrapRef.current) return;

        const io = new IntersectionObserver(
            (entries) => {
                const e = entries[0];
                if (e && e.isIntersecting) {
                    setLoadVideo(true);
                    io.disconnect();
                }
            },
            { rootMargin: '400px 0px' }
        );

        io.observe(videoWrapRef.current);
        return () => io.disconnect();
    }, []);
    return (
        <section className="w-full bg-white dark:bg-[#111827] py-4 md:py-16 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 items-center justify-center text-center lg:grid-cols-2 gap-12 mb-5 md:mb-16">
                    <div className="space-y-0">
                        <h2 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
                            {t('sust.title')}
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 text-xs md:text-lg leading-relaxed">
                            {t('sust.desc')}
                        </p>

                        <div className="grid grid-cols-3 mx-auto w-full justify-items-center items-center text-center gap-3 md:gap-6 mt-3 md:mb-0 -mb-7 md:mt-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center w-full max-w-[70px] sm:max-w-[90px] lg:max-w-[128px] aspect-square justify-center border border-gray-400 dark:border-neutral-600 rounded-xl dark:hover:border-white transition-colors group p-1"
                                >
                                    <div className="text-gray-600 dark:text-gray-400 dark:group-hover:text-white transition-colors">
                                        {feature.icon}
                                    </div>
                                    <span className="dark:text-white font-thin mt-1 md:mt-2 md:text-sm text-[9px] leading-tight">
                                        {feature.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative md:h-full w-full overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={"/images/home/sustanion.webp"}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            alt="Wind Turbine in Nature"
                            className="object-cover w-full h-full"
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            width={1000}
                            height={700}
                        />
                    </div>
                </div>

                <div ref={videoWrapRef} className="w-full h-full md:h-[300px] overflow-hidden rounded-2xl shadow-lg">
                    <video
                        className="object-cover w-full h-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                    >
                        {loadVideo ? <source src="/videos/gorsel1-1280.mp4" type="video/mp4" /> : null}
                    </video>
                </div>
            </div>
        </section>
    );
}