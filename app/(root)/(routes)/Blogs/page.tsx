import React from 'react'

import styles from './page.module.css'


export const metadata = {
    title: "All Blogs"
}

// For Components
import { MainBg } from '@/Components/MainBg/MainBg'
import { Watches } from '@/Components/Watches/Watches'
import Wrapper from '@/Components/Wrapper/Wrapper'

import { AllBlogs } from './_components/AllBlogs/AllBlogs'

const BlogsPage = () => {
    return (
        <>
            <MainBg
                ImgUrl='/assets/blogs/1.jpg'
                h6Text='Easy Luxury Watches'
                h5Text='Learn By Reading'
            />

            <Wrapper>
                <AllBlogs />
            </Wrapper>

        </>
    )
}

export default BlogsPage