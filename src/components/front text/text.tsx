import React from 'react';
import './frontText.css';

export function FrontText() {
    return (
        <div className="parallax-container">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center w-4/5">
                <div className="text-5xl sm:text-7xl md:text-9xl text-primary font-bebas-neue">FICE</div>
                <div className="text-2xl sm:text-4xl md:text-6xl text-primary mt-4 font-bebas-neue">
                    Facultad de Informática y Ciencias Exactas
                </div>
            </div>
        </div>
    );
}
