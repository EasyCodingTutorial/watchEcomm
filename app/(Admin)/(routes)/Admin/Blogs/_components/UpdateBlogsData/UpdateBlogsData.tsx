"use client"
import React, { useEffect, useState } from 'react'

import styles from './UpdateBlogsData.module.css'
import { useRouter } from 'next/navigation'

// For Components
import { InputBox, TextareaBox } from '@/Components/InputBox/InputBox'
import { ButtonAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'


// From Uploadthing
import { UploadDropzone } from '@/utils/uploadthing'
import Link from 'next/link'




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



export const UpdateBlogsData = (
    { params }: { params: { Id: string } }
) => {


    const router = useRouter()
    const [blogTitle, setBlogTitle] = useState<string>("")
    const [introduction, setIntroduction] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [imageUpload, setImageUpload] = useState<string>("")
    const [fieldValidation, setFieldValidation] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [successMessage, setSuccessMessage] = useState<string>("")

    const validateForm = (): boolean => {
        let Validate = true

        if (!blogTitle.trim()) {
            setFieldValidation("Blog Title is Required")
            document.getElementById("BlogTitle")?.focus()
            return Validate = false
        } else if (!introduction.trim()) {
            setFieldValidation("Introduction is Required")
            document.getElementById("Introduction")?.focus()
            return Validate = false
        } else if (!description.trim()) {
            setFieldValidation("Description is Required")
            document.getElementById("Description")?.focus()
            return Validate = false
        }

        return Validate
    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getSpecificBlogdata({ Id: params.Id });
                // console.log("After useEffect", data)
                if (data) {
                    setBlogTitle(data.SpecificBlog.blogTitle)
                    setIntroduction(data.SpecificBlog.introduction)
                    setDescription(data.SpecificBlog.description)
                    setImageUpload(data.SpecificBlog.imageUpload)
                } else {
                    setErrorMessage("Failed to fetch data.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setErrorMessage("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params.Id]);



    const UpdateBlogSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        try {

            const res: Response = await fetch(`/api/Blogs/${params.Id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    blogTitle,
                    introduction,
                    description,
                    imageUpload
                })
            })

            if (res.ok) {
                setSuccessMessage("Blog Data Updated Successfully")
                router.push("/Admin/Blogs")
            } else {
                setErrorMessage("Sorry Try Again Later");
            }


        } catch (error) {
            setErrorMessage("Internal Server Error");
        } finally {
            setLoading(false)
        }


    }




    return (
        <div className={styles.AddNewBlog}>
            <form onSubmit={UpdateBlogSubmit}>
                <h6>Update Blog</h6>

                <div className={styles.ParentRow}>
                    <div className={styles.Row}>
                        <InputBox
                            labelText='Blog Title'
                            value={blogTitle}
                            fieldValidation={fieldValidation === "Blog Title is Required" ? fieldValidation : ''}
                            onchange={e => setBlogTitle(e.target.value)}
                            Id='BlogTitle'
                            InputType='text'
                        />

                        <TextareaBox
                            labelText='Introduction'
                            value={introduction}
                            onchange={e => setIntroduction(e.target.value)}
                            Id='Introduction'
                            fieldValidation={fieldValidation === "Introduction is Required" ? fieldValidation : ''}

                        />

                        <TextareaBox
                            labelText='Description'
                            value={description}
                            onchange={e => setDescription(e.target.value)}
                            Id='Description'
                            fieldValidation={fieldValidation === "Description is Required" ? fieldValidation : ''}

                        />


                        {/* For Uploadthing */}
                        <div className={styles.ImageUpload_Parent}>
                            <label htmlFor="">Upload Image</label>

                            <div className={styles.ImageUploader}>
                                <UploadDropzone
                                    appearance={{
                                        container: { height: 300, width: 250 },
                                        uploadIcon: { color: "#010127" },
                                        label: { color: "#010127" },
                                        allowedContent: { color: "#010127" },
                                        button: { background: "#010127" }
                                    }}
                                    endpoint="imageUploader"
                                    onClientUploadComplete={(res) => {
                                        setImageUpload(res[0].url)
                                    }}
                                    onUploadError={(error: Error) => {
                                        console.log(error)
                                    }}
                                />

                                {imageUpload && (
                                    <div>
                                        <Link href={imageUpload} target='_blank'>
                                            <img src={imageUpload} alt="Uploaded Blog Image" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        <button type='submit' className={styles.Btn}>
                            {loading ? (
                                <ButtonAnimation>
                                    Updating Blog...
                                </ButtonAnimation>
                            ) : (
                                "Update Blog"
                            )}
                        </button>

                        {errorMessage && (
                            <p className={styles.errorMessage}>
                                {errorMessage}
                            </p>
                        )}
                        {successMessage && (
                            <p className={styles.successMessage}>
                                {successMessage}
                            </p>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
}
