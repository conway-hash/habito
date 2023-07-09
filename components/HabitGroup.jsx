'use client';

import HabitBox from '@components/HabitBox'
import { useEffect, useState } from "react";

const HabitGroup = ({ label, expanded, toDos }) => {

    const [isExpanded, setIsExpanded] = useState(expanded);
    const [gridState, setGridState] = useState(isExpanded ? 'grid transition-all grid-rows-[1fr]' : 'grid transition-all grid-rows-[0fr]');
    const [dropDownState, setDropDownState] = useState(isExpanded ? 'grid_dropdown py-1' : 'grid_dropdown py-0');

    const handleClick = () => {
        setIsExpanded(!isExpanded);
        setGridState(!isExpanded ? 'grid transition-all grid-rows-[1fr]' : 'grid transition-all grid-rows-[0fr]')
        setDropDownState(!isExpanded ? 'grid_dropdown py-1' : 'grid_dropdown py-0');
    };

    return (
        <div className="time_of_day">
            <button type="button" className="flex-1 dashboard_btn text-sm sm:text-base" onClick={handleClick}>
                {label} {isExpanded ? '▴' : '▾'}
            </button>

            <div className={gridState}>
                <div className={dropDownState}>
                    {toDos.map((toDo) => (
                        <HabitBox name={toDo.name} desc={toDo.desc} key={toDo.key} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default HabitGroup