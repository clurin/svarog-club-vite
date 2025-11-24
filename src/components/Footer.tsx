import { FaWhatsapp, FaTelegramPlane, FaVk } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="mt-10 text-white pb-8 bg-back-color">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-around items-start md:items-center">
                <div>
                    <p className='text-2xl md:text-3xl'>АДРЕСА</p>
                    <span className='text-base md:text-xl tracking-tighter'>
                        Купчино, ул. Будапештская 97к2 <br />
                        Купчино, ул. Димитрова 9к3, школа 364 <br />
                        Шушары, ул. Окуловская 18к1 <br />
                        Шушары, ул. Первомайская 30, школа 93
                    </span>
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

            <div className="pt-6 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} АНО СК &quot;Сварог&quot;. Все права защищены.
            </div>
        </footer>
    )
}

export default Footer
