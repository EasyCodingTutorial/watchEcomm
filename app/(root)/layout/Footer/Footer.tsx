import React from 'react'

import styles from './Footer.module.css'
import Link from 'next/link'


// For React Icons
import { TiArrowRight } from "react-icons/ti";



interface PropsTypes {
    LinkText: string,
    LinkTo: string,
}

const GetHelp: PropsTypes[] = [
    {
        LinkText: "Contact us",
        LinkTo: "",
    }, {
        LinkText: "Shipping",
        LinkTo: "",
    }, {
        LinkText: "Return & Exchange",
        LinkTo: "",
    }, {
        LinkText: "Special Orders",
        LinkTo: "",
    },
]

const Info: PropsTypes[] = [
    {
        LinkText: "About",
        LinkTo: "",
    }, {
        LinkText: "Store",
        LinkTo: "",
    }, {
        LinkText: "Career",
        LinkTo: "",
    }, {
        LinkText: "Gift Card",
        LinkTo: "",
    },
]

const CustomerServices: PropsTypes[] = [
    {
        LinkText: "My Account",
        LinkTo: "",
    }, {
        LinkText: "Premium Wathces",
        LinkTo: "",
    }, {
        LinkText: "Luxury Watches",
        LinkTo: "",
    }, {
        LinkText: "Wedding Watches",
        LinkTo: "",
    },
]

export const RootFooter = () => {
    return (
        <footer
            className={styles.Footer}
        >

            <div className={styles.FooterRow}>

                <div>
                    <img src="/assets/logo.png" alt="" />
                </div>

                <div>
                    <h6>Get Help</h6>
                    {
                        GetHelp.map((I) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>
                                    <span>
                                        <TiArrowRight />
                                    </span>
                                    {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>

                <div>
                    <h6>Information</h6>
                    {
                        Info.map((I) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>
                                    <span>
                                        <TiArrowRight />
                                    </span>
                                    {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>

                <div>
                    <h6>Customer Services</h6>
                    {
                        CustomerServices.map((I) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>
                                    <span>
                                        <TiArrowRight />
                                    </span>
                                    {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>




            </div>

            <div className={styles.FooterRow1}>
                <h4>&copy; Easy Luxury Watches | 2024 - 2025 </h4>
            </div>

        </footer>
    )
}
