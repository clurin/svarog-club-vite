import { useState } from "react"
import ContactForm from "./ContactForm"

const Intro = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full h-[570px]">
            <img
                src="/images/intro/intro-mobile-image.png"
                alt="Intro"
                className="absolute inset-0 w-full h-full object-cover md:hidden"
            />
            <img
                src="/images/intro/intro-desktop-image.png"
                alt="Intro"
                className="absolute inset-0 w-full h-full object-cover hidden md:block"
            />

            <div className="flex flex-col items-center absolute top-12 left-1/2 -translate-x-1/2">
                <img
                    src="/images/intro/logo-image.png"
                    alt="Logo"
                    width={150}
                    height={150}
                />
                <h1 className="tracking-tight whitespace-nowrap pt-17 md:text-xl text-base text-main-red"
                    style={{ WebkitTextStroke: '0.3px gray' }}>
                    Одни мечтают, другие побеждают
                </h1>
                <p className="pt-3 text-3xl md:text-4xl whitespace-nowrap text-black">
                    КЛУБЫ ЕДИНОБОРСТВ
                </p>
                <p className="text-3xl md:text-4xl whitespace-nowrap text-white bg-main-red">
                    В Санкт Петербурге
                </p>
            </div>

            <button
                onClick={() => setOpen(true)}
                className="p-3 min-w-[200px] shadow-md shadow-neutral-500 max-[360px]:text-xl absolute bottom-5 left-1/2 -translate-x-1/2 hover:text-main-red transition-colors hover:bg-main-yellow bg-red-700 text-xl md:text-3xl text-center"
            >
                Записаться на тренировку
            </button>

            {open && <ContactForm onClose={() => setOpen(false)} />}
        </div>

    )
}

export default Intro