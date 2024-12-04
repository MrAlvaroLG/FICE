import React from 'react';

export function Intro() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start m-5 md:mx-20">
            <img src="../src/assets/25.jpg" className="w-3/4 md:w-1/3 h-auto mb-5 md:mb-0 md:mr-5" />
            <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-3">Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci praesentium sit officiis libero, dolorum sed beatae, sunt ab vel, repellendus optio sint doloribus ratione possimus aliquid odio alias velit.</p>
            </div>
        </div>
    );
}