'use client';

import { useEffect, useState } from "react";

const TimeOfDay = ({ label, expanded }) => {

    const [isExpanded, setIsExpanded] = useState(expanded);
    const [gridState, setGridState] = useState(isExpanded ? 'grid transition-all grid-rows-[1fr]' : 'grid transition-all grid-rows-[0fr]');

    const handleClick = () => {
        setIsExpanded(!isExpanded);
        setGridState(!isExpanded ? 'grid transition-all grid-rows-[1fr]' : 'grid transition-all grid-rows-[0fr]')
    };

    return (
        <div className="time_of_day">
            <button type="button" className="flex-1 dashboard_btn text-sm sm:text-base" onClick={handleClick}>
                {label} {isExpanded ? '▴' : '▾'}
            </button>

            <div className={gridState}>
                <div className="grid_dropdown">
                    <div className="flex justify-start relative">

                        <div className="h-6 flex items-center">
                            <input type="checkbox" className="grid_checkbox" id="Breakfast"></input>
                        </div>
                        <div className="text-sm leading-6 ml-3">
                            <label for="Breakfast" className="text-white font-500"></label>
                        </div>

                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" className="grid_checkbox"></input>
                        <p className="text-primary-text font-light tracking-wide text-xs font-karla sm:text-sm">Breakfast</p>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" className="grid_checkbox"></input>
                        <p className="text-primary-text font-light tracking-wide text-xs font-karla sm:text-sm">Breakfast</p>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" className="grid_checkbox"></input>
                        <p className="text-primary-text font-light tracking-wide text-xs font-karla sm:text-sm">Breakfast</p>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" className="grid_checkbox"></input>
                        <p className="text-primary-text font-light tracking-wide text-xs font-karla sm:text-sm">Breakfast</p>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" className="grid_checkbox"></input>
                        <p className="text-primary-text font-light tracking-wide text-xs font-karla sm:text-sm">Breakfast</p>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" className="grid_checkbox"></input>
                        <p className="text-primary-text font-light tracking-wide text-xs font-karla sm:text-sm">Breakfast</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TimeOfDay