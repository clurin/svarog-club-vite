import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/")} className='flex items-center justify-center w-full h-24 px-10 bg-neutral-800'>
            <p className='text-main-red text-3xl text-shadow-md text-shadow-red-700'>СВАРОГ</p>
        </div>
    )
}

export default Header