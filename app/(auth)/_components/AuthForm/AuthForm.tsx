"use client"
import React, { useEffect, useState } from 'react'

import styles from './AuthForm.module.css'

import { useRouter } from 'next/navigation'

// For Components
import { InputBox } from '@/Components/InputBox/InputBox'
import { BackButton } from '@/Components/Button/Button'
import { ButtonAnimation } from '@/Components/Animation/buttonAnimation/buttonAnimation'
import { signIn, useSession } from 'next-auth/react'

export const AuthForm = () => {

    const router = useRouter()

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    // For Loading Status
    const [loading, setLoading] = useState<boolean>(false)

    // For Field Validation
    const [fieldValidation, setFieldValidation] = useState<string>("")

    // For Error/Success Messages
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [successMessage, setSuccessMessage] = useState<string>("")


    // For Varient
    const [varient, setVarient] = useState<'Login' | 'Register'>('Login')


    // For NEXT_AUTH
    const { data: session, status } = useSession()



    // For Switch Varient
    const SwitchVarient = () => {
        setVarient(varient === 'Login' ? 'Register' : 'Login')
    }


    // To Handle Login
    const LoginNow: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        // Small Validation
        if (!email.trim()) {
            setFieldValidation('Email is Required')
            document.getElementById('Email')?.focus()
            return
        } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        )) {
            setFieldValidation('Invalid Email Format')
            document.getElementById('Email')?.focus()
            return
        }
        else if (!password.trim()) {
            setFieldValidation('Password is Required')
            document.getElementById('password')?.focus()
            return
        }

        // At The End
        setFieldValidation("")

        try {
            setLoading(true)
            const res = await signIn('credentials', {
                redirect: false,
                email, password,
            })

            if (res?.error) {
                console.log(res.error)
                setSuccessMessage("")
                setErrorMessage("Wrong Credentials")
                return
            }

            // router.push('/Home')
            // Fetch The Logged-In User's Data To Check Their Role
            const UserRes = await fetch('/api/auth/UseExists', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ email })
            })

            const { userCheck } = await UserRes.json()


            // Now Redirect Users Based on Their roles
            if (userCheck.isAdmin) {
                router.replace('/Admin')
            } else {
                router.replace('/')
            }







        }
        catch (error) {
            setErrorMessage("Something Went Wrong")
            console.log(error)
        }
        finally {
            setLoading(false)
        }



    }


    // Save User Data into DB
    const RegisterNow: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()


        // Small Validation
        if (!name.trim()) {
            setFieldValidation('Name is Required')
            document.getElementById('name')?.focus()
            return
        } else if (!email.trim()) {
            setFieldValidation('Email is Required')
            document.getElementById('Email')?.focus()
            return
        } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        )) {
            setFieldValidation('Invalid Email Format')
            document.getElementById('Email')?.focus()
            return
        }

        else if (!password.trim()) {
            setFieldValidation('Password is Required')
            document.getElementById('password')?.focus()
            return
        } else if (password.length < 4) {
            setFieldValidation('Password is Short')
            document.getElementById('password')?.focus()
            return
        }

        // At The End
        setFieldValidation("")

        try {
            setLoading(true)

            // API REQ To Check Whether The Email ID is Already Registered or Not
            const resUserExists: Response = await fetch('/api/auth/UseExists', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    email
                })
            })

            const { userCheck } = await resUserExists.json()

            if (userCheck) {
                setSuccessMessage("")
                setErrorMessage("Email ID Already Exists")
                setFieldValidation("")
                return
            }



            // API REQ TO SAVE USER DATA INTO DB
            const res: Response = await fetch('/api/auth/Register', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })


            if (res.ok) {
                // if everything Going Well Then This Code is Executed 
                setErrorMessage("")
                setSuccessMessage("Registration Successfully! Pls Login")
                setFieldValidation("")
                setName("")
                setEmail("")
                setPassword("")
                SwitchVarient()

                return
            } else {
                setErrorMessage("Internal Server Error! Try Again")
            }

        } catch (error) {
            setErrorMessage("Something Went Wrong! Try Again")

        } finally {
            setLoading(false)
        }





    }

    // if User  or Admin is Already Signed In Why They  Need To Do It Again Lets Prevent Them It SignIn Again
    useEffect(() => {

        if (status === 'authenticated') {
            // Checking if the User is Normal User or Admin
            if ((session?.user as { isAdmin?: boolean | null | undefined }).isAdmin) {
                // Then Redirect To The Admin Route
                router.replace('/Admin')
            } else {
                // Redirect To The Normal User Route
                router.replace('/')
            }

        }

    }, [status, session, router])

    return (
        <div className={styles.Auth}>
            <form onSubmit={varient === 'Register' ? RegisterNow : LoginNow}>

                <BackButton
                    LinkText='Back To Home'
                    LinkTo='/'
                />

                <div className={styles.AuthImgDiv}>
                    <img src="/assets/logo.png" loading='lazy' alt="" />
                </div>


                <h6>
                    {
                        varient === 'Login' ? 'Login Now' : 'Register Now'
                    }
                </h6>

                {
                    varient === 'Register' && (
                        <InputBox
                            labelText='Your Name'
                            Id='name'
                            InputType='text'
                            onchange={(e) => setName(e.target.value)}
                            value={name}
                            fieldValidation={fieldValidation === 'Name is Required' ? fieldValidation : ''}
                        />
                    )
                }

                <InputBox
                    labelText='Your Email'
                    Id='Email'
                    InputType='email'
                    onchange={(e) => setEmail(e.target.value)}
                    value={email}
                    fieldValidation={fieldValidation === 'Email is Required' || fieldValidation === 'Invalid Email Format' ? fieldValidation : ''}
                />

                <InputBox
                    labelText='Your Password'
                    Id='password'
                    InputType='password'
                    onchange={(e) => setPassword(e.target.value)}
                    value={password}
                    fieldValidation={fieldValidation === 'Password is Required' || fieldValidation === 'Password is Short' ? fieldValidation : ''}
                />


                <button type='submit' className={styles.btn}>
                    {
                        varient === 'Login'
                            ?
                            (
                                loading ?
                                    (
                                        <ButtonAnimation>Log In...</ButtonAnimation>
                                    )
                                    : 'Login Now'
                            )
                            :
                            (
                                loading ? (
                                    <ButtonAnimation>Creating Account...</ButtonAnimation>
                                ) : 'Create Account'
                            )
                    }
                </button>

                <p className={styles.CustomMessage}>
                    {
                        varient === 'Login' ? 'Dont have an Account?' : 'Already Have An Account?'
                    }
                    <span onClick={SwitchVarient}>
                        {
                            varient === 'Login' ? ' Create One' : " Login Now"
                        }
                    </span>
                </p>

                {/* For Error/Success Message */}
                {
                    errorMessage && (
                        <p className={styles.ErrorMessage}>
                            {errorMessage}
                        </p>
                    )
                }

                {
                    successMessage && (
                        <p className={styles.SuccessMessage}>
                            {successMessage}
                        </p>
                    )
                }





            </form>
        </div>
    )
}
