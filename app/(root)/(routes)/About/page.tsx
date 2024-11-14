import React from 'react'

import styles from './page.module.css'

export const metadata = {
    title: "About us"
}


// For Components
import { MainBg } from '@/Components/MainBg/MainBg'

const Aboutpage = () => {
    return (
        <>
            <MainBg
                ImgUrl='/assets/watches/3.jpg'
                h6Text='Easy Luxury Watches'
                h5Text='About us'
            />
        </>
    )
}

export default Aboutpage