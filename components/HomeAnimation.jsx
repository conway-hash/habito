'use client';

import { useState, useEffect } from "react"

const HomeAnimation = () => {
    const list = ['hobbies', 'work', 'routine', 'habits']

    const [listVal, setListVal] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setListVal((prev) => prev === list.length - 1 ? 0 : prev + 1)
        }, 1000);
        return () => clearTimeout(timer);
    }, [listVal]);

    return (
        <span className="green_bg_text text-primary-bg">{list[listVal]}</span>
    )
}

export default HomeAnimation