import React from 'react'

import styles from './UserBox.module.css'

interface Props {
    userName: string,
    userEmail: string,
}

export const UserBox = (
    {
        userName,
        userEmail
    }: Props
) => {
    return (
        <div className={styles.Box}>
            <div>
                <div className={styles.Content}>
                    <h6>User Name: <span>{userName}</span></h6>
                    <h6>User Email: <span>{userEmail}</span></h6>
                </div>
            </div>

        </div>
    )
}
