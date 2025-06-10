'use client';

import { motion } from 'framer-motion';
import { Paintbrush } from 'lucide-react';

export default function FinishingBlock() {
    const listItem = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <section id="finishing" className="w-full px-2 py-16 bg-white">
            <div className="mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-stretch">
                {/* Текстовая часть */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="border-4 border-darkAccent shadow-lg p-6 sm:px-10 sm:py-12 rounded-3xl flex flex-col justify-center will-change-transform min-h-[400px] lg:min-h-[580px]"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-left font-extrabold mb-6 leading-tight text-darkAccent-default">
                        Отделочные работы <br className="hidden sm:block" /> — под ключ и с гарантией
                    </h2>
                    <p className="text-base sm:text-xl text-left text-gray-700 mb-8 max-w-xl">
                        Шпаклёвка, покраска, обои, укладка плитки и ламината.
                    </p>

                    <motion.ul
                        className="space-y-3 w-full mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {[
                            'Выравнивание стен и потолков шпаклёвкой',
                            'Покраска стен и потолков',
                            'Поклейка обоев любых видов',
                            'Укладка напольной плитки и керамогранита',
                            'Укладка ламината и подложки',
                            'Герметизация и затирка швов',
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                variants={listItem}
                                className="flex items-start text-gray-800 text-sm sm:text-xl"
                            >
                                <span className="mt-1 mr-3 h-3 w-3 bg-accent rounded-full shrink-0 shadow-md"></span>
                                <span className="text-left">{item}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <div className="flex items-center bg-darkAccent px-3 py-4 rounded-3xl text-white font-semibold text-base sm:text-lg max-w-xl mt-auto">
                        <Paintbrush className="w-10 h-10 sm:w-7 sm:h-7 mr-3 text-white flex-shrink-0" />
                        <span>Чистовая отделка с контролем качества</span>
                    </div>
                </motion.div>

                {/* Фото и кнопка */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="min-h-[300px] sm:min-h-[400px] md:min-h-[580px] flex flex-col items-stretch will-change-transform"
                >
                    <div className="rounded-3xl overflow-hidden shadow-2xl flex-grow">
                        <img
                            src="/7.jpg"
                            srcSet="/7-small.jpg 480w, /7-medium.jpg 768w, /7.jpg 1200w"
                            sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, 1200px"
                            alt="Отделочные работы в процессе"
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />

                    </div>

                    <button
                        type="button"
                        className="mt-6 w-full px-10 text-xl py-4 rounded-3xl bg-accent hover:bg-accent-hover text-darkAccent font-semibold shadow-lg transition-colors duration-300"
                    >
                        Заказать услугу
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
