import { useNavigate } from "react-router-dom"

const addresses = [
    { label: 'ул. Будапештская 97к2', path: '/gym/kupchino' },
    // { label: <>ул. Димитрова 9к3, <span className="whitespace-nowrap">школа 364</span></>, path: null },
    { label: 'ул. Окуловская 18к1', path: '/gym/shushari' },
    // { label: <>ул. Первомайская 30, <span className="whitespace-nowrap">школа 93</span></>, path: null },
]


const GymSelectButton = () => {
    const navigate = useNavigate()

    return (
        <div className="text-center mt-10">
            <h2 className="text-2xl md:text-3xl">Посмотреть фото зала</h2>

            <div className="p-5 flex flex-col gap-3 items-center">
                {addresses.map((address, index) => (
                    <button key={index}
                        className="cursor-pointer w-[99%] md:w-[50%] p-5
                         text-xl bg-red-700 border-2 border-white transform transition-transform duration-300 hover:-translate-y-0.5 shadow-lg shadow-neutral-600"
                        onClick={() => address.path && navigate(address.path)}
                        disabled={!address.path}>
                        {address.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default GymSelectButton
