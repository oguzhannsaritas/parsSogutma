import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-[#111827]  min-h-screen transition-colors duration-300">
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="About Us Banner" 
          className="w-full h-full object-cover"
          width={1600}
          height={900}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center mt-20  text-white">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider uppercase">
            <Link to="/" className="hover:text-gray-300 transition-colors">{t('about.breadcrumb.home')}</Link>
            <span className="text-gray-400">/</span>
            <span>{t('about.breadcrumb.current')}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-8 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 items-start">
          <div className="space-y-8">

            <div>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 md:mb-6">{t('about.section1.title')}</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs md:text-lg">
                {t('about.section1.text')}
              </p>
            </div>
              <div className="rounded-lg overflow-hidden shadow-xl mt-8">
                  <img
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
                      alt="Pars Factory"
                      className="w-full h-auto object-cover"
                      width={250}
                      height={450}
                  />
              </div>

          </div>

          <div className="bg-gray-50 dark:bg-[#374151] shadow shadow-gray-400 p-6 md:p-10 rounded-xl">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-8">{t('about.section2.title')}</h2>
            <ul className="space-y-2 md:space-y-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-[#009FE3] mt-2.5 flex-shrink-0" />
                  <p className="text-gray-700 text-xs md:text-lg dark:text-gray-300 leading-relaxed">
                    {t(`about.section2.list${num}`)}
                  </p>
                </li>
              ))}
            </ul>
              <div className="rounded-lg overflow-hidden shadow-xl mt-8">
                  <img
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
                      alt="Pars Factory"
                      className="w-full h-auto object-cover"
                      width={250}
                      height={450}
                  />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
