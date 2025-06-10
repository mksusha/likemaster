'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
    { id: 1, name: 'Ирина П.', text: 'Отличная работа! Мастер приехал вовремя и всё сделал очень качественно. Рекомендую!' },
    { id: 2, name: 'Алексей К.', text: 'Хороший сервис, всё прозрачно и без лишних вопросов. Работу выполнили быстро.' },
    { id: 3, name: 'Марина С.', text: 'Очень довольна результатом и гарантией. Буду обращаться ещё!' },
    { id: 4, name: 'Виктор Д.', text: 'Все сделали четко, качественно и быстро. Спасибо за сервис!' },
    { id: 5, name: 'Ольга М.', text: 'Очень приятное общение и профессиональный подход к работе. Рекомендую!' },
    { id: 6, name: 'Сергей Т.', text: 'Все прошло отлично. Работу выполнили в срок и с гарантией качества.' },
    { id: 7, name: 'Анна Л.', text: 'Приятно удивлена качеством и скоростью выполнения работы. Спасибо!' },
    { id: 8, name: 'Дмитрий Ф.', text: 'Все организовано на высшем уровне. Рекомендую друзьям и знакомым.' },
    { id: 9, name: 'Екатерина В.', text: 'Отличное отношение к клиентам и профессионализм. Буду обращаться ещё.' },
]

export default function Reviews() {
    return (
        <section id="reviews" className="w-full px-4 py-20 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="max-w-screen-xl mx-auto"
            >
                <h2 className="text-4xl font-extrabold text-center mb-16 text-darkAccent">
                    Отзывы наших клиентов
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map(({ id, name, text }) => (
                        <div
                            key={id}
                            className="p-6 bg-darkAccent rounded-3xl shadow-lg text-white flex flex-col"
                        >
                            <div className="flex items-center mb-4">
                                <h3 className="text-xl font-semibold">{name}</h3>
                                <div className="ml-auto flex space-x-1 text-accent">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} fill="currentColor" stroke="none" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-white/90 leading-relaxed flex-grow">{text}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
