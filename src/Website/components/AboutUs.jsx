import React from 'react';
import illustration from '../assets/illustration.webp';
import { ABOUT_DATA } from '../helpers/Paragraph';
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title' 
import Wrapper from "../components/Wrapper"
import './AboutUs.scss';

function AboutUs() {

    const style = {
        width: '50%',
    }
    return (
        <Wrapper al={null} js={null} dir="column">
            <Title>About Us</Title>
            <div className="about__us__box">
                <div className="about__us__img" style={style}>
                    <img src={illustration} alt="about_us"/>
                </div>
                <div style={style}>
                    <Paragraph data={ABOUT_DATA} style={{marginBottom: '2rem'}}/>
                    <Button>I am clicking here now</Button>
                </div>
            </div>
        </Wrapper>
    )
}

export default AboutUs
