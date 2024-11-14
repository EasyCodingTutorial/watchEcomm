"use client"
import React, { useState } from 'react'


import styles from './RemoveButton.module.css'


import { useRouter } from 'next/navigation'

// For Components
import { ButtonAnimation, LoadingAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'

export const RemoveButton = (
    { Id }: { Id: string }
) => {


    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [successMessage, setSuccessMessage] = useState<string>('')

    const router = useRouter()
    const RemoveWatch = async () => {
        try {
            setLoading(true)
            const Confirmed = confirm('Are You Sure? This Will Delete Permanently!')
            if (Confirmed) {
                const res: Response = await fetch(`/api/watches/${Id}`, {
                    method: "DELETE",
                })

                if (res.ok) {
                    setSuccessMessage("Watch Deleted Successfully")
                    router.replace('/Admin/Watches')
                } else {
                    setError('Something Went Wrong')
                    // For Now
                    // throw new Error("Not Deleted")
                    return
                }

            }
        } catch (error) {
            setError('Something Went Wrong')
            return
        } finally {
            setLoading(false)
        }

    }




    // // Now Checking if The Status is Loading


    // Now Checking if We Encounter An Error
    if (error) {
        return (
            <div className={styles.Error}>
                <p >
                    {error}
                </p>
            </div>
        )
    }



    return (
        // <div>{Id}</div
        <div className={styles.ButtonBox}>
            <h6>Are You Sure You Wants To Delete This Watch?</h6>
            <button onClick={RemoveWatch} className={styles.Button}>
                {
                    loading ? (
                        <ButtonAnimation>Deleting...</ButtonAnimation>
                    )
                        : ' Remove Watch Now'
                }
            </button>
        </div>
    )
}
