import { FaTelegramPlane, FaVk, FaWhatsapp } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-2.5 items-center justify-center w-full h-24 px-10 bg-neutral-800'>
            <p onClick={() => navigate('/')}
                className='text-main-red text-3xl md:text-3xl text-shadow-md text-shadow-red-700'>СВАРОГ</p>
            <div className="flex gap-10">
                <a href="tel:+78129821049" className="hover:underline text-2xl text-nowrap">
                    +7 (812) 982-10-49
                </a>
                <div className="gap-4 text-2xl hidden md:flex">
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
    )
}

export default Header