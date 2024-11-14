import React from 'react'

import styles from './page.module.css'

// For Components
import Wrapper from '@/Components/Wrapper/Wrapper'
import { AllUsersData } from './_components/AllUsersData/AllUsersData'

export const metadata = {
    title: "All Users Data"
}

const UsersPage = () => {
    return (
        <Wrapper>
            <div className={styles.Content}>
                <h6>All Users Data</h6>
            </div>

            <AllUsersData />

        </Wrapper>
    )
}

export default UsersPage