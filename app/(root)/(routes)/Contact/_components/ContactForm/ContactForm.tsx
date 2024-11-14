"use client"
import React, { useState } from 'react'

import styles from './ContactForm.module.css'

// For Components
import { InputBox, TextareaBox } from '@/Components/InputBox/InputBox'

import { ButtonAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'




export const ContactForm = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    // For Loading State
    const [loading, setLoading] = useState<boolean>(false)

    // for Validation
    const [fieldValidation, setFieldValidation] = useState<string>("")

    // For Success/Error Messages
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [successMessage, setSuccessMessag] = useState<string>("")


    const validationForm = (): boolean => {
        let Validate = true


        // Small Validation
        if (!name.trim()) {
            setFieldValidation('Name is Required')
            document.getElementById('Name')?.focus()
            return Validate = false
        } else if (!email.trim()) {
            setFieldValidation('Email is Required')
            document.getElementById('Email')?.focus()
            return Validate = false
        } else if (!message.trim()) {
            setFieldValidation('Message is Required')
            document.getElementById('Message')?.focus()
            return Validate = false
        }

        // if All Set
        setFieldValidation("")

        return Validate
    }


    // For submitContactForm
    const submitContactForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        // For Validation Purpose
        if (!validationForm()) {
            return
        }


        // Lets Save Data into DB
        try {

            setLoading(true)
            const res = await fetch('/api/contactus', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, message
                })
            })

            if (res.ok) {
                setSuccessMessag("Thanks For Contact us, We will Get Back To You")
                setName("")
                setEmail("")
                setMessage("")
            } else {
                setErrorMessage("Internal Server Error!")
            }


        } catch (error) {
            setErrorMessage("Something Went Wrong! Try Again")
            console.log(error)
        } finally {
            setLoading(false)
        }


    }




    return (
        <div className={styles.ContactForm}>
            <form onSubmit={submitContactForm}>
                <h6>Contact us</h6>

                <InputBox
                    labelText='Enter Your  Name'
                    Id='Name'
                    InputType='text'
                    value={name}
                    fieldValidation={fieldValidation === 'Name is Required' ? fieldValidation : ''}
                    onchange={(e) => setName(e.target.value)}
                />

                <InputBox
                    labelText='Enter Your  Email'
                    Id='Email'
                    InputType='email'
                    value={email}
                    fieldValidation={fieldValidation === 'Email is Required' ? fieldValidation : ''}
                    onchange={(e) => setEmail(e.target.value)}
                />

                <TextareaBox
                    labelText='How We Can Help You'
                    Id='Message'
                    value={message}
                    fieldValidation={fieldValidation === 'Message is Required' ? fieldValidation : ''}
                    onchange={(e) => setMessage(e.target.value)}
                />

                {
                    errorMessage && (
                        <p className={styles.ErrorMessage}>{errorMessage}</p>
                    )
                }

                {
                    successMessage && (
                        <p className={styles.SuccessMessage}>{successMessage}</p>
                    )
                }





                <button type='submit'>
                    {
                        loading ? (
                            <ButtonAnimation>
                                Submitting...
                            </ButtonAnimation>
                        ) : 'Submit Now'
                    }
                </button>


            </form>
        </div>
    )
}
