import React, { useState } from 'react'
import das from '../assets/das.webp'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Modal from 'react-modal';
import './MainHeader.scss'

function MainHeader() {

    const [showNav, setShowNav] = useState(false);

    const Navigation = () => {
        return (
            <nav className="main__navigation">
               
                <ul>
                    <li className="nav__link">
                        <Link to="/" className="link">Courses</Link>
                    </li>
                    <li className="nav__link">
                        <Link to="/business-market" className="link">Business Marketing</Link>
                    </li>
                    <li className="nav__link">
                        <Link to="/" className="link">Educational Institutions</Link>
                    </li>
                    <li className="nav__link">
                        <Link to="/" className="link">Business & Start up</Link>
                    </li>
                    <li className={"nav__link login"}>
                        <Link to="/" className="link">Login</Link>
                    </li>
                </ul>
            </nav>
        )
    }
    return (
        <>
        <header className="main__header">
            <div className="main__header__logo">
                <img src={das} alt="main__logo" />
            </div>
            <Navigation />
            <FaBars className="menu__bar" onClick={()=>setShowNav(true)}/>
        </header>
            <Modal
                isOpen={showNav}
                contentLabel="Navigation"
                overlayClassName={{base : 'nav_overlay', afterOpen : 'nav_overlay_after_open', beforeClose : 'nav_overlay_before_close'}}
                className={{base : 'nav_content', afterOpen : 'nav_content_after_open', beforeClose : 'nav_content_before_close'}}
                closeTimeoutMS={300}
            ><nav className="res__navigation">
                {showNav && <FaTimes className="close__btn" onClick={() => setShowNav(false)} />}
                <ul>
                    <li className="nav__link">
                        <Link to="/" className="res__link">Courses</Link>
                    </li>
                    <li className="nav__link">
                        <Link to="/" className="res__link">Educational Institutions</Link>
                    </li>
                    <li className="nav__link">
                        <Link to="/" className="res__link">Business & Start up</Link>
                    </li>
                    <li className={"nav__link login"}>
                        <Link to="/" className="res__link">Login</Link>
                    </li>
                </ul>
            </nav></Modal>
        </>
    )
}

export default MainHeader
