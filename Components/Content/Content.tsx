import React from 'react'

import styles from './Content.module.css'

interface ContentProps {
    h6Text: string,
    h5Text: string,
}

export const Content = (
    {
        h6Text,
        h5Text
    }: ContentProps
) => {
    return (
        <div className={styles.Content}>
            <h6>{h6Text}</h6>
            <h5>{h5Text}</h5>
        </div>
    )
}
