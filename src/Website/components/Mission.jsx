import React from 'react'
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import Paragraph from '../components/Paragraph'
import mision from '../assets/mision.webp'
import { MISION_DATA } from '../helpers/Paragraph'
import './Mission.scss'


const style = {
        width: '50%',
    }

function Mission() { 

    return (
        <Wrapper dir="column">
            <Title>Our Mission</Title>
            <div className="mission__box">
                <div className="mission__img" style={style}>
                    <img src={mision} alt="mission"/>
                </div>
                <div style={style}>
                    <Paragraph data={MISION_DATA} style={{marginBottom: '2rem'}}/>
                </div>
            </div>
        </Wrapper>
    )
}

export default Mission
