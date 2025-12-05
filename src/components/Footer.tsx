import { FaWhatsapp, FaTelegramPlane, FaVk } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="mt-10 text-white pb-8 bg-back-color">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-around md:items-start">
                <div>
                    <p className='text-2xl md:text-3xl'>АДРЕСА</p>
                    <span className='text-base md:text-xl tracking-tighter'>
                        Купчино, ул. Будапештская 97к2 <br />
                        Купчино, ул. Димитрова 9к3, <span className="whitespace-nowrap">школа 364</span> <br />
                        Шушары, ул. Окуловская 18к1 <br />
                        Шушары, ул. Первомайская 30, <span className="whitespace-nowrap">школа 93</span>
                    </span>
                </div>
                <div className=''>
                    <p className="pt-5 md:pt-0 text-2xl md:text-3xl">Цены на абонемент</p>
                    <dl className="max-[360px]:text-sm">
                        <div className="flex justify-between">
                            <dt>Пробное занятие</dt>
                            <dd>Бесплатно</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt>Разовое занятие</dt>
                            <dd className='text-nowrap'>800.00 <span >руб.</span></dd>
                        </div>
                        <div className="flex justify-between">
                            <dt>4 занятия в месяц</dt>
                            <dd className='text-nowrap'>3 000.00 <span >руб.</span></dd>
                        </div>
                        <div className="flex justify-between">
                            <dt>6 занятий в месяц</dt>
                            <dd className='text-nowrap'>4 000.00 <span >руб.</span></dd>
                        </div>
                        <div className="flex justify-between">
                            <dt>8 занятий в месяц</dt>
                            <dd className='text-nowrap'>5 000.00 <span >руб.</span></dd>
                        </div>
                        <div className="flex justify-between">
                            <dt>12 занятий в месяц</dt>
                            <dd className='text-nowrap'>6 000.00 <span >руб.</span></dd>
                        </div>
                    </dl>
                </div>
                <div className=''>
                    <p className='pt-5 md:pt-0 text-2xl md:text-3xl'>Контакты</p>
                    <a href="tel:+78129821049" className="hover:underline">
                        +7 (812) 982-10-49
                    </a>
                    <div className="flex gap-4 text-2xl">
                        <a href="https://wa.me/79650934512?text=Здравствуйте!%20Хочу%20записаться%20на%20тренировку"
                            target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-500 transition-colors">
                            <FaWhatsapp />
                        </a>
                        <a href="https://t.me/spbsvarog" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-blue-400 transition-colors">
                            <FaTelegramPlane />
                        </a>
                        <a href="https://vk.com/spb.sk_svarog" target="_blank" rel="noopener noreferrer" aria-label="VK" className="hover:text-blue-600 transition-colors">
                            <FaVk />
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-6 px-2 text-center text-xs text-gray-400 whitespace-wrap overflow-hidden">
                <span className="inline-block">&copy; {new Date().getFullYear()} АНО СК &quot;Сварог&quot;. Все права защищены.</span>{' '}
                <span className="inline-block">ИП: Пантелеева А.А.</span>{' '}
                <span className="inline-block">ИНН: 781601580661</span>{' '}
                <span className="inline-block">ИНН: 7816657805</span>
            </div>
        </footer>
    )
}

export default Footer
