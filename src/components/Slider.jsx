import { useState } from "react";
import nextArrow from '../assets/icon-next.svg';
import prevArrow from '../assets/icon-previous.svg';
function Slider({ images }) {
    const [active, setActive] = useState(0);
    function handleNext() {
        setActive((active) => active == images.length - 1 ? 0 : active + 1);
    }

    function handlePrev() {
        setActive((active) => active == 0 ? images.length - 1 : active - 1);
    }

    return (
        <div className="relative -mt-20  w-full aspect-square">
            {images.map((image, index) => (
                <img
                    src={image}
                    className={`absolute transition-all duration-500 ease-in-out w-full left-0 top-0 ${index === active ? 'opacity-100' : 'opacity-0'}`}
                    key={index}
                />
            ))}

            <div className="controller w-full flex justify-between px-5 absolute top-1/2 z-20">
                <button className="bg-white w-10 h-10 flex justify-center items-center rounded-full" onClick={handlePrev}><img src={prevArrow} /></button>
                <button className="bg-white w-10 h-10 flex justify-center items-center rounded-full" onClick={handleNext}><img src={nextArrow} /></button>
            </div>
        </div>

    )
}

export default Slider;