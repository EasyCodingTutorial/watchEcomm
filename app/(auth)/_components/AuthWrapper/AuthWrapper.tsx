import React from 'react'

import styles from './AuthWrapper.module.css'

const AuthWrapper = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className={styles.Wrapper}>
            {children}
        </div>
    )
}

export default AuthWrapper