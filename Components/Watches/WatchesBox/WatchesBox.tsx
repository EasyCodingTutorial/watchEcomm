import React from 'react'

import styles from './WatchesBox.module.css'
import Link from 'next/link'

interface WatchesBoxProps {
    ImgUrl: string,
    ImgAlt?: string,
    WatchTitle: string,
    WatchDesc: string,
    Path?: string,
    Id?: string,
}

export const WatchesBox = (
    {
        ImgUrl,
        ImgAlt,
        WatchTitle,
        WatchDesc,
        Path,
        Id
    }: WatchesBoxProps
) => {
    return (
        <div className={styles.Box}>
            <Link href={`${Path}/`}>
                <img src={ImgUrl} alt={ImgAlt} />
                <div className={styles.Content}>
                    <h6>{WatchTitle}</h6>
                    <p>
                        {WatchDesc}
                    </p>
                </div>
            </Link>
        </div>
    )
}
