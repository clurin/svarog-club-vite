import { disciplines } from '../data/disciplines'

const Disciplines = () => {
    return (
        <div className='mt-19 mx-12 max-md:mx-8'>
            <p className='text-3xl text-center'>Наши <br /> дисциплины</p>
            <div className='flex flex-wrap justify-center gap-6 mt-9 md:flex-nowrap'>
                {disciplines.map((discipline) => (
                    <div key={discipline.position} className='relative border-2 border-solid border-white'>
                        <p className='absolute inset-0 text-2xl flex justify-center items-center'>{discipline.title}</p>
                        <img
                            width={370}
                            height={200}
                            src={discipline.image}
                            alt={discipline.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Disciplines