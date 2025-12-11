import { useNavigate } from 'react-router-dom'
import { disciplines } from '../data/disciplines'

const Disciplines = () => {
    const navigate = useNavigate()
    const goToDetails = (name: string) => {
        navigate(`/discipline/${name}`)
    }
    return (
        <div className='mt-19 mx-12 max-md:mx-8'>
            <p className='text-3xl text-center'>Наши <br /> дисциплины</p>
            <div className='flex flex-wrap justify-center gap-6 mt-9 md:flex-nowrap'>
                {disciplines.map((discipline) => (
                    <div onClick={() => goToDetails(discipline.name)}
                        key={discipline.position} className='cursor-pointer
                         transform transition-transform duration-300 hover:-translate-y-2
                    relative border-2 border-solid border-white shadow-lg shadow-neutral-600'>
                        <p className='absolute inset-0 text-2xl flex justify-center items-center'>{discipline.title}</p>
                        <img
                            width={370}
                            height={200}
                            src={discipline.image_main}
                            alt={discipline.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Disciplines