"use client"
import React, { useEffect, useState } from 'react'

import styles from './SpecificWatch.module.css'




// For Components
import { LoadingAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation';
import { SpecificWatchBox } from '@/Components/Watches/SpecificWatchBox/SpecificWatchBox';


interface WatchDataItem {
    _id: string,
    ImgUrl: string,
    ImgAlt?: string,
    WatchTitle: string,
    WatchModelNum: string,
    WatchDesc: string,
    WatchPrice: number,
    WatchDiscount: number,
    watchSkuNum: string,
    Gender: string,
    WatchType: string,
    watchCaseMaterial: string,
    watchDialColor: string,
    watchWarrantyPeriod: string,
}


// Getting The Data
const getWatchDataById = async ({ Id }: { Id: string }) => {
    try {

        const res: Response = await fetch(`/api/watches/${Id}`, {
            cache: "no-store",
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


export const SpecificWatch = (
    { params }: { params: { Id: string } }
) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [watchData, setWatchData] = useState<any>([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await getWatchDataById({ Id: params.Id })
                if (data) {
                    setWatchData(data.WatchSpecificData)
                } else {
                    setLoading(false)
                    setError("Failed To Fetch")
                    return
                }

            } catch (error) {
                setLoading(false)
                setError((error as Error).message)
                return
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [params.Id])


    // console.log(watchData)


    // // Now Checking if The Status is Loading
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
        <div>
            <SpecificWatchBox
                key={watchData?._id}
                ImgUrl={watchData?.watchImgUrl}
                ImgAlt={watchData?.watchName}
                WatchTitle={watchData?.watchName}
                WatchModelNum={watchData?.watchModelNumber}
                WatchDesc={watchData?.watchDesc}
                WatchPrice={watchData?.watchPrice}
                WatchDiscount={watchData?.watchDiscount}
                watchSkuNum={watchData?.watchSKU}
                Gender={watchData?.genderValue}
                WatchType={watchData?.watchTypeValue}
                watchCaseMaterial={watchData?.watchCaseMaterial}
                watchDialColor={watchData?.watchDialColor}
                watchWarrantyPeriod={watchData?.watchWarrantyPeriod}
                EditButtonPath={`/Admin/Watches/${watchData?._id}/UpdateWatch`}
                DeleteButtonPath={`/Admin/Watches/${watchData?._id}/DeleteWatch`}
            />
        </div>
    )
}
