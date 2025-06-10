'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function ContactBlock() {
    return (
        <section id="contacts" className="w-full px-2 sm:px-6">
            <div className="md:mt-16 mt-8 md:py-20 py-12 bg-darkAccent rounded-3xl text-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10">
                    {}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-col justify-center items-center  text-center  px-2"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
                            Контакты
                        </h2>
                        <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-md">
                            Остались вопросы? Звоните или приезжайте — мы всегда на связи.
                        </p>
                    </motion.div>

                    {}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2}}
                        className="bg-white mx-4 text-darkAccent p-5 sm:p-8 md:p-10 rounded-3xl shadow-xl"
                    >
                        <ul className="space-y-5 sm:space-y-6 text-sm sm:text-base font-semibold">
                            <li className='flex items-start gap-3 sm:gap-4'>
                                <span>
                                    Работаем по всей России, офис находится в Москве.
                                </span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent"/>
                                    <span>г. Москва, ул. Примерная, 12</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 sm:gap-4">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent"/>
                                <a href="tel:+79999999999" className="hover:text-accent transition-colors">+7 (999) 999-99-99</a>
                            </li>
                            <li className="flex items-start gap-3 sm:gap-4">
                                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent"/>
                                <span>Режим работы: ежедневно с 8:00 до 21:00</span>
                            </li>
                            <li className="pt-3 sm:pt-4 border-t border-gray-300 text-xs sm:text-sm text-darkAccent/70">
                                <p>ИП Иванов И.И.</p>
                                <p>УНП: 123456789</p>
                                <p>ОГРН: 987654321000</p>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
