// import { motion } from 'framer-motion';
//
// const services = [
//     'Сантехник',
//     'Электрик',
//     'Мастер на час',
//     'Ремонт бытовой техники',
//     'Отделочные работы',
// ];

export default function HeroSection() {
    return (
        <>
            {/* Hero-блок */}
            <section className="mt-28 sm:mt-32 mb-10 px-4 w-full flex justify-center">
                <div
                    className="relative flex flex-col md:flex-row items-start md:items-center justify-between
                    bg-[#2B272D] text-white rounded-[24px] md:rounded-[32px]
                    shadow-[inset_0_0_12px_0_rgba(195,170,249,0.25)]
                    w-full max-w-[1450px] px-6 sm:px-10 md:px-16 pt-12 pb-8 md:pb-0 min-h-[480px] md:min-h-[512px] overflow-hidden"
                >
                    {/* Текст */}
                    <div className="z-10 w-full md:max-w-[740px] md:pr-8 text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
                            Быстрый домашний ремонт <br />
                            <span className="text-accent">в день обращения</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-200 mb-6 max-w-xl">
                            Вызывайте сантехника, электрика, мастера на час или заказывайте отделку — без переплат, с гарантией качества.
                        </p>

                        {/* Картинка для мобильных устройств */}
                        <div className="w-full max-w-[860px] mt-6 mb-6 md:hidden rounded-[16px] overflow-hidden relative h-64 flex justify-center items-center">
                            <img
                                src="/5.png"
                                alt="Мастер на вызов"
                                className="w-[200%] h-full object-cover"
                                style={{ objectPosition: 'right' }}
                            />
                        </div>

                        {/* Кнопки */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contacts"
                                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold text-lg px-6 py-3 rounded-full transition text-center"
                            >
                                Вызвать мастера
                            </a>
                            <a
                                href="#services"
                                className="inline-block border border-white hover:bg-white hover:text-[#2B272D] text-white font-semibold text-lg px-6 py-3 rounded-full transition text-center"
                            >
                                Узнать подробнее
                            </a>
                        </div>
                    </div>

                    {/* Картинка для десктопа */}
                    {/* Картинка для десктопа */}
                    {/* Картинка для десктопа */}
                    <div className="hidden md:block absolute right-0 bottom-0 w-[400px] lg:w-[560px] h-[360px] lg:h-[484px] rounded-[16px] overflow-hidden pointer-events-none">
                        <div className="relative w-full h-full">
                            <img
                                src="/5.png"
                                alt="Мастер на вызов"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black rounded-tl-full opacity-25" />
                        </div>
                    </div>



                </div>
            </section>

            {/* 🔁 Бегущая строка */}
            {/*<div className="relative w-full rounded-3xl overflow-hidden py-2 bg-white">*/}
            {/*    /!* Градиентные края *!/*/}
            {/*    <div className="pointer-events-none absolute top-0 left-0 h-full w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />*/}
            {/*    <div className="pointer-events-none absolute top-0 right-0 h-full w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />*/}

            {/*    <motion.div*/}
            {/*        className="flex gap-8 sm:gap-12 text-[#2B272D] text-base sm:text-2xl font-semibold whitespace-nowrap w-max"*/}
            {/*        animate={{ x: ['0%', '-100%'] }}*/}
            {/*        transition={{*/}
            {/*            repeat: Infinity,*/}
            {/*            duration: 60,*/}
            {/*            ease: 'linear',*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        {Array(10).fill(services).flat().map((item, idx) => (*/}
            {/*            <span key={idx}>{item}</span>*/}
            {/*        ))}*/}
            {/*    </motion.div>*/}
            {/*</div>*/}
        </>
    );
}
