import React from 'react'



export const metadata = {
    title: "Authentication"
}

// For Auth Components
import AuthWrapper from '../../_components/AuthWrapper/AuthWrapper'
import { AuthForm } from '../../_components/AuthForm/AuthForm'

const Authpage = () => {
    return (
        <AuthWrapper>
            <AuthForm />
        </AuthWrapper>
    )
}

export default Authpage