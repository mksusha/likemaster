'use client'

import { motion } from 'framer-motion'

export default function HowWeWork() {
    const steps = [
        {
            id: 1,
            title: 'Позвоните',
            description: 'Свяжитесь с нами в удобное время. Мы уточним все детали, подберем оптимальное время визита и назовем точную стоимость работы без скрытых платежей.'
        },
        {
            id: 2,
            title: 'Мастер приезжает',
            description: 'Наш опытный специалист приедет точно в назначенное время, подготовленный и со всем необходимым инструментом для качественного выполнения работы.'
        },
        {
            id: 3,
            title: 'Выполняет работу',
            description: 'Работа будет выполнена быстро и аккуратно с соблюдением всех технических требований и стандартов качества.'
        },
        {
            id: 4,
            title: 'Гарантия',
            description: 'Мы предоставляем официальную гарантию на выполненные работы и материалы, чтобы вы были уверены в надежности и долговечности результата.'
        },
    ]

    return (
        <section id="about" className="w-full px-2 mt-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="w-full mx-auto bg-darkAccent rounded-3xl py-20 px-6 md:px-12 text-white shadow-xl"
            >
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-center tracking-tight">
                    Как мы работаем
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map(({ id, title, description }) => (
                        <div
                            key={id}
                            className="flex flex-col p-6 sm:p-8 bg-darkAccent/90 rounded-3xl border border-accent hover:border-accent/80 hover:bg-darkAccent/75 transition-all text-left"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent text-white font-bold text-2xl shadow-md flex-shrink-0">
                                    {id}
                                </div>
                                <h3 className="text-2xl font-semibold">{title}</h3>
                            </div>
                            <p className="text-base text-white/90 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
