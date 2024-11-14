import React from 'react'

import styles from './buttonAnimation.module.css'

export const ButtonAnimation = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className={styles.ButtonAnimation}>
            <div className={styles.Parent}></div>
            <div className={styles.Child}>
                {children}
            </div>
        </div>
    )
}


export const LoadingAnimation = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.LoadingAnimation}>
            <div className={styles.loader}></div>
            <div className={styles.Child}>
                {children}
            </div>
        </div>
    )
}

