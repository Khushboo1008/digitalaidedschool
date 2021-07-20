import React from 'react';
import Courses from '../components/Courses'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { COURSE } from '../helpers/Paragraph'
import Wrapper from '../components/Wrapper'
import { useRouteMatch } from 'react-router-dom';
import Title from './Title';
import './CoursesOffered.scss';



function CoursesOffered() {

    const { path } = useRouteMatch()
    

    return (
        <Wrapper className={`course__wrapper ${path === "/digital-marketing" && "active"}`}>
            {path !== '/digital-marketing' ? < div className="courses__container" >
            <Courses />
            </div> : <Title>Digital Marketing</Title>}
            <div className="courses__desc">
                <Paragraph data={COURSE} style={{marginBottom : '2rem'}}/>
                {path !== '/digital-marketing' && <Button to="/admission"> Study now! Pay later</Button>}
            </div>
        </Wrapper>
    )
}

export default CoursesOffered
