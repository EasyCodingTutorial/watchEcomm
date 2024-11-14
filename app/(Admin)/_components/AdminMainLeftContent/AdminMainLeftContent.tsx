import React from 'react'

import styles from './AdminMainLeftContent.module.css'

// For Components
import { Box } from '../Box/Box'
import { HomeMainContent } from './_components/HomeMainContent/HomeMainContent'

export const AdminMainLeftContent = () => {
    return (
        <>
            <div className={styles.Main}>
                <div className={styles.BoxContent}>
                    <Box
                        h6Text='Users'
                        h5Text={100}
                        pText='All Registered Users'
                    />
                </div>

                <div className={styles.MainContent}>
                    <HomeMainContent />
                </div>

            </div>
        </>
    )
}
