import React from 'react';
import { useState,useEffect } from 'react';

//third party imports
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

//in-built imports
import { CarouselData } from './carouselData'


export default function Carousel() {

    const [current, setCurrent] = useState(0)

    if (!Array.isArray(CarouselData) || CarouselData.length <= 0) { 
        return null;
    }
    
    const next = () => { 
        setCurrent(current === CarouselData.length - 1 ? 0 : current+1)
    }
    const prev = () => { 
        setCurrent(current === 0 ? CarouselData.length -1 : current-1)
    }
    

    return <section className='carousel-container'>
        <FaArrowAltCircleLeft className='carousel-left-arrow' onClick={prev}/>
        <FaArrowAltCircleRight className='carousel-right-arrow' onClick={next}/>
        {
            CarouselData.map((data, index) => { 
                return (
                    <div className={index === current ? 'carousel active' : 'carousel'} key={index}> 
                        {index === current && (
                            <img src={data.img } alt="food-img-slider" key={data.img} className='carousel-img'/>
                        )}
                    </div>
                )
            })
        }
  </section>;
}
