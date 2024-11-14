import React from 'react'

import styles from './MainBg.module.css'

interface MainBgProps {
    ImgUrl: string,
    ImgAlt?: string,
    h6Text: string,
    h5Text: string,
}


export const MainBg = (
    {
        ImgUrl,
        ImgAlt,
        h6Text,
        h5Text
    }: MainBgProps
) => {
    return (
        <div className={styles.MainBg}>
            <div>
                <div>
                    <img src={ImgUrl} alt={ImgAlt} />
                </div>
                <div className={styles.Overlay}></div>
            </div>
            <div className={styles.Content}>
                <h6>{h6Text}</h6>
                <h5>{h5Text}</h5>
            </div>
        </div>
    )
}
