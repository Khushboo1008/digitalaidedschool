import React from 'react';
import Courses from '../components/Courses'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { COURSE } from '../helpers/Paragraph'
import Wrapper from '../components/Wrapper'
import './CoursesOffered.scss';


const style = {
    width : "50%"
}

function CoursesOffered() {


    return (
        <Wrapper js={null}>
            <div style={style}>
                <Courses />
            </div>
            <div style={style}>
                <Paragraph data={COURSE} style={{marginBottom : '2rem'}}/>
                <Button to="/admission"> Study now! Pay later</Button>
            </div>
        </Wrapper>
    )
}

export default CoursesOffered
