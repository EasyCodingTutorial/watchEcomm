"use client"
import React, { useEffect, useState } from 'react'

import styles from './SliderBg.module.css'
import { Button } from '@/Components/Button/Button'

export const SliderBg = () => {

    // Images Path
    const images = [
        'assets/Home/mainBg1.jpg',
        'assets/Home/mainBg2.jpg',
        'assets/Home/mainBg.jpg'
    ]

    const [currentImgIndex, setCurrentImgIndex] = useState(0)


    // Function To Go To the Next Image
    const nextImage = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }


    // Function To Go The Previous Image
    const prevImage = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    // Automatically Change The Image in Every 10 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 10000)  // 10000ms = 10sec

        return () => clearInterval(intervalId)

    }, [])




    return (
        <div className={styles.MainBg}>
            <div className={styles.ImageContainer}>
                <img src={images[currentImgIndex]} alt={"Background"} />
                <div className={styles.Overlay}></div>
            </div>
            <div className={styles.Content}>
                <h6>Easy Luxury Watches</h6>
                <h5>Watches That Define Your Time</h5>
                <Button
                    LinkText='View Watches'
                    LinkTo=''
                />
            </div>

            {/* Slider Controls */}
            <div className={styles.SliderControls}>
                <button onClick={prevImage} className={styles.PrevButton}>⬅️</button>
                <button onClick={nextImage} className={styles.NextButton}>➜</button>
            </div>

        </div>
    )
}
