import React from 'react'
import Wrapper from '../components/Wrapper'
import Title from '../components/Title'
import vision from '../assets/vision.webp'
import './Vision.scss'

function Vision() {
    return (
        <Wrapper dir="column">
            <Title>Our Vision</Title>
            <div className="vision__box">
                <div className="vision__img">
                    <img src={vision} alt="vision" />
                </div>

                <p className="vision">
                    Digitally Aid everyone through technology with continuous learning and support.
                </p>
            </div>
        </Wrapper>
    )
}

export default Vision
