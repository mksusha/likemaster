'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverPanel,
    PopoverGroup,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const services = [
    { name: 'Все услуги', anchor: 'all-services' },
    { name: 'Сантехник', anchor: 'plumber' },
    { name: 'Электрик', anchor: 'electrician' },
    { name: 'Мастер на час', anchor: 'handyman' },
    { name: 'Ремонт бытовой техники', anchor: 'appliance-repair' },
    { name: 'Отделочные работы', anchor: 'finishing' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Функция плавного скролла с offset
    const smoothScrollTo = (targetY: number, duration = 800) => {
        const startY = window.scrollY
        const distance = targetY - startY
        const startTime = performance.now()

        const easeInOutCubic = (t: number) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            window.scrollTo(0, startY + distance * easeInOutCubic(progress))
            if (progress < 1) {
                requestAnimationFrame(step)
            }
        }

        requestAnimationFrame(step)
    }

    const scrollToId = (id: string, offset = 70) => {
        const element = document.getElementById(id)
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            const targetPosition = elementPosition - offset
            smoothScrollTo(targetPosition)
        }
    }

    // Обработчик клика по ссылке меню
    const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
        e.preventDefault()
        scrollToId(anchor)
        setMobileMenuOpen(false)
    }

    return (
        <motion.header
            initial={false}
            animate={scrolled ? 'scrolled' : 'top'}
            variants={{
                top: {
                    height: 100,
                    width: '100%',
                    top: 0,
                    borderRadius: '0rem',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    backdropFilter: 'none',
                    WebkitBackdropFilter: 'none',
                },
                scrolled: {
                    height: 72,
                    width: '87%',
                    top: 16,
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(250, 249, 251, 0.6)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                    },
                },
            }}
            className="fixed left-0 right-0 m-auto w-auto z-50 flex items-center backdrop-blur-md backdrop-saturate-100"
            style={{ willChange: 'height, border-radius, background-color, backdrop-filter, width, margin' }}
        >
            <nav className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-14 flex items-center justify-between h-full">
                {/* Лого / Название */}
                <a href="#" className="block h-14 w-auto">
                    <img src="/2.png" alt="Логотип компании" className="h-14 w-50" />
                </a>

                {/* Десктоп меню с Popover */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-10 text-gray-700 font-medium items-center">
                    <Popover className="relative">
                        <PopoverButton
                            className="
    flex items-center gap-x-1 text-base font-semibold text-gray-700 rounded-lg hover:text-accent transition-colors
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white
  "
                        >
                            Услуги
                            <svg
                                className="h-4 w-4 font-bold text-accent group-hover:text-accent-hover transition"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                            </svg>
                        </PopoverButton>

                        <PopoverPanel
                            className="absolute top-full left-1/2 z-50 mt-4 w-56 rounded-xl bg-white shadow-2xl ring-1 ring-gray-200 overflow-hidden animate-fade-in -translate-x-1/2"
                        >
                            <ul className="divide-y divide-gray-100">
                                {services.map(service => (
                                    <li key={service.name}>
                                        <a
                                            href={`#${service.anchor}`}
                                            onClick={(e) => handleMenuClick(e, service.anchor)}
                                            className="block px-5 py-3 text-sm text-gray-800 hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                                        >
                                            {service.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </PopoverPanel>
                    </Popover>

                    <a
                        href="#contacts"
                        onClick={(e) => handleMenuClick(e, 'contacts')}
                        className="hover:text-accent font-semibold cursor-pointer"
                    >
                        Контакты
                    </a>

                    <a
                        href="#faq"
                        onClick={(e) => handleMenuClick(e, 'faq')}
                        className="hover:text-accent font-semibold cursor-pointer"
                    >
                       FAQ
                    </a>
                </PopoverGroup>

                {/* Кнопка открытия мобильного меню */}
                <button
                    type="button"
                    className="lg:hidden p-2 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Открыть меню"
                >
                    <Bars3Icon className="h-6 w-6" />
                </button>
            </nav>

            {/* Мобильное меню */}
            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                <DialogPanel className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto">
                    <div className="flex items-center justify-between mb-8">
                        <a href="#" className="text-xl font-bold text-gray-900">
                            Компания
                        </a>
                        <button
                            type="button"
                            className="p-2 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Закрыть меню"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <nav>
                        <ul className="space-y-6 text-lg font-medium text-gray-700">
                            {services.map(service => (
                                <li key={service.name} className="border-b border-gray-200 pb-2">
                                    <a
                                        href={`#${service.anchor}`}
                                        onClick={(e) => handleMenuClick(e, service.anchor)}
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                            <li className="border-b border-gray-200 pb-2">
                                <a href="#contacts" onClick={(e) => handleMenuClick(e, 'contacts')}>
                                    Контакты
                                </a>

                            </li>
                            <li className="border-b border-gray-200 pb-2">

                                <a href="#faq" onClick={(e) => handleMenuClick(e, 'faq')}>
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </nav>
                </DialogPanel>
            </Dialog>
        </motion.header>
    )
}
