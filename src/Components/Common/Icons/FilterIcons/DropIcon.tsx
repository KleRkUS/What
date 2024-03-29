import React from 'react';
import { IFilterIconParams } from './types';

const DropIcon = ({ isSelected = false }: IFilterIconParams): JSX.Element => (
    <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M12 4C16.0003 8.872 18 12.3384 18 14.4C18 15.1354 17.8448 15.8636 17.5433 16.543C17.2417 17.2225 16.7998 17.8398 16.2426 18.3598C15.6855 18.8798 15.0241 19.2923 14.2961 19.5737C13.5681 19.8552 12.7879 20 12 20C11.2121 20 10.4319 19.8552 9.7039 19.5737C8.97595 19.2923 8.31451 18.8798 7.75736 18.3598C7.20021 17.8398 6.75825 17.2225 6.45672 16.543C6.15519 15.8636 6 15.1354 6 14.4C6 12.3384 7.99971 8.872 12 4Z" 
            fill={`${isSelected ? "#f8f8f8" : "#203685"}`}
        />
    </svg>
);

export default DropIcon;