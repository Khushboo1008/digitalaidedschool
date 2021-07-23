import styles from './Header.module.scss';
import Images from 'next/image'
import Link from 'next/link'
import logo from '../assets/das.webp'
import { FaAngleDown, FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react';
import Modal from 'react-modal'


Modal.setAppElement("body")

function Header() {

    const [showNav, setToggleNav] = useState(false)

    return (
        <header className={styles.header}>
                <figure className={styles.logo}>
                    <Images src={logo} width={200} height={100} objectFit="contain"/>
                </figure>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li><Link href="#"><a>Home</a></Link></li>
                        <li><Link href="#"><a>Courses</a></Link><FaAngleDown className={styles.arrow_down}/></li>
                        <li><Link href="#"><a>For School</a></Link></li>
                        <li><Link href="#"><a>For Business</a></Link></li>
                        <li><Link href="#"><a>About Us</a></Link></li>
                        <li><Link href="#"><a>Contact Us</a></Link></li>
                        <li><Link href="#"><a>Login</a></Link></li>
                        <li><Link href="#"><a>Book a free class</a></Link></li>
                    </ul>
            </nav>
            <Modal
                isOpen={showNav}
                contentLabel="Navigation"
                overlayClassName={{base : 'nav_overlay', afterOpen : 'nav_overlay_after_open', beforeClose : 'nav_overlay_before_close'}}
                className={{base : 'nav_content', afterOpen : 'nav_content_after_open', beforeClose : 'nav_content_before_close'}}
                closeTimeoutMS={300}
            ><nav className={styles.mobile_navigation}>
                {showNav && <FaTimes className={styles.close_btn} onClick={() => setToggleNav(false)} />}
                <ul>
                    <li><Link href="#"><a>Home</a></Link></li>
                        <li><Link href="#"><a>Courses</a></Link><FaAngleDown className={styles.arrow_down_white}/></li>
                        <li><Link href="#"><a>For School</a></Link></li>
                        <li><Link href="#"><a>For Business</a></Link></li>
                        <li><Link href="#"><a>About Us</a></Link></li>
                        <li><Link href="#"><a>Contact Us</a></Link></li>
                        <li><Link href="#"><a>Login</a></Link></li>
                        <li><Link href="#"><a>Book a free class</a></Link></li>
                </ul>
            </nav></Modal>
            <FaBars className={styles.menu} onClick={() => setToggleNav(true)}/>
        </header>
    )
}

export default Header
