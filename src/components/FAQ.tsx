'use client'

import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

type FAQItem = {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: 'Вы контролируете качество обслуживания?',
        answer: 'Мы контролируем работу специалистов на всех этапах и отслеживаем реакцию клиентов.',
    },
    {
        question: 'Есть ли гарантия на работы?',
        answer: 'Мастер несет ответственность за качество оказанных услуг. Гарантия действует от 6 месяцев до 3 лет.',
    },
    {
        question: 'Как быстро вы приезжаете после вызова?',
        answer: 'Обычно мастер выезжает в течение 1–2 часов после оформления заявки.',
    },
    {
        question: 'Сколько стоит диагностика?',
        answer: 'Диагностика бесплатна при дальнейшем выполнении работ мастером.',
    },
    {
        question: 'Какие способы оплаты вы принимаете?',
        answer: 'Мы принимаем наличные, банковские карты и онлайн-оплату.',
    },
    {
        question: 'Можно ли перенести визит мастера?',
        answer: 'Да, просто свяжитесь с нашей службой поддержки, чтобы выбрать другое удобное время.',
    },
]

type FAQItemProps = {
    item: FAQItem
    isOpen: boolean
    onToggle: () => void
}

function FAQEntry({ item, isOpen, onToggle }: FAQItemProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}

            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            onClick={onToggle}
            className={`cursor-pointer rounded-2xl border border-gray-200 px-6 py-5 transition-colors duration-300 ${
                isOpen ? 'bg-accent/10' : 'hover:bg-accent/10'
            }`}
        >
            <div className="flex justify-between items-center text-left w-full text-darkAccent">
                <span className="text-lg font-semibold">{item.question}</span>
                <ChevronDown
                    className={`h-5 w-5 text-darkAccent transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-accent' : ''
                    }`}
                />
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <p className="text-base text-gray-800 font-normal leading-6 text-left">{item.answer}</p>
            </div>
        </motion.div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section  id="faq" className="py-10 bg-white">
            <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h6 className="text-lg text-accent font-medium mb-2">FAQ & помощь</h6>
                    <h2 className="text-4xl font-bold text-gray-900 leading-tight">Всё, что вы хотели узнать</h2>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FAQEntry
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => toggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
