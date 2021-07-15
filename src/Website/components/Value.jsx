import React from 'react'
import Wrapper from '../components/Wrapper'
import Title from '../components/Title'
import Slider from 'react-slick';
import img2 from '../assets/Value2.webp'
import img3 from '../assets/Value3.webp'
import img4 from '../assets/Value4.webp'
import img5 from '../assets/Value5.webp'
import { SLICK_SETTING } from '../helpers/SlickSetting';
import './Value.scss'


    
function Value() {
    return (
        <Wrapper dir="column">
            <Title>Value</Title>
            <Slider {...SLICK_SETTING}  className="value__slider">
                <div className="value__img">
                    <img src={img2} alt="value" />
                </div>
                <div className="value__img">
                    <img src={img3} alt="value"/>
                </div>
                <div className="value__img">
                    <img src={img4} alt="value" />
                </div>
                <div className="value__img">
                    <img src={img5} alt="value" />
                </div>
            </Slider>
        </Wrapper>
    )
}

export default Value
