import React from 'react'


import styles from './page.module.css'

export const metadata = {
    title: "Womens Watches"
}


// For Components
import { MainBg } from '@/Components/MainBg/MainBg'
import { Watches } from '@/Components/Watches/Watches'
import Wrapper from '@/Components/Wrapper/Wrapper'



const Womenspage = () => {
    return (
        <>
            <MainBg

                ImgUrl='/assets/female_Watch/mainBg.jpg'
                h6Text='Easy Luxury Watches'
                h5Text='Watches For Mens'
            />

            <Wrapper>
                <Watches />
            </Wrapper>

        </>
    )
}

export default Womenspage