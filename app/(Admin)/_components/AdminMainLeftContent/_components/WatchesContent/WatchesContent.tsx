import React from 'react'

import styles from './WatchesContent.module.css'
import Link from 'next/link'

interface WatchesContentProps {
    ImgUrl: string,
    ImgAlt?: string,
    WatchTitle: string,
    Date?: Date,
    Comments: string,
    Id?: string,
    Path?: string,
}

export const WatchesContent = (
    {
        ImgUrl,
        ImgAlt,
        WatchTitle,
        Date,
        Comments,
        Id,
        Path
    }: WatchesContentProps
) => {
    return (
        <Link href={`${Path}`} className={styles.WatchContent} >
            <div className={styles.First}>
                <img src={ImgUrl} alt={ImgAlt} />
                <div className={styles.Content}>
                    <p className={styles.WatchTitle}>{WatchTitle}</p>
                    <p className={styles.Date}>{Date?.toString()}</p>
                </div>
            </div>

            <div className={styles.Last}>
                <h6>{Comments}</h6>
            </div>
        </Link>
    )
}
