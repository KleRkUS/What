import React from "react";
import { IFilterIconParams } from "./types";

const DownIcon = ({ isSelected }: IFilterIconParams): JSX.Element => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M12 18C11.4477 18 11 17.5523 11 17L11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5L13 17C13 17.5523 12.5523 18 12 18Z" 
            fill={`${isSelected ? "#f8f8f8" : "#203685"}`}
        />
        <path 
            d="M15 16L12 19L9 16" 
            stroke={`${isSelected ? "#f8f8f8" : "#203685"}`} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </svg>
);

export default DownIcon;