"use client"
import React from 'react'

import styles from './ProfileData.module.css'

import { useSession } from 'next-auth/react'

// For Components
import { InputBox } from '@/Components/InputBox/InputBox'
import { LoadingAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'
import { useRouter } from 'next/navigation'



export const ProfileData = () => {

    const router = useRouter()


    const { data: session, status } = useSession()


    if (status === 'loading') {
        return (
            <LoadingAnimation>Loading...</LoadingAnimation>
        )
    }


    if (status === 'unauthenticated') {
        router.push('/Auth')
    }

    return (
        <form className={styles.ProfileData}>



            {/* TODO LOGIC FOR UPDATE PROFILE 
            
             Its Not Normal Just Like we update other product we need to do this 
            */}

            <InputBox
                labelText={"Name"}
                Id="Name"
                InputType="text"
                value={session?.user?.name || ''}
                fieldValidation=""
                disabaled={true}
            />

            <InputBox
                labelText={"Email"}
                Id="email"
                InputType="email"
                disabaled={true}
                value={session?.user?.email || ''}
                fieldValidation=""
            />




            <button type="submit" className={styles.Btn}>Update Profile</button>




        </form>
    )
}
