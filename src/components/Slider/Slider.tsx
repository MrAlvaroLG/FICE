import React, { useState } from 'react';
import IconPrevious from '../../assets/icon-previous.svg';
import IconNext from '../../assets/icon-next.svg';
import data from './data.json';

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-20">
      <h1 className="text-3xl text-center font-bebas-neue mb-4">News</h1>
      <div className="overflow-hidden relative">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {data.map((item, index) => (
            <div key={index} className="min-w-full flex flex-col">
              <div className="w-full h-52 md:h-96">
                <img src={item.image.desktop} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <p className="text-center mt-2 font-montserrat text-xl">{item.name}</p>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          <img src={IconPrevious} alt="Previous" className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          <img src={IconNext} alt="Next" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}