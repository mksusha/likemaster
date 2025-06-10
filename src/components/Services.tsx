'use client';

import {
    Wrench,
    Plug,
    Hammer,
    WashingMachine,
    Paintbrush,
    PhoneCall,
} from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

type Service = {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    spanCols?: boolean;
};

const services: Service[] = [
    {
        id: 'plumber',
        title: 'Сантехник',
        description: 'Устранение протечек, установка сантехники, ремонт труб и смесителей.',
        icon: <Wrench className="w-10 h-10 text-accent" />,
    },
    {
        id: 'electrician',
        title: 'Электрик',
        description: 'Ремонт проводки, установка розеток, светильников и автоматов.',
        icon: <Plug className="w-10 h-10 text-accent" />,
    },
    {
        id: 'handyman',
        title: 'Мастер на час',
        description: 'Мелкий бытовой ремонт: сборка мебели, замена замков, крепление полок.',
        icon: <Hammer className="w-10 h-10 text-accent" />,
    },
    {
        id: 'appliance-repair',
        title: 'Ремонт бытовой техники',
        description: 'Диагностика и ремонт стиральных машин, холодильников и другой техники.',
        icon: <WashingMachine className="w-10 h-10 text-accent" />,
    },
    {
        id: 'finishing',
        title: 'Отделочные работы',
        description: 'Шпаклёвка, покраска, обои, укладка плитки и ламината.',
        icon: <Paintbrush className="w-10 h-10 text-accent" />,
        spanCols: true,
    },
];

const fadeContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const fadeInItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};


const smoothScrollTo = (targetY: number, duration = 1000) => {
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

const scrollToId = (id: string, headerOffset = 70) => {
    const element = document.getElementById(id);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        smoothScrollTo(offsetPosition, 1000);
    }
};


export default function Services() {
    return (
        <motion.section
            className="py-8 sm:py-14 px-2"
            id="services"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
        >
            <div className="max-w-full mx-auto">
                <h2 className="text-4xl text-black font-bold mb-16 text-center">Наши услуги</h2>

                <motion.div
                    className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
                    variants={fadeContainer}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={fadeInItem}
                            onClick={() => scrollToId(service.id)}
                            className={`cursor-pointer group block rounded-2xl p-8 bg-darkAccent hover:bg-darkAccent-hover transition-colors duration-300 border border-transparent hover:border-accent shadow-lg hover:shadow-2xl ${
                                service.spanCols ? 'lg:col-span-2' : ''
                            }`}
                        >
                            <div className="flex items-center gap-6 mb-6">
                                <div className="bg-[#1f1c22] p-4 rounded-full">{service.icon}</div>
                                <h3 className="text-2xl font-semibold text-white group-hover:text-accent transition">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="mt-12 w-full bg-accent text-black py-8 px-6 rounded-2xl shadow-lg relative overflow-hidden"
                >
                    <svg
                        className="absolute top-[-40px] right-[-40px] w-40 h-40 opacity-20 text-black"
                        viewBox="0 0 200 200"
                    >
                        <circle cx="100" cy="100" r="100" fill="currentColor" />
                    </svg>

                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                                <PhoneCall className="w-6 h-6 text-black" />
                                <h3 className="text-2xl font-bold">Нужна помощь — обращайтесь!</h3>
                            </div>
                            <p className="text-base mb-2">
                                Звоните{' '}
                                <a
                                    href="tel:+74993915779"
                                    className="underline hover:text-black/80 transition"
                                >
                                    +7 (000) 000-00-00
                                </a>{' '}
                                или оставьте заявку ниже.
                            </p>
                        </div>
                        <button
                            onClick={() => scrollToId('contact')}
                            className="px-6 py-3 text-base font-semibold rounded-full bg-black text-accent hover:bg-black/80 transition whitespace-nowrap"
                        >
                            Оставить заявку
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
