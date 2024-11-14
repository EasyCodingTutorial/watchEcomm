"use client"
import React, { useEffect, useState } from 'react'

import styles from './SpecificBlog.module.css'


// For Components
import ParentLoading_Animation from '@/app/loading'
import Wrapper from '@/Components/Wrapper/Wrapper'
import Link from 'next/link'
import { LoadingAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'


interface Props {
    _id: string,
    blogTitle: string,
    introduction: string,
    description: string,
    imageUpload: string,

}

const getSpecificBlogdata = async (
    { Id }: { Id: string }
): Promise<{ SpecificBlog: Props } | null | undefined> => {
    try {

        const res: Response = await fetch(`/api/Blogs/${Id}`, {
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


export const SpecificBlog = (
    { params }: { params: { Id: string } }
) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [blogsData, setBlogsData] = useState<Props | null>(null)



    useEffect(() => {

        const fetchData = async () => {

            try {
                setLoading(true)
                const data = await getSpecificBlogdata({
                    Id: params.Id
                })

                if (data) {
                    setBlogsData(data.SpecificBlog)
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

    }, [params.Id])




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
        <Wrapper>
            <div className={styles.SpecificBlogs}>
                {
                    blogsData && (
                        <div className={styles.SpecificBlogRow}>

                            <div>
                                <img src={blogsData?.imageUpload} alt="" />
                            </div>

                            <div className={styles.Content}>
                                <p className={styles.Title}><span>Blog Title: </span>{blogsData?.blogTitle}</p>
                                <p className={styles.Intro}>{blogsData?.introduction}</p>
                                <p className={styles.Desc}>{blogsData?.description}</p>

                                <div className={styles.Btns}>
                                    <Link href={`/Admin/Blogs/${blogsData?._id}/UpdateBlog`}>Update Blog Data</Link>
                                    <Link href={`/Admin/Blogs/${blogsData?._id}/DeleteBlog`}>Delete Blog</Link>
                                </div>

                            </div>


                        </div>
                    )
                }
            </div>
        </Wrapper>
    )
}
