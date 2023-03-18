import React, { useState } from 'react'
import './Slider.css'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';


const Slider = () => {
    const imgData = [
        {image: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",},
        {image: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",},
        {image: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",},
    ];


    const [currentSlide, setCurrentSlide] = useState(0);

    let count = 0;

    const prevSlide = () => {
        const imgLength = imgData.length;
        count = (currentSlide + imgLength - 1) % imgLength;
    };

    const nextSlide = () => {
        const imgLength = imgData.length;
        count = (currentSlide + imgLength + 1) % imgLength;
        setCurrentSlide(count);
    };
    

    return (
        <div className='slider'>
            <div className='containers' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {
                    imgData.map((item, index)=> {
                        return(
                            <div key={index}>
                            <img src={item.image} alt=''/>
                            </div>
                        )
                    })
                }
            </div>
            <div className='icons'>
                <div className="icon" onClick={prevSlide}>
                    <WestIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider