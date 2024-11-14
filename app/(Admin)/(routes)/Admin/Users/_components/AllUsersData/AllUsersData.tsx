"use client"
import React, { useEffect, useState } from 'react'

import styles from './AllUsersData.module.css'

// For Components
import { UserBox } from '../UserBox/UserBox'
import { LoadingAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'



interface AllUsersDataProps {
    _id: string,
    name: string,
    email: string,
}


const GetAllBlogsData = async (): Promise<{ AllUsersData: AllUsersDataProps[] } | null | undefined> => {
    try {

        const res: Response = await fetch('/api/Users', {
            cache: "no-store"
        })

        if (!res.ok) {
            console.log("Failed To Fetch Data")
        }

        return res.json()


    } catch (error) {
        console.log(error)
    }
}



export const AllUsersData = () => {


    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [usersData, setUsersData] = useState<AllUsersDataProps[]>([])


    useEffect(() => {
        const fetchData = async () => {
            try {

                setLoading(true)
                const data = await GetAllBlogsData()

                if (data) {
                    setUsersData(data.AllUsersData)
                } else {
                    setErrorMessage("Failed To Fetch Data")
                }


            } catch (error) {
                setErrorMessage((error as Error).message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])




    if (loading) {
        return (
            <div className={styles.LoadingParent}>
                <LoadingAnimation>Loading Data...</LoadingAnimation>
            </div>
        )
    }

    if (errorMessage) {
        return (
            <div className={styles.ErrorMessage}>
                <p>
                    OOPS Something Went Wrong, Reload The Page
                </p>
                <img src="/assets/error.png" alt="" />
            </div>
        )
    }




    return (
        <div className={styles.AllUsersData}>
            {
                usersData && usersData.map((I) => (
                    <UserBox
                        key={I._id}
                        userName={I.name}
                        userEmail={I.email}
                    />
                ))
            }
        </div>
    )
}
