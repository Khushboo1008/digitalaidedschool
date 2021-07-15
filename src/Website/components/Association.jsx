import React from 'react';
import Wrapper from '../components/Wrapper';
import Title from '../components/Title'
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import './Association.scss';

function Association() {
    return (
        <Wrapper dir="column">
            <Title>With our Association you will gain.</Title>
            <div className="outcome__box">
                <img src={img1} alt="outcomes" />
                <img src={img2} alt="outcomes" />
                <img src={img3} alt="outcomes" />
            </div>
        </Wrapper>
    )
}

export default Association
