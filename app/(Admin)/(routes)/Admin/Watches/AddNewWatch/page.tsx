import React from 'react'

import styles from './page.module.css'

// For Components
import { AddNewWatch } from '../_components/AddNewWatch/AddNewWatch'


export const metadata = {
    title: "Add  New Watch"
}

const AddNewWatchPage = () => {
    return (
        <>
            <AddNewWatch />
        </>
    )
}

export default AddNewWatchPage