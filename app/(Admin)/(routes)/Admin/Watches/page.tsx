import React from 'react'

import styles from './page.module.css'

import Link from 'next/link'


// For Components
import { Watches } from './_components/Watches/Watches'

// For React Icons
import { RiFolderAddFill } from "react-icons/ri";


export const metadata = {
    title: "All Watches"
}

const AdminWatchPage = () => {
    return (
        <div className={styles.Watches}>
            <div className={styles.Content}>
                <h6>All Watches</h6>
                <Link href={'/Admin/Watches/AddNewWatch'}> <RiFolderAddFill /> Add New Watch</Link>
            </div>

            <Watches />


        </div>
    )
}

export default AdminWatchPage