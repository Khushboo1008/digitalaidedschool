import React from 'react'
import das from '../assets/das.png'
import {Link} from 'react-router-dom'
import './MainHeader.scss'

function MainHeader() {
    return (
        <header className="main__header">
            <div className="main__header__logo">
                <img src={das} alt="main__logo" />
            </div>
            <nav className="main__navigation">
                <ul>
                    <li className="nav__link">
                        <Link to="/" className="link">Courses</Link>
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
        </header>
    )
}

export default MainHeader
