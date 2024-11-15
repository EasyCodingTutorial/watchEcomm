"use client"
import React, { useEffect, useState } from 'react'

import styles from './HomeMainContent.module.css'

// For Components
import { WatchesContent } from '../WatchesContent/WatchesContent'
import { LoadingAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'



// 
interface Props {
    _id: string,
    watchName: string,
    watchImgUrl: string,
}


// API REQ TO GET THE WATCHES DATA
const GetAllWatchesData = async (): Promise<{ AllWatchesData: Props[] } | null | undefined> => {
    try {

        const res: Response = await fetch('/api/watches', {
            cache: "no-store"
        });

        if (!res.ok) {
            console.log("Something Went Wrong")
            return
        }

        return res.json()


    } catch (error) {
        console.log(error)
    }
}

export const HomeMainContent = () => {


    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [watchesData, setWatchesData] = useState<Props[]>([])


    // 
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await GetAllWatchesData()
                if (data) {
                    setWatchesData(data.AllWatchesData)
                } else {
                    setError("Failed To Fetch Data")
                }

            } catch (error) {
                setError((error as Error).message)
                return
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])


    // Now Checking if The Status is Loading
    if (loading) {
        return (
            <div className={styles.Loading}>
                <LoadingAnimation>
                    Loading Data....
                </LoadingAnimation>
            </div>
        )
    }


    // Now Checking if We Encounter An Error
    if (error) {
        return (
            <div className={styles.Error}>
                <p >
                    Error In Fetching Data, {error}
                </p>
            </div>
        )
    }


    return (
        <div className={styles.Main}>
            <div className={styles.Content}>
                <h6>All  Watches</h6>
                <p>Feedback</p>
            </div>

            {/*  */}

            {
                watchesData && watchesData.map((I) => (
                    <WatchesContent
                        Path={`/Admin/Watches/${I._id}/ViewWatch`}
                        ImgUrl={I.watchImgUrl} WatchTitle={I.watchName} Date={new Date(2024, 10, 5)} Comments='4' key={I._id}
                    />
                ))
            }



        </div>
    )
}

