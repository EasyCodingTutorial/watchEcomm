import React from 'react'

import styles from './page.module.css'

// For Components
import Wrapper from '@/Components/Wrapper/Wrapper'
import { ProfileData } from './_components/ProfileData/ProfileData'


export const metadata = {
    title: "Profile"
}


const ProfilePage = () => {
    return (
        <Wrapper>
            <div className={styles.Profile}>
                <div className={styles.Profile_Main}>
                    <h6>Your Profile</h6>

                    <ProfileData />
                </div>

            </div>
        </Wrapper>
    )
}

export default ProfilePage