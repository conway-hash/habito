'use client';

import { useState } from "react";


const HabitBox = ({ name, desc }) => {

    const [isChecked, setIsChecked] = useState(false)
    const [contClassName, setContClassName] = useState("grid_checkbox_container")

    const handleChange = () => {
        setIsChecked(!isChecked)
        setContClassName(!isChecked ? "grid_checkbox_container grid_checkbox_container_animation_good" : "grid_checkbox_container grid_checkbox_container_animation_bad")
    }

    return (
        <div className={contClassName}>
            <input type="checkbox" onChange={handleChange} className="grid_checkbox" checked={isChecked} />
            <div className="flex flex-col">
                <p className="text-primary-text font-light tracking-wide text-sm font-karla">
                    {name}
                </p>
                <p className="font-light text-gray-400 tracking-wide text-xs font-karla sm:text-sm">{desc}</p>
            </div>
        </div>
    );

}

export default HabitBox