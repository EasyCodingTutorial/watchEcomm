import React from 'react'

import styles from './Box.module.css'

interface BoxProps {
    h6Text: string,
    h5Text: number,
    pText: string,
}

export const Box = (
    {
        h6Text,
        h5Text,
        pText
    }: BoxProps
) => {
    return (
        <div className={styles.Box}>
            <h6>{h6Text}</h6>
            <h5>
                {h5Text}
            </h5>

            <p>{pText}</p>
        </div>
    )
}
