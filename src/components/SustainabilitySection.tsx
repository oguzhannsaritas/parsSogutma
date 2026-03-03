import { ArrowLeftRight, Fan, RefreshCw, Layers, Leaf, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SustainabilitySection() {
  const { t } = useLanguage();

  const features = [
    { icon: <ArrowLeftRight  className="md:size-[32px] size-5 " />, label: t('sust.slidingDoors') },
    { icon: <Fan className="md:size-[32px] size-5" />, label: t('sust.efficientFans') },
    { icon: <RefreshCw className="md:size-[32px] size-5" />, label: t('sust.cycle') },
    { icon: <Layers className="md:size-[32px] size-5" />, label: t('sust.shelving') },
    { icon: <Leaf className="md:size-[32px] size-5" />, label: t('sust.greenTech') },
    { icon: <Lightbulb className="md:size-[32px] size-5" />, label: t('sust.ledLighting') },
  ];

  return (
    <section className="w-full bg-white dark:bg-[#111827] py-4 md:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 items-center justify-center text-center lg:grid-cols-2 gap-12  mb-5 md:mb-16">
          {/* Text & Icons */}
          <div className="space-y-0">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight   mb-2">
              {t('sust.title')}
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-lg leading-relaxed">
              {t('sust.desc')}
            </p>

            <div className="grid grid-cols-3 relative left-[8%] items-center justify-center text-center lg:grid-cols-3 gap-3 md:gap-6 mt-3 md:mb-0 -mb-7 md:mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex  flex-col items-center h-16 lg:h-32  justify-center  border-1 border-gray-400 dark:border-neutral-600 rounded-xl dark:hover:border-white  transition-colors aspect-square group">
                  <div className="text-gray-600 dark:text-gray-400 dark:group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                    <span className="dark:text-white font-thin mt-2 md:text-sm text-[9px]" >
                        {feature.label}
                    </span>
                </div>
              ))}
            </div>
          </div>

          {/* Wind Turbine Image */}
          <div className="relative  md:h-full w-full  overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1000"
              alt="Wind Turbine in Nature"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Bottom Banner Image */}
          <div className="w-full h-full md:h-[300px] overflow-hidden rounded-2xl shadow-lg">
              <video
                  className="object-cover w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
              >
                  <source src="src/public/videos/gorsel1.mp4" type="video/mp4" />
              </video>
          </div>
      </div>
    </section>
  );
}
