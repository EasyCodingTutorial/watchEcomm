import React from 'react'

import styles from './Blogs.module.css'
import Link from 'next/link'


interface BlogsBoxProps {
    ImgUrl: string,
    ImgAlt?: string,
    BlogTitle: string,
    BlogDesc: string,
    Path?: string,
    Id?: string,
}

export const BlogsBox = (
    {
        ImgUrl,
        ImgAlt,
        BlogTitle,
        BlogDesc,
        Path,
        Id
    }: BlogsBoxProps
) => {
    return (
        <div className={styles.Box}>
            <Link href={`${Path}`}>
                <img src={ImgUrl} alt={ImgAlt} />
                <div className={styles.BoxContent}>
                    <h6>{BlogTitle}</h6>
                    <p>
                        {BlogDesc}
                    </p>
                </div>
            </Link>
        </div>
    )
}
