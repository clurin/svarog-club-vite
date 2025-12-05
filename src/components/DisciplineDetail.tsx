import { useParams } from "react-router-dom";
import { disciplines } from "../data/disciplines";
import type { Discipline } from "../models/Models";
import { useState } from "react";
import ContactForm from "./ContactForm";

const DisciplineDetail = () => {
    const { name } = useParams()
    const discipline: Discipline | undefined = disciplines.find(d => d.name === name)
    const paragraphs = discipline?.discription.split('. ') || []
    const [open, setOpen] = useState(false);


    return (
        <div className="relative w-full">
            <img
                src={discipline?.image_main}
                alt={discipline?.title}
                className="absolute inset-0 w-full h-[630px] object-cover"
            />
            <div className="relative flex flex-col items-center text-center px-4">
                <img
                    src="/images/intro/logo-image.png"
                    alt="Logo"
                    className="mt-10 opacity-[0.85]"
                    width={150}
                    height={150}
                />
                <p className="mt-7 text-3xl md:text-4xl text-white">
                    <span className="text-2xl block">Спортивный клуб</span> Сварог
                </p>
                <h1 className="mt-7 text-4xl text-nowrap text-main-red">{discipline?.title}</h1>
                <p className="mt-4">Тренировки для детей <br /> и взрослых</p>
                <p className="text-3xl md:text-4xl text-center mt-6 text-white bg-black p-2 md:p-5">Пробное занятие бесплатно</p>
                <button
                    onClick={() => setOpen(true)}
                    className="mt-5 w-[70%] max-w-xs p-3 text-xl md:text-2xl text-center
                     bg-red-700 text-white shadow-md hover:text-main-red hover:bg-main-yellow 
                     transition-colors"
                >
                    Записаться на тренировку
                </button>

                {open && <ContactForm onClose={() => setOpen(false)} />}

                <div className="mt-15 flex flex-col gap-5 items-center">
                    <div className="text-xl text-left md:w-[70%] flex flex-col gap-4">
                        {paragraphs?.map((text, i) => (
                            <p key={i}>{text.trim()}.</p>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center mt-4">
                        <img
                            src={discipline?.image_1}
                            alt={discipline?.title}
                            className="w-[90%] md:w-[40%] object-cover shadow-lg shadow-neutral-500" />
                        <img
                            src={discipline?.image_2}
                            alt={discipline?.title}
                            className="w-[90%] md:w-[40%] object-cover shadow-lg shadow-neutral-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisciplineDetail;
