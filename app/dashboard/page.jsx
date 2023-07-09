'use client';

import HabitGroup from '@components/HabitGroup'
import { useEffect, useState } from "react";

const Dashboard = () => {

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const [currentTime, setCurrentTime] = useState()
    const [currentDate, setCurrentDate] = useState()

    useEffect(() => {
        const date = new Date()
        let hours = addZero(date.getHours());
        let minutes = addZero(date.getMinutes());
        let seconds = addZero(date.getSeconds());

        let day = date.getDate()
        let dayOfWeek = daysOfWeek[date.getDay() % 7]
        let month = monthsOfYear[date.getMonth()]
        let year = date.getFullYear();

        const timer = setTimeout(() => {
            setCurrentTime(`${hours}:${minutes}:${seconds}`)
            setCurrentDate(`${dayOfWeek} ${day}.${month}.${year}`)
        }, 1000);

        return () => clearTimeout(timer);
    }, [currentTime])

    const toDos = [
        { name: 'Breakfast', time: 'Morning', desc: ' Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty', key: 1 },
        { name: 'Excercise', time: 'Morning', desc: 'Musis ist cvicit, aby si bol svalnaty', key: 2 },
        { name: 'Vitamins', time: 'Morning', desc: 'Musis zobrat vitamin, aby si bol zdravy', key: 3 }, { name: 'Breakfast', time: 'Morning', desc: ' Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty', key: 4 },
        { name: 'Excercise', time: 'Morning', desc: 'Musis ist cvicit, aby si bol svalnaty', key: 5 },
        { name: 'Vitamins', time: 'Morning', desc: 'Musis zobrat vitamin, aby si bol zdravy', key: 6 }, { name: 'Breakfast', time: 'Morning', desc: ' Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty', key: 7 },
        { name: 'Excercise', time: 'Morning', desc: 'Musis ist cvicit, aby si bol svalnaty', key: 8 },
        { name: 'Vitamins', time: 'Morning', desc: 'Musis zobrat vitamin, aby si bol zdravy', key: 9 }, { name: 'Breakfast', time: 'Morning', desc: ' Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty', key: 10 },
        { name: 'Excercise', time: 'Morning', desc: 'Musis ist cvicit, aby si bol svalnaty', key: 11 },
        { name: 'Vitamins', time: 'Morning', desc: 'Musis zobrat vitamin, aby si bol zdravy', key: 12 }, { name: 'Breakfast', time: 'Morning', desc: ' Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty Musis ist cvicit, aby si bol svalnaty', key: 13 },
        { name: 'Excercise', time: 'Morning', desc: 'Musis ist cvicit, aby si bol svalnaty', key: 14 },
        { name: 'Vitamins', time: 'Morning', desc: 'Musis zobrat vitamin, aby si bol zdravy', key: 15 }
    ]


    return (
        <section className="w-full flex-center mt-16 sm:mt-[6rem] gap-2 flex-col">
            <div className="sign_in_cont w-full sm:p-4">
                <h2 className="text-primary-text text-center font-karla text-4xl sm:text-5xl">{currentTime}</h2>
                <h2 className="text-primary-text  text-center font-karla">{currentDate}</h2>
            </div>
            <div className="sign_in_cont w-full p-4 flex flex-col gap-4">
                <div className="flex gap-4 flex-wrap">
                    <button type="button" className="flex-1 dashboard_btn text-base sm:text-lg">Uncompleted</button>
                    <div className="hidden sm:block bg-primary-text w-[1px]" />
                    <button type="button" className="flex-1 dashboard_btn text-base sm:text-lg">Completed</button>
                    <div className="hidden sm:block bg-primary-text w-[1px]" />
                    <button type="button" className="flex-1 dashboard_btn text-base sm:text-lg">All</button>
                </div>
                <hr />
                <div className="">

                    <HabitGroup label='Morning' expanded={true} toDos={toDos} />

                    <HabitGroup label='Afternoon' expanded={false} toDos={toDos} />

                    <HabitGroup label='Evening' expanded={false} toDos={toDos} />

                </div>
            </div>
        </section>
    )
}

export default Dashboard