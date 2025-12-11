import { useParams } from "react-router-dom"
import { gyms } from "../../data/gyms"
import { useState } from "react"

const GymDetail = () => {
    const { name } = useParams()
    const gym = gyms.find(item => item.name === name)
    const [index, setIndex] = useState(0)
    const [startX, setStartX] = useState(0)

    if (!gym) {
        return (
            <div className="text-center mt-10 text-xl">
                Клуб не найден
            </div>
        )
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
        setStartX(e.touches[0].clientX)
    }

    const handleTouchEnd = (e: React.TouchEvent<HTMLImageElement>) => {
        const endX = e.changedTouches[0].clientX
        const diff = startX - endX

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                setIndex(prev => (prev + 1) % gym.photos.length)
            } else {
                setIndex(prev => (prev === 0 ? gym.photos.length - 1 : prev - 1))
            }
        }
    }

    return (
        <div className="md:w-[50%] h-full mx-auto p-5">
            <h1 className="md:text-3xl text-2xl font-bold text-center mb-2">
                {gym.address}
            </h1>
            <h2 className="text-center text-xl md:text-2xl">{gym.location}</h2>

            <div className="relative w-full overflow-hidden rounded-lg mt-6">
                <img
                    src={gym.photos[index]}
                    alt={`${gym.address} фото`}
                    className="w-full max-h-[350px] min-h-[350px] object-cover"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd} />

                <button onClick={() => setIndex(i => i === 0 ? gym.photos.length - 1 : i - 1)}
                    className="absolute left-2 top-1/2 w-7 h-15 -translate-y-1/2 bg-black/80 text-white rounded-full px-2"></button>
                <button onClick={() => setIndex(i => (i + 1) % gym.photos.length)}
                    className="absolute right-2 top-1/2 w-7 h-15 -translate-y-1/2 bg-black/80 text-white rounded-full px-2"></button>
            </div>

            <div className="flex justify-center gap-1 mt-4">
                {gym.photos.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${i === index ? "bg-red-600" : "bg-gray-600"}`} />
                ))}
            </div>
        </div>
    )
}
export default GymDetail
