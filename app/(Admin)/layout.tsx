import React from 'react'

import styles from './layout.module.css'

// For Layout Components
import { AdminNavbar } from './_layout/AdminNavbar/AdminNavbar'
import { AdminFooter } from './_layout/AdminFooter/AdminFooter'

const Adminlayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className={styles.Parent}>
            <div className={styles.NavbarContent}>
                <AdminNavbar />
            </div>
            <div className={styles.RestContent}>
                {children}
                <div className={styles.RestContentFooter}>
                    <AdminFooter />
                </div>
            </div>
        </div>
    )
}

export default Adminlayout