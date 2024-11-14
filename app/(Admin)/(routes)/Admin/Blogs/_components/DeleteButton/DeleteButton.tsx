"use client"
import React, { useState } from 'react'

import styles from './DeleteButton.module.css'

import { useRouter } from 'next/navigation'
import { ButtonAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'

export const DeleteButton = (
    { params }: { params: { Id: string } }
) => {

    const router = useRouter()

    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)



    const DeleteBlog = async () => {


        try {
            setLoading(true)
            const confirmed = confirm("Are You Sure You Wants To Delete This Blog?")
            if (confirmed) {
                try {
                    const res = await fetch(`/api/Blogs/${params.Id}`, {
                        method: 'DELETE',
                    });

                    if (res.ok) {
                        router.push('/Admin/Blogs');
                    } else {
                        console.error("Failed to delete the room.");
                    }
                } catch (error) {
                    console.error("An error occurred while deleting the Blog:", error);
                }
            }
        } catch (error) {
            setError('Something Went Wrong')
            return
        } finally {
            setLoading(false)
        }

    }



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
        <button className={styles.Btn}
            onClick={DeleteBlog}
        >
            {
                loading ? (
                    <ButtonAnimation>Deleting...</ButtonAnimation>
                )
                    : ' Remove Watch Now'
            }
        </button>
    )
}


