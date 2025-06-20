'use client';

import { motion } from 'framer-motion';
import { Plug } from 'lucide-react';

export default function ElectricianBlock() {
    const listItem = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <section id="electrician" className="w-full px-2 md:py-16 py-10 bg-white">
            <div className="mx-auto grid lg:grid-cols-2 md:gap-16 gap-8 items-stretch">
                {}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="bg-darkAccent shadow-lg p-6 sm:px-10 sm:py-12 rounded-3xl flex flex-col justify-center will-change-transform order-1 lg:order-2 min-h-[400px] lg:min-h-[580px]"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-left mb-6 leading-tight text-white flex items-center gap-4">
                        Электрические услуги с гарантией качества
                    </h2>
                    <p className="text-base text-left sm:text-xl text-white mb-8 max-w-xl">
                        Ремонт проводки, установка розеток, светильников и автоматов.
                    </p>

                    <motion.ul
                        className="space-y-3 w-full mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {[
                            'Ремонт и замена электропроводки',
                            'Установка и замена розеток и выключателей',
                            'Монтаж светильников и люстр',
                            'Установка автоматических выключателей',
                            'Диагностика и устранение электрических неисправностей',
                            'Монтаж систем умного дома и автоматизации',
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                variants={listItem}
                                className="flex items-start text-white text-sm sm:text-xl"
                            >
                                <span className="mt-1 mr-3 h-3 w-3 bg-accent rounded-full shrink-0 shadow-md"></span>
                                <span className="text-left">{item}</span>
                            </motion.li>
                        ))}

                    </motion.ul>

                    <div className="flex items-center bg-accent px-3 py-4 rounded-3xl text-white font-semibold text-base sm:text-lg max-w-xl mt-auto">
                        <Plug className="w-10 h-10 sm:w-7 sm:h-7 mr-3 text-white flex-shrink-0" />
                        <span>Гарантия качества на все виды электрических услуг</span>
                    </div>
                </motion.div>

                {}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="flex flex-col items-stretch will-change-transform order-2 lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[580px]"
                >
                    <div className="rounded-3xl overflow-hidden shadow-2xl flex-grow">
                        <img
                            src="/2.jpg"
                            srcSet="/2-small.jpg 480w, /2-medium.jpg 768w, /2.jpg 1200w"
                            sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, 1200px"
                            alt="Электрик за работой"
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />

                    </div>
                    <button
                        type="button"
                        className="mt-6 w-full px-6 sm:px-10 text-base sm:text-xl py-3 sm:py-4 rounded-3xl border-2 border-darkAccent text-darkAccent font-semibold shadow-lg transition-colors duration-300
                        bg-transparent hover:bg-darkAccent hover:text-white"
                    >
                        Заказать услугу
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
