import React from 'react';
import Courses from '../components/Courses'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { COURSE } from '../helpers/Paragraph'
import Wrapper from '../components/Wrapper'
import './CoursesOffered.scss';



function CoursesOffered() {


    return (
        <Wrapper className="course__wrapper">
            <div className="courses__container" >
                <Courses />
            </div>
            <div className="courses__desc">
                <Paragraph data={COURSE} style={{marginBottom : '2rem'}}/>
                <Button to="/admission"> Study now! Pay later</Button>
            </div>
        </Wrapper>
    )
}

export default CoursesOffered
