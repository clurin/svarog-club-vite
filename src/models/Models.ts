
export interface ScheduleItem {
    ageGroup: string
    days: string[]
    time: string
    price: number
}

export interface KarateScheduleItem {
    position: number
    ageGroup: string
    schedule: Array<{
        days: string[]
        time: string
    }>
    price: number
    location: 'kupchino' | 'shushari'
}

export interface Coach {
    name: string
    image: string
    disciplines: string[]
    achievements: string[]
}

export interface Discipline {
    position: number
    name: string
    title: string
    discription: string
    image_main: string,
    image_1: string,
    image_2: string
}