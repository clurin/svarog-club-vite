import { useState, useRef, useEffect } from "react"
import IMask from "imask"

interface ContactFormProps {
    onClose: () => void
}

const ContactForm = ({ onClose }: ContactFormProps) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const phoneRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (phoneRef.current) {
            IMask(phoneRef.current, {
                mask: "+{7} (000) 000-00-00",
                prepare: (str, mask) => {
                    if (mask.value.length === 0 && str === "8") return "7"
                    return str
                }
            })
        }
    }, [])

    const normalizeName = (value: string) => {
        const trimmed = value.trim()
        if (!trimmed) return ""
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase()
    }

    const validatePhone = (value: string) => {
        const digits = value.replace(/\D/g, "")
        if (digits.length < 11) return "Введите полный номер телефона (11 цифр)"
        if (digits.length > 11) return "Слишком много цифр в номере"
        if (!digits.startsWith("7")) return "Номер должен начинаться с +7"
        return ""
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const normalizedName = normalizeName(name)
        setName(normalizedName)

        const digits = phone.replace(/\D/g, "")
        const normalizedPhone = `+${digits}`

        const phoneError = validatePhone(phone)
        if (phoneError) {
            setError(phoneError)
            return
        }

        setLoading(true)
        setSuccess("")
        setError("")

        const formData = new FormData()
        formData.append("name", normalizedName)
        formData.append("phone", normalizedPhone)

        try {
            const res = await fetch("https://svarog-club.ru/send.php", {
                method: "POST",
                body: formData,
            })

            const data = await res.json()

            if (data.status === "ok") {
                setSuccess(data.message || "Заявка отправлена!")
                setName("")
                setPhone("")
            } else {
                setError(data.message || "Ошибка отправки")
            }
        } catch (err) {
            setError("Произошла ошибка. Попробуй позже: " + err)
        } finally {
            setLoading(false)
        }

    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-neutral-800 p-6 rounded-xl w-[90%] max-w-md shadow-xl relative">
                <button
                    onClick={onClose}
                    className="absolute right-3 top-2 text-2xl hover:text-red-600"
                >
                    ×
                </button>

                <h2 className="text-2xl font-semibold text-center mb-4">
                    Запись на тренировку
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            maxLength={20}
                            value={name}
                            onChange={(e) => {
                                const value = e.target.value.replace(/[^а-яА-Яa-zA-Z\s]/g, "")
                                setName(value)
                            }}
                            required
                            className={`border p-3 rounded-md ${error && error.toLowerCase().includes("имя") ? "border-red-500" : ""}`}
                        />

                        {error && error.toLowerCase().includes("имя") && (
                            <p className="text-red-500 text-sm mt-1">{error}</p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <input
                            type="tel"
                            placeholder="+7 (___) ___-__-__"
                            ref={phoneRef}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className={`border p-3 rounded-md ${error && error.toLowerCase().includes("номер") ? "border-red-500" : ""
                                }`}
                        />
                        {error && error.toLowerCase().includes("номер") && (
                            <p className="text-red-500 text-sm mt-1">{error}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-red-700 text-white py-3 rounded-md hover:bg-red-600 transition"
                    >
                        {loading ? "Отправка..." : "Отправить"}
                    </button>
                </form>

                {success && (
                    <p className="text-green-500 text-center mt-3">{success}</p>
                )}
            </div>
        </div>
    )
}

export default ContactForm
