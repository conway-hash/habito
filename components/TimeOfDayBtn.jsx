'use client';

import { useState } from "react";

const TimeOfDayBtn = ({ label }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <button type="button" className="flex-1 dashboard_btn text-sm sm:text-base" onClick={handleClick}>
            {label} {isExpanded ? '▴' : '▾'}
        </button>
    );

}

export default TimeOfDayBtn