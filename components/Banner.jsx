import styles from './Banner.module.scss';
import Slider from 'react-slick';
import { SETTINGS } from '../helpers/Carousel';
import Image from 'next/image'
import Link from 'next/link'
import banner_image from '../assets/banner_image.jpg'


function Banner() {
    return (
        <article className={styles.container}>
            <Slider {...SETTINGS(true,true, 1, 1)} className={styles.banner_slider}>
                <>
                <section className={styles.slider_box}>
                    <div className={styles.banner_info}>
                        <h1 className={styles.title}>Advanced Certificate in <br /> Digital Marketing & Communication</h1>
                        <p className={styles.desc}>
                            Become a Digital Marketing expert by specialising <br /> in Social Media and Content Marketing, Branding, <br /> Marketing Analytics and Public Relations.
                            <br/>
                            <br/>
                            Start your digital Marketing Journey at <strong>Rs 3,198</strong> per month
                        </p>
                        <Link href=""><a className={styles.banner_btn}>Study Now! Pay Later</a></Link>
                    </div>
                    <div className={styles.content_image}>
                        <Image src={banner_image} alt="banner_img" objectFit="contain"/>
                    </div>
                    </section>
                </>
                <>
                <section className={styles.slider_box}>
                    <div className={styles.banner_info}>
                        <h1 className={styles.title}>Advanced Certificate in <br /> Digital Marketing & Communication</h1>
                        <p className={styles.desc}>
                            Become a Digital Marketing expert by specialising <br /> in Social Media and Content Marketing, Branding, <br /> Marketing Analytics and Public Relations.
                            <br/>
                            <br/>
                            Start your digital Marketing Journey at <strong>Rs 3,198</strong> per month
                        </p>
                        <Link href=""><a className={styles.banner_btn}>Study Now! Pay Later</a></Link>
                    </div>
                    <div className={styles.content_image}>
                        <Image src={banner_image} alt="banner_img" objectFit="contain" placeholder="blur"/>
                    </div>
                    </section>
                </>
                <>
                <section className={styles.slider_box}>
                    <div className={styles.banner_info}>
                        <h1 className={styles.title}>Advanced Certificate in <br /> Digital Marketing & Communication</h1>
                        <p className={styles.desc}>
                            Become a Digital Marketing expert by specialising <br /> in Social Media and Content Marketing, Branding, <br /> Marketing Analytics and Public Relations.
                            <br/>
                            <br/>
                            Start your digital Marketing Journey at <strong>Rs 3,198</strong> per month
                        </p>
                        <Link href=""><a className={styles.banner_btn}>Study Now! Pay Later</a></Link>
                    </div>
                    <div className={styles.content_image}>
                        <Image src={banner_image} alt="banner_img" objectFit="contain"/>
                    </div>
                    </section>
                </>
            </Slider>
        </article>
    )
}

export default Banner
