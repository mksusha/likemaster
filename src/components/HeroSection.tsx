
export default function HeroSection() {
    // Функция плавного скролла с easeInOutCubic
    const smoothScrollTo = (targetY: number, duration = 800) => {
        const startY = window.scrollY;
        const distance = targetY - startY;
        const startTime = performance.now();

        const easeInOutCubic = (t: number) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, startY + distance * easeInOutCubic(progress));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    // Функция скролла с учётом offset
    const scrollToId = (id: string, offset = 70) => {
        if (id === 'contacts' || id === 'about') offset = 100;
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const targetPosition = elementPosition - offset;
            smoothScrollTo(targetPosition);
        }
    };

    return (
        <>
            {/* Hero-блок */}
            <section className="mt-28 sm:mt-32 mb-10 px-2 w-full flex justify-center">
                <div
                    className="relative flex flex-col md:flex-row items-start md:items-center justify-between
          bg-[#2B272D] text-white rounded-[24px] md:rounded-[32px]
          shadow-[inset_0_0_12px_0_rgba(195,170,249,0.25)]
          w-full max-w-[1450px] px-6 sm:px-10 md:px-16 pt-12 pb-8 md:pb-0 min-h-[480px] md:min-h-[512px] overflow-hidden"
                >
                    {/* Текст */}
                    <div className="z-10 w-full md:max-w-[740px] md:pr-8 text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
                            Быстрый домашний ремонт по известной цене <br />
                            <span className="text-accent">в день обращения</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-200 mb-6 max-w-xl">
                            Вызывайте сантехника, электрика, мастера на час, заказывайте ремонт бытовой техники или отделочные работы — без переплат и с гарантией качества.
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
                            {/* Звонок */}
                            <a
                                href="tel:+71234567890" // замени на реальный номер
                                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold text-lg px-6 py-3 rounded-full transition text-center"
                            >
                                Вызвать мастера
                            </a>

                            {/* Плавный скролл к "about" */}
                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToId('about');
                                }}
                                className="inline-block border border-white hover:bg-white hover:text-[#2B272D] text-white font-semibold text-lg px-6 py-3 rounded-full transition text-center"
                            >
                                Узнать подробнее
                            </a>
                        </div>
                    </div>

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
        </>
    );
}
