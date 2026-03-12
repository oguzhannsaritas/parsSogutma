import { Smile, Truck, Package, Headphones, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import {useLanguage} from "@/src/context/LanguageContext.tsx";

export default function StatsSection() {
    const { t } = useLanguage();
    const stats = [
        {
            icon: <Smile  className="text-black dark:text-white size-5 md:size-[32px]" />,
            value: "200 +",
            label: t('stats.happyCustomers')
        },
        {
            icon: <Truck className="text-black dark:text-white size-5 md:size-[32px]" />,
            value: "890 +",
            label: t('stats.productOrders')
        },
        {
            icon: <Package className="text-black dark:text-white size-5 md:size-[32px]" />,
            value: "95 +",
            label: t('stats.productVariety')
        },
        {
            icon: <Headphones  className="text-black dark:text-white size-5 md:size-[32px]" />,
            value: "561 +",
            label: t('stats.supportRequests')
        },
        {
            icon: <Building2  className="text-black dark:text-white size-5 md:size-[32px]" />,
            value: "3",
            label: t('stats.branches')
        }
    ];

    return (
        <section className="relative w-full bg-[#111827] dark:bg-white text-white dark:text-black py-2 overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -left-10 md:w-96 md:h-96 opacity-[0.03] dark:opacity-[0.05]">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="dot-pattern" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="0.5" className="fill-white dark:fill-black" />
                        </pattern>
                        <rect width="100" height="100" fill="url(#dot-pattern)" />
                    </svg>
                </div>

                <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-[0.03] dark:opacity-[0.05]">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" fill="url(#dot-pattern)" />
                    </svg>
                </div>

                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-20 dark:opacity-30">
                    <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-h-[300px] object-cover">
                        <path d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,186.7C840,192,960,160,1080,144C1200,128,1320,128,1380,128L1440,128" strokeWidth="1.5" strokeDasharray="4 4" className="stroke-white dark:stroke-black opacity-30" />
                        <path d="M0,192L60,186.7C120,181,240,171,360,149.3C480,128,600,96,720,106.7C840,117,960,171,1080,186.7C1200,203,1320,181,1380,170.7L1440,160" stroke="#009FE3" strokeWidth="1.5" className="opacity-40" />
                        <path d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,112C840,96,960,96,1080,112C1200,128,1320,160,1380,176L1440,192" strokeWidth="1" className="stroke-white dark:stroke-black opacity-20" />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-1 md:mb-12">
                    <p className="text-gray-400 dark:text-gray-600 md:font-bold tracking-widest uppercase text-[10px] md:text-sm mb-0 relative md:top-2 opacity-60">
                        {t('stats.number')}
                    </p>

                    <h2 className="text-lg md:text-4xl font-bold flex relative md:top-5 justify-center items-center text-white dark:text-black">
                        {t('stats.whatWeHaveDoneSoFar')}
                    </h2>
                </div>

                <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 ">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="relative mb-1 md:mb-2">
                                <div className="md:w-16 md:h-16  w-10 h-10 bg-white  dark:bg-[#111827] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    {stat.icon}
                                </div>
                                <div className="absolute inset-0 bg-white/20  dark:bg-[#6b7280]  rounded-full blur-xl transform scale-90 group-hover:scale-110 transition-transform duration-300"></div>
                            </div>

                            <p className="text-[10px] md:text-3xl font-bold text-white dark:text-black">{stat.value}</p>
                            <p className="text-[10px] md:text-[11px] font-bold text-white dark:text-black uppercase tracking-widest opacity-90">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}