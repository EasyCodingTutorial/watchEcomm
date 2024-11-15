"use client"
import React, { useEffect, useState } from 'react'

import styles from './Navbar.module.css'
import Link from 'next/link'

import { usePathname } from 'next/navigation'


// For Components
import { Button } from '@/Components/Button/Button'


// For React Icons
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineCloseFullscreen } from "react-icons/md";

// NEXT AUTH
import { signOut, useSession } from 'next-auth/react'


interface navLinksProps {
    LinkText: string,
    LinkTo: string,
}

const navLinks: navLinksProps[] = [
    {
        LinkText: "Home",
        LinkTo: "/",
    }, {
        LinkText: "Shop",
        LinkTo: "/Shop",
    }, {
        LinkText: "Mens",
        LinkTo: "/Mens",
    }, {
        LinkText: "Womens",
        LinkTo: "/Womens",
    }, {
        LinkText: "About",
        LinkTo: "/About",
    }, {
        LinkText: "Contact",
        LinkTo: "/Contact",
    }, {
        LinkText: "Blogs",
        LinkTo: "/Blogs",
    },
]

export const RootNavbar = () => {
    const { status } = useSession()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const pathname = usePathname()

    const toggleSlider = () => {
        setIsOpen(!isOpen)
    }


    // Close the slider when the route changes
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <nav className={styles.Navbar}>
            <Link href={"/"}>
                <img src="/assets/logo.png" alt="Logo" />
            </Link>

            <div className={styles.navLinks}>
                {
                    navLinks.map((I) => (
                        <div key={I.LinkText} >
                            <Link href={I.LinkTo}
                                className={pathname === I.LinkTo ? styles.ActiveLink : ''}
                            >{I.LinkText}</Link>
                        </div>
                    ))
                }
            </div>

            {
                status === 'authenticated' ?
                    (
                        <div className={styles.NavbarLoginBtn}>
                            <Button
                                LinkText='Profile'
                                LinkTo='/Profile'
                            />
                            <Link href={''} onClick={() => signOut()} className={styles.LogoutBtn}>Logout</Link>
                        </div>
                    )
                    :
                    (
                        <div className={styles.NavbarLoginBtn}>
                            <Button
                                LinkText='Login Now'
                                LinkTo='/Auth'
                            />
                        </div>
                    )
            }


            <FaBarsStaggered
                className={styles.MenuIcon}
                onClickCapture={toggleSlider}
            />

            <div className={`${styles.Slider}  ${isOpen ? styles.Open : ''}`}>

                <div className={styles.SliderContent}>

                    <MdOutlineCloseFullscreen
                        className={styles.closeIcon}
                        onClickCapture={toggleSlider}
                    />

                    {
                        navLinks.map((I) => (
                            <div key={I.LinkText} className={styles.CustomNavLinks}>
                                <Link href={I.LinkTo}
                                    className={pathname === I.LinkTo ? styles.ActiveLink : ''}
                                >{I.LinkText}</Link>
                            </div>
                        ))
                    }

                    {
                        status === 'authenticated' ?
                            (
                                <div className={styles.NormalButtonLinks}>
                                    <Button
                                        LinkText='Profile'
                                        LinkTo='/Profile'
                                    />
                                    <Link href={''} onClick={() => signOut()} className={styles.LogoutBtn}>Logout</Link>
                                </div>
                            )
                            :
                            (

                                <Button
                                    LinkText='Login Now'
                                    LinkTo='/Auth'
                                />

                            )
                    }

                </div>

            </div>


        </nav>
    )
}
