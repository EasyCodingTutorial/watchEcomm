import React from 'react'

import styles from './page.module.css'

export const metadata = {
    title: "Contact us"
}

// For Components 
import { ContactForm } from './_components/ContactForm/ContactForm'


const ContactPage = () => {
    return (
        <ContactForm />
    )
}

export default ContactPage