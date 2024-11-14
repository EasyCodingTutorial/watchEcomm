"use client"
import React, { useEffect, useState } from 'react'

import styles from './AdminAllBlogs.module.css'

// For Components
import { BlogsBox } from '@/Components/Blogs/BlogsBox'
import { LoadingAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'



interface AllBlogsDataProps {
    _id: string,
    blogTitle: string,
    description: string,
    imageUpload: string,
}


const GetAllBlogsData = async (): Promise<{ AllBlogsData: AllBlogsDataProps[] } | null | undefined> => {
    try {

        const res: Response = await fetch('/api/Blogs', {
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


export const AdminAllBlogs = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [blogsData, setBlogsData] = useState<AllBlogsDataProps[]>([])


    useEffect(() => {
        const fetchData = async () => {
            try {

                setLoading(true)
                const data = await GetAllBlogsData()

                if (data) {
                    setBlogsData(data.AllBlogsData)
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
        <div className={styles.AllBlogs}>
            <div className={styles.AllBlogsRow}>
                {
                    blogsData && blogsData.map((I) => (
                        <BlogsBox
                            BlogTitle={I.blogTitle}
                            BlogDesc={I.description}
                            Path={`/Admin/Blogs/${I._id}/SpecificBlog`}
                            Id={I._id}
                            ImgUrl={I.imageUpload}
                            key={I._id}
                        />
                    ))
                }
            </div>
        </div>
    )
}
