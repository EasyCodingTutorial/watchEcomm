"use client"
import React from 'react'

import styles from './SpecificWatchBox.module.css'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SpecificWatchBoxProps {
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
    // For Btns Path
    DeleteButtonPath?: string,
    EditButtonPath?: string,
}

export const SpecificWatchBox = (
    {
        ImgUrl,
        ImgAlt = "Watch Image",
        WatchTitle,
        WatchModelNum,
        WatchDesc,
        WatchPrice,
        WatchDiscount,
        watchSkuNum,
        Gender,
        WatchType,
        watchCaseMaterial,
        watchDialColor,
        watchWarrantyPeriod,
        DeleteButtonPath,
        EditButtonPath

    }: SpecificWatchBoxProps
) => {

    const pathName = usePathname()

    return (
        <div className={styles.WatchBox}>

            <div className={styles.Row}>
                <div className={styles.ImgContainer}>
                    <img src={ImgUrl} alt={ImgAlt} />
                </div>

                <div className={styles.ContentBox}>

                    {/* Basic Information */}
                    <p className={styles.Custom}>Basic Information</p>
                    <h6 className={styles.watchTitle}>{WatchTitle}</h6>
                    <h6 className={styles.watchModelNum}><span>Watch Model Num:</span> {WatchModelNum}</h6>

                    <p className={styles.Desc}>
                        {WatchDesc}
                    </p>

                    {/* Price & Inventory */}
                    <p className={styles.Custom}>Price & Inventory</p>
                    <h6 className={styles.Price}>Price: ₹ {WatchPrice}</h6>

                    <h6 className={styles.Discount}>Discount: {WatchDiscount}%</h6>
                    <h6 className={styles.watchSKUNum}><span>Watch SKU Num:</span> {watchSkuNum}</h6>

                    <h6 className={styles.Gender}>Gender: {Gender}</h6>

                    {/* For Btns */}
                    <div className={styles.BtnBox}>
                        {
                            pathName.startsWith('/Admin') ? (
                                <>
                                    <Link href={`${DeleteButtonPath}`} className={styles.Btn}>Delete Watch</Link>
                                    <Link href={`${EditButtonPath}`} className={styles.Btn}>Edit Watch Details</Link>
                                </>
                            ) : (
                                <Link href="/" className={styles.Btn}>Buy Now</Link>
                            )
                        }
                    </div>

                </div>
            </div>

            {/* For Second Row */}
            <div className={styles.SecondRow}>

                <div className={styles.Content_SecondRow}>
                    <h5>Watch Specification</h5>
                    <h6>Watch Type: {WatchType}</h6>
                    <h6>Watch Case Material: {watchCaseMaterial}</h6>
                    <h6>Watch Dial Color: {watchDialColor}</h6>
                </div>

                <div className={styles.Content_SecondRow}>
                    <h5>Additional</h5>
                    <h6>Warranty Period: {watchWarrantyPeriod}</h6>
                </div>

            </div>

        </div>
    )
}
