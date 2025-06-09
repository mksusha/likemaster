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
    'Сантехник',
    'Электрик',
    'Мастер на час',
    'Ремонт бытовой техники',
    'Отделочные работы',
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Следим за прокруткой страницы
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            initial={false}
            animate={scrolled ? 'scrolled' : 'top'}
            variants={{
                top: {
                    height: 100,
                    width: '100%',
                    margin: '0 auto',
                    top: 0,
                    borderRadius: '0rem',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    backdropFilter: 'none',
                    boxShadow: 'none',
                    borderBottom: 'none',
                },
                scrolled: {
                    height: 72,
                    width: '87%',
                    margin: '0 auto',
                    top: 16,
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(250, 249, 251, 0.6)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'none',
                    border: '1px solid rgba(0,0,0,0.06)',
                    transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                    },
                },
            }}
            className="fixed left-0 right-0 z-50 flex items-center"
            style={{willChange: 'height, border-radius, background-color, backdrop-filter, width, margin'}}
        >
            <nav className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-14 flex items-center justify-between h-full">
                {/* Лого / Название */}
                <a href="#" className="block h-14 w-auto">
                    <img src="/2.png" alt="Логотип компании" className="h-14 w-50"/>
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
                                {services.map((service) => (
                                    <li key={service}>
                                        <a
                                            href="#"
                                            className="block px-5 py-3 text-sm text-gray-800 hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                                        >
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </PopoverPanel>
                    </Popover>


                    <a href="#contacts" className="hover:text-accent font-semibold cursor-pointer">
                        Контакты
                    </a>
                </PopoverGroup>

                {/* Кнопка открытия мобильного меню */}
                <button
                    type="button"
                    className="lg:hidden p-2 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Открыть меню"
                >
                    <Bars3Icon className="h-6 w-6"/>
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
                            <XMarkIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <nav>
                        <ul className="space-y-6 text-lg font-medium text-gray-700">
                            {services.map((service) => (
                                <li key={service} className="border-b border-gray-200 pb-2">
                                    {service}
                                </li>
                            ))}
                            <li className="border-b border-gray-200 pb-2">
                                <a href="#contacts" onClick={() => setMobileMenuOpen(false)}>
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                </DialogPanel>
            </Dialog>
        </motion.header>
    )
}
