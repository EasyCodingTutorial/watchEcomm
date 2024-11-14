import React from 'react'

import styles from './page.module.css'

// For Components
import { AdminMainLeftContent } from '../../_components/AdminMainLeftContent/AdminMainLeftContent'
import { AdminMainRightContent } from '../../_components/AdminMainRightContent/AdminMainRightContent'

export const metadata = {
    title: "Welcome Admin"
}

const Adminpage = () => {
    return (
        <>
            <div className={styles.Parent}>
                <div className={styles.MainLeft}>
                    <AdminMainLeftContent />
                </div>
                <div className={styles.MainRight}>
                    {/* Right Now I Am Not Able To Think Other Name For This Thats Why */}
                    <AdminMainRightContent />
                </div>
            </div>
        </>
    )
}

export default Adminpage