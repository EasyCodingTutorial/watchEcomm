"use client"
import React, { useState } from 'react'

import styles from './AddNewBlog.module.css'
import { useRouter } from 'next/navigation'

// For Components
import { InputBox, TextareaBox } from '@/Components/InputBox/InputBox'

// From Uploadthing
import { UploadDropzone } from '@/utils/uploadthing'
import Link from 'next/link'

// For Loading Animation
import { ButtonAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'

export const AddNewBlog = () => {
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
        } else if (!imageUpload.trim()) {
            setFieldValidation("Image is Required")
            return Validate = false
        }

        return Validate
    }

    const AddNewBlogSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        try {
            setLoading(true)

            // Add New Blog
            const res: Response = await fetch('/api/Blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    blogTitle,
                    introduction,
                    description,
                    imageUpload
                })
            })

            if (res.ok) {
                setSuccessMessage("Blog Added Successfully")
                router.push("/Admin/Blogs")
            } else {
                setErrorMessage("Something Went Wrong Try Again")
                return null
            }
        } catch (error) {
            setErrorMessage("Something Went Wrong Try Again")
            return null
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className={styles.AddNewBlog}>
                <form onSubmit={AddNewBlogSubmit}>
                    <h6>Add New Blog</h6>

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
                                {
                                    fieldValidation === 'Image is Required' && (
                                        <span className={styles.UploadImgErrorMessage}>{fieldValidation}</span>
                                    )
                                }

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
                                        Adding New Blog...
                                    </ButtonAnimation>
                                ) : (
                                    "Add New Blog"
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
        </>
    )
}
