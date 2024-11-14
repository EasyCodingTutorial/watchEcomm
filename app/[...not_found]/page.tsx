import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
    title: "Page Not Found"
}


const NotFoundpage = () => {
    return (
        <div className={styles.NotFound}>
            <div className={styles.ImgBox}>
                <img src="/assets/notfound.png" alt="" />
            </div>

            <div className={styles.Content}>
                <p>Easy Luxury Watches</p>
                <h6>Where Are You Going? </h6>
                <h5>We Think You Forget Your Way?</h5>
                <div>
                    <Link href={'/'}>Back To Home</Link>
                    <Link href={'/'}>Shop Now</Link>
                </div>
            </div>


        </div>
    )
}

export default NotFoundpage