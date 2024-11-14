import React from 'react'

import styles from './Button.module.css'
import Link from 'next/link'

interface ButtonProps {
    LinkText: string,
    LinkTo: string,
}

export const Button = (
    {
        LinkText,
        LinkTo
    }: ButtonProps
) => {
    return (
        <Link href={LinkTo} className={styles.Btn}>{LinkText}</Link>
    )
}




// For Back Button
export const BackButton = (
    {
        LinkText,
        LinkTo
    }: ButtonProps
) => {
    return (
        <Link href={LinkTo} className={styles.BackBtn}>↩️ {LinkText}</Link>
    )
}


