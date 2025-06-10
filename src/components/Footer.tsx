import { Phone } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-white mt-16 border-t-2 border-l-2 border-r-2 border-darkAccent/50 py-10 px-6 rounded-t-3xl">
            <div className="max-w-[1350px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-darkAccent">
                {}
                <a href="#" className="block h-14 w-auto">
                    <img
                        src="/2.png"
                        alt="Логотип компании"
                        className="h-14 w-auto object-contain"
                    />
                </a>

                {}
                <div
                    className="flex flex-col md:flex-row gap-4 md:gap-10 text-center md:text-left text-sm md:text-base">
                    <a
                        href="/oferta.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors cursor-pointer"
                    >
                        Публичная оферта
                    </a>
                    <a
                        href="/privacy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors cursor-pointer"
                    >
                        Политика конфиденциальности
                    </a>

                </div>

                {}
                <div className="flex flex-col items-center md:items-end gap-2">
                    <a
                        href="tel:+71234567890"
                        className="flex items-center gap-2 hover:text-accent transition-colors font-semibold"
                    >
                    <Phone size={22} />
                        <span className="text-lg">+7 (123) 456-78-90</span>
                    </a>
                </div>
            </div>

            {}
            <div className="mt-6 border-t border-darkAccent/30 pt-4 text-center text-sm text-darkAccent/70 select-none">
                © ЛАЙКМАСТЕР Москва, 2025. Все права защищены.
            </div>
        </footer>
    )
}
