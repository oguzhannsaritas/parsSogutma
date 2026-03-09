import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // ✅ LCP fix: Haritayı tıklayana kadar yükleme

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const to = 'info@parsogutma.com';
        const mailSubject = `${subject || 'Konu Yok'}`;

        const body =
            `Ad Soyad: ${name}\n` +
            `E-posta: ${email}\n` +
            `Telefon: ${phone}\n\n` +
            `Konu: ${subject}\n\n` +
            `Mesaj:\n${message}\n`;

        const href =
            `mailto:${to}` +
            `?subject=${encodeURIComponent(mailSubject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = href;
    };

    return (
        <div className="bg-white dark:bg-[#111827] min-h-screen pt-24 pb-4 md:pb-16 transition-colors duration-300">
            {/* Map Section */}
            <div className="w-full h-[400px] bg-gray-200 dark:bg-neutral-800 mb-16 relative overflow-hidden">
                {(
                    <iframe
                        title="Pars Soğutma Konum Haritası"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d895.3683344167697!2d29.269102942284555!3d40.989186053399436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf694dfd5897%3A0xcd8ea58029f9d9f!2sPars%20So%C4%9Futma%20Ekipmanlar%C4%B1%20Ltd.%20%C5%9Eti.!5e0!3m2!1str!2str!4v1743767405972!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="transition-all duration-500"
                    />
                )}
            </div>

            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-lg md:text-xl font-bold mb-8 text-black dark:text-white uppercase">
                            {t('contact.title')}
                        </h2>

                        <div className="space-y-4 md:space-y-8">
                            {/* Headquarters */}
                            <div className="flex items-start border-b border-gray-100 dark:border-neutral-800 pb-6">
                <span className="w-28 md:w-40 shrink-0 font-bold text-gray-500 dark:text-gray-400 uppercase text-xs md:text-sm">
                  {t('contact.headquarters')}
                </span>
                                <span className="flex-1 text-[10px] md:text-sm text-gray-600 dark:text-gray-300">
                  : Mimar Sinan, Cuma Cd. No: 7 İç Kapı No: 2, 34920 Sultanbeyli/İstanbul
                </span>
                            </div>

                            {/* Headquarters Contact */}
                            <div className="flex items-start border-b border-gray-100 dark:border-neutral-800 pb-6">
                <span className="w-28 md:w-40 shrink-0 font-bold text-gray-500 dark:text-gray-400 uppercase text-xs md:text-sm">
                  {t('contact.headquartersContact')}
                </span>
                                <div className="flex-1">
                                    {/* ✅ Kontrast daha sağlam */}
                                    <p className="text-[#005A8E] dark:text-[#38BDF8] text-[10px] md:text-sm font-bold">
                                        : +90 543 170 72 77
                                    </p>
                                    <p className="text-[#005A8E] dark:text-[#38BDF8] font-bold text-[10px] md:text-sm">
                                        +90 537 645 82 91
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start border-b border-gray-100 dark:border-neutral-800 pb-6">
                <span className="w-28 md:w-40 shrink-0 font-bold text-gray-500 dark:text-gray-400 uppercase text-xs md:text-sm">
                  {t('contact.email')}
                </span>
                                {/* ✅ Burada domain typo var; mailto ile aynı yap */}
                                <span className="flex-1 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                  : info@parsogutma.com
                </span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-8 text-black dark:text-white uppercase">
                            {t('contact.formTitle')}
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-2 md:space-y-6 shadow-lg bg-gray-50 shadow-gray-400 rounded-lg border-gray-300 border-0 p-4 md:border-0"
                        >
                            {/* Name & Email Row */}
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="contact-name" className="text-[13px] md:text-sm font-bold text-gray-700">
                                        {t('contact.form.name')}
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        autoComplete="name"
                                        className="w-full border border-gray-300 text-xs bg-white text-black p-1.5 md:p-3 rounded-lg focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-email" className="text-[13px] md:text-sm font-bold text-gray-700">
                                        {t('contact.form.email')}
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="email"
                                        className="w-full border border-gray-300 bg-white text-black text-xs p-1.5 md:p-3 rounded-lg focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Phone & Subject Row */}
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="contact-phone" className="text-[13px] md:text-sm font-bold text-gray-700">
                                        {t('contact.form.phone')}
                                    </label>
                                    <input
                                        id="contact-phone"
                                        name="phone"
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        autoComplete="tel"
                                        className="w-full border border-gray-300 text-xs bg-white text-black p-1.5 md:p-3 rounded-lg focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-subject" className="text-[13px] md:text-sm font-bold text-gray-700">
                                        {t('contact.form.subject')}
                                    </label>
                                    <input
                                        id="contact-subject"
                                        name="subject"
                                        type="text"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        autoComplete="off"
                                        className="w-full border border-gray-300 text-xs bg-white text-black p-1.5 md:p-3 rounded-lg focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="contact-message" className="text-sm font-bold text-gray-700">
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={6}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full border border-gray-300 text-xs bg-white text-black p-1.5 md:p-3 rounded-lg
                  outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-gray-300 focus:shadow-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-gray-100 rounded-lg dark:bg-[#111827] text-black dark:text-white font-bold px-8 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors uppercase text-xs md:text-sm tracking-wider"
                            >
                                {t('contact.form.send')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}