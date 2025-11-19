import { schedules } from "../data/schedules";
import { karateSchedule } from "../data/karateSchedule";
import { schoolSchedule } from "../data/schoolSchedule";
import type { KarateScheduleItem, ScheduleItem } from "../models/Models";

const ScheduleSection = ({ title, items }: { title: string, items: ScheduleItem[] }) => (
    <div>
        <p className="w-[55%] mx-auto md:mx-auto flex justify-center items-center h-8 md:w-[40%] md:h-10 md:text-2xl bg-main-orange [box-shadow:0_-4px_6px_-4px_rgba(0,0,0,0.3)]">
            {title}
        </p>
        <div className="w-full max-w-[95%] md:max-w-[50%] mx-auto [word-spacing:-5px]">
            {items.map((item) => (
                <div className="-mt-0.5 grid grid-cols-4 border-2 text-center border-solid border-black bg-white text-black text-base">
                    <div className="border-r-2 border-solid border-black p-2 text-center">{item.ageGroup} лет</div>
                    <div className="border-r-2 border-solid border-black p-2 text-center">{item.days.join(', ')}</div>
                    <div className="border-r-2 border-solid border-black p-2 text-center text-nowrap max-[360px]:text-wrap">{item.time}</div>
                    <div className="border-solid border-black p-2 text-center max-[360px]:text-wrap ">{item.price} <span className='text-sm'>Руб</span></div>
                </div>
            ))}
        </div>
    </div>
)

const KarateScheduleSection = ({ title, items }: { title: string, items: KarateScheduleItem[] }) => (
    <div>
        <p className="w-[55%] mx-auto md:mx-auto flex justify-center items-center h-8 md:w-[40%] md:h-10 md:text-2xl bg-main-orange [box-shadow:0_-4px_6px_-4px_rgba(0,0,0,0.3)]">
            {title}
        </p>

        <div className="w-full max-w-[95%] md:max-w-[50%] mx-auto overflow-x-auto">
            <table className="w-full table-fixed border-2 border-black text-base text-center bg-white text-black border-collapse">
                <colgroup>
                    <col className="w-1/4" />
                    <col className="w-1/4" />
                    <col className="w-1/4" />
                    <col className="w-1/4" />
                </colgroup>

                <tbody>
                    {items.map(item =>
                        item.schedule.map((s, idx) => (
                            <tr className="border-2 border-black">
                                {idx === 0 && (
                                    <td rowSpan={item.schedule.length} className="border-2 border-black p-2 align-middle">
                                        {item.ageGroup} лет
                                    </td>
                                )}
                                <td className="border-2 border-black p-2">{s.days.join(', ')}</td>
                                <td className="border-2 border-black p-2 text-nowrap  max-[360px]:text-wrap">{s.time}</td>
                                {idx === 0 && (
                                    <td rowSpan={item.schedule.length} className="border-2 border-black p-2 align-middle">
                                        {item.price} <span className="text-sm">Руб</span>
                                    </td>
                                )}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    </div>
)

const Schedule = () => {

    const kupchinoHandtohandSchedule = schedules.filter(item => item.discipline === 'hand-to-hand' && item.location === 'kupchino')
    const kupchinoKarateSchedule = karateSchedule.filter(item => item.location === 'kupchino')
    const kupchinoMMASchedule = schedules.filter(item => item.discipline === 'mma' && item.location === 'kupchino')
    const kupchinoKickboxingSchedule = schedules.filter(item => item.discipline === 'kickboxing' && item.location === 'kupchino')
    const kupchinoSchoolSchedule = schoolSchedule.filter(item => item.location === 'kupchino')

    const shushariHandtohandSchedule = schedules.filter(item => item.discipline === 'hand-to-hand' && item.location === 'shushari')
    const shushariMMASchedule = schedules.filter(item => item.discipline === 'mma' && item.location === 'shushari')
    const shushariTaekwondoSchedule = karateSchedule.filter(item => item.discipline === 'taekwondo' && item.location === 'shushari')
    const shushariKarateSchedule = schedules.filter(item => item.discipline === 'karate' && item.location === 'shushari')
    const shushariSchoolSchedule = schoolSchedule.filter(item => item.location === 'shushari')

    return (
        <div className='w-full mt-19 bg-black'>
            <p className='text-3xl text-center pt-5'>Расписание<br />занятий</p>
            <div className='bg-[#C3C4D1] pb-3'>
                <p className='w-full h-10 md:h-14 md:text-4xl mt-10 text-2xl flex justify-center items-center bg-kupchino'>
                    Купчино
                </p>
                <p className='w-full h-10 md:h-12 md:text-3xl text-2xl flex justify-center items-center bg-main-red'>
                    ул. Будапештская 97к2
                </p>
                <ScheduleSection title="Рукопашный бой" items={kupchinoHandtohandSchedule as ScheduleItem[]} />
                <KarateScheduleSection title="Каратэ" items={kupchinoKarateSchedule as KarateScheduleItem[]} />
                <ScheduleSection title="Кикбоксинг" items={kupchinoKickboxingSchedule as ScheduleItem[]} />
                <ScheduleSection title="ММА" items={kupchinoMMASchedule as ScheduleItem[]} />
                <p className='w-full h-10 md:h-12 md:text-3xl text-xl flex justify-center items-center bg-main-red tracking-tight'>
                    ул. Димитрова 9к3, школа 364
                </p>
                <ScheduleSection title="Рукопашный бой" items={kupchinoSchoolSchedule as ScheduleItem[]} />
            </div>
            <div className='bg-[#C3C4D1] pb-3'>
                <p className='w-full h-10 text-2xl  md:h-14 md:text-4xl flex justify-center items-center bg-shushari'>
                    Шушары
                </p>
                <p className='w-full h-10 text-2xl  md:h-12 md:text-3xl flex justify-center items-center bg-main-red'>
                    ул. Окуловская 18
                </p>
                <ScheduleSection title="Рукопашный бой" items={shushariHandtohandSchedule as ScheduleItem[]} />
                <KarateScheduleSection title="Тхэквондо" items={shushariTaekwondoSchedule as KarateScheduleItem[]} />
                <ScheduleSection title="ММА" items={shushariMMASchedule as ScheduleItem[]} />
                <ScheduleSection title="Каратэ" items={shushariKarateSchedule as ScheduleItem[]} />
                <p className='w-full h-10 text-xl md:h-12 md:text-3xl flex justify-center items-center bg-main-red tracking-tight'>
                    ул. Первомайская 30, школа 93
                </p>
                <ScheduleSection title="Каратэ" items={shushariSchoolSchedule as ScheduleItem[]} />
            </div>
        </div>
    )
}

export default Schedule