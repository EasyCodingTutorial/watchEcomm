"use client"
import React, { useEffect, useState } from 'react'


import styles from './LatestWatches.module.css'

import { usePathname } from 'next/navigation'

// for Components
import { Content } from '@/Components/Content/Content'
import { WatchesBox } from '../WatchesBox/WatchesBox'
import { LoadingAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'


// 
interface Props {
    _id: string,
    watchName: string,
    watchDesc: string,
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

export const LatestWatches = () => {

    const pathname = usePathname()


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
        <>
            {
                pathname === '/Mens' && (
                    <>
                        <Content
                            h6Text='Latest Watches For Mens'
                            h5Text='Where Watches Shows Luxury'
                        />
                        <div className={styles.LatestWatches}>
                            {
                                watchesData.filter((I: any) => I.genderValue === "male").map((I) => (  // Correct comparison
                                    <WatchesBox
                                        ImgUrl={I.watchImgUrl}
                                        WatchTitle={I.watchName}
                                        WatchDesc={I.watchDesc}
                                        key={I._id}
                                        Path={`/Shop/${I._id}/Viewwatch`}
                                    />
                                ))
                            }
                        </div>
                    </>
                )
            }

            {
                pathname === '/Womens' && (
                    <>
                        <Content
                            h6Text='Latest Watches For Womens'
                            h5Text='Where Watches Shows Luxury'
                        />
                        <div className={styles.LatestWatches}>
                            {
                                watchesData.filter((I: any) => I.genderValue === 'Women').map((I) => (  // Correct comparison
                                    <WatchesBox
                                        ImgUrl={I.watchImgUrl}
                                        WatchTitle={I.watchName}
                                        WatchDesc={I.watchDesc}
                                        key={I._id}
                                        Path={`/Shop/${I._id}/Viewwatch`}
                                    />
                                ))
                            }
                        </div>
                    </>
                )
            }

            {
                pathname === '/' && (
                    <>
                        <Content
                            h6Text='Latest Watches'
                            h5Text='Where Watches Shows Luxury'
                        />
                        <div className={styles.LatestWatches}>
                            {
                                watchesData.slice(0, 4).map((I) => (
                                    <WatchesBox
                                        ImgUrl={I.watchImgUrl}
                                        WatchTitle={I.watchName}
                                        WatchDesc={I.watchDesc}
                                        key={I._id}
                                        Path={`/Shop/${I._id}/Viewwatch`}
                                    />
                                ))
                            }
                        </div>
                    </>
                )
            }




        </>
    )
}
