import React from 'react';
import Wrapper from '../components/Wrapper'
import Title from '../components/Title'
import Slider from 'react-slick';

import './Services.scss';
import { SERVICE_DATA } from '../helpers/Services';
import { SLICK_SETTING } from '../helpers/SlickSetting';


function Services() {

    return (
        <Wrapper dir="column">
            <Title>Our Services</Title>
            <Slider {...SLICK_SETTING}  className="service__slider">
                    {SERVICE_DATA.map((item, index) => {
                        return (
                            <div className="service__img" key={index}>
                                <img src={item.src} alt="service" />
                            </div>
                     )
                    })}
            </Slider>
        </Wrapper>
    )
}

export default Services
