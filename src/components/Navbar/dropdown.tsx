import React from 'react';

interface DropdownProps {
    items: string[];
    shiftLeft?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ items, shiftLeft }) => {
    const isMobileView = window.innerWidth < 768;

    const containerClasses = `
        absolute font-bebas-neue shadow-xl rounded-md bg-secondary border border-primary transition-opacity duration-300
        ${isMobileView ? 'flex flex-col relative mx-2 border-2 top-0' : 'grid grid-cols-2 w-128 top-7'}
        ${shiftLeft ? 'right-0' : ''}
    `;

    const itemClasses = `
        block rounded-md py-2 text-s m-1 text-primary hover:bg-primary hover:text-secondary transition-colors duration-300
        ${isMobileView ? 'w-full' : 'w-50%'}
    `;

    return (
        <div className={containerClasses} style={{ zIndex: 2000 }}>
            {items.map((item, index) => (
                <a key={index} href="#" className={itemClasses}>
                    <span className="ml-2">{item}</span>
                </a>
            ))}
        </div>
    );
};

export default Dropdown;