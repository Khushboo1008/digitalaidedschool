import React, { useEffect } from 'react'
import MainHeader from '../../components/MainHeader' 
import CoursesOffered from "../../components/CoursesOffered"
import AboutUs from "../../components/AboutUs"
import Association from "../../components/Association"
import Vision from "../../components/Vision"
import Mission from "../../components/Mission"
import Value from "../../components/Value"
import Tree from "../../components/Tree"
import Services from "../../components/Services"
import Footer from '../../components/Footer'
import './Market.scss'

function Hero() {

    
    return (
        <section className="market">
            <MainHeader />
            <CoursesOffered />
            <AboutUs />
            <Association />
            <Vision />
            <Mission />
            <Value />
            <Tree />
            <Services />
            <Footer/>
        </section>
    )
}

export default Hero
