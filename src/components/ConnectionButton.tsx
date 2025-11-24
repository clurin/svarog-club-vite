import { useState } from "react"
import { FaPhone, FaWhatsapp } from "react-icons/fa"
import { FaMessage, FaVk } from "react-icons/fa6"

const ConnectionButton = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {open && (
                <div className="flex flex-col gap-3 mb-3 items-center">
                    <a
                        href="tel:+78129821049"
                        className="p-3 bg-red-900/60 shadow-lg backdrop-blur-md rounded-full cursor-pointer"
                    >
                        <FaPhone size={22} color="black" />
                    </a>

                    <a
                        href="https://wa.me/79650934512"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-green-500 bg-red-900/60 shadow-lg backdrop-blur-md rounded-full cursor-pointer"
                    >
                        <FaWhatsapp size={22} />
                    </a>

                    <a
                        href="https://vk.com/spb.sk_svarog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-blue-500 bg-red-900/60 shadow-lg backdrop-blur-md rounded-full cursor-pointer"
                    >
                        <FaVk size={22} />
                    </a>
                </div>
            )}

            <button
                onClick={() => setOpen(!open)}
                className="p-5 bg-red-600 text-white rounded-full shadow-xl hover:bg-red-700 transition"
            >
                <FaMessage size={24} />
            </button>
        </div>
    )
}

export default ConnectionButton
