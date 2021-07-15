import React, { useRef } from 'react';
import Slider from 'react-slick';
import {COURSES} from '../helpers/Courses'
import { SLICK_SETTING } from '../helpers/SlickSetting';
import './Courses.scss';



function Courses() {
    const sliderRef = useRef()
    return (
        <div className="courses__box">
            <h1 className="courses__title">COURSES OFFERED</h1>
            <Slider ref={sliderRef} {...SLICK_SETTING} style={{padding: "3rem 0"}}>
                {COURSES().map((item, index) => {
                    return (
                        <div className="course_img">
                            <img src={item.src} alt="course_image"/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Courses
