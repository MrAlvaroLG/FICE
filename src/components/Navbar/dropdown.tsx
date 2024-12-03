import React from 'react';

interface DropdownProps {
    items: string[];
    shiftLeft?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ items, shiftLeft }) => {
    const isMobileView = window.innerWidth < 768;

    return (
        <div
            className={`absolute font-bebas-neue shadow-xl ${isMobileView ? 'flex flex-col relative mx-2 shadow-xl border-2 rounded-md top-0' : 'grid grid-cols-2 w-96 top-7' } ${shiftLeft ? 'right-0' : ''} rounded-md shadow-lg bg-secondary border border-primary transition-opacity duration-300`}
            style={{ zIndex: 2000}}
        >
            {items.map((item, index) => (
                <a
                    key={index}
                    href="#"
                    className={`block rounded-md w-50% py-2 text-lg m-1 text-primary hover:bg-primary hover:text-secondary transition-colors duration-300 ${isMobileView ? 'w-full' : ''}`}
                >
                    <span className="ml-2">{item}</span>
                </a>
            ))}
        </div>
    );
};

export default Dropdown;