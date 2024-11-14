import React from 'react'

import styles from './page.module.css'


export const metadata = {
    title: "Update Blog"
}

// For Components
import Wrapper from '@/Components/Wrapper/Wrapper'
import { UpdateBlogsData } from '../../_components/UpdateBlogsData/UpdateBlogsData'


const UpdateBlogPage = (
    { params }: { params: { Id: string } }
) => {
    return (
        <Wrapper>
            <UpdateBlogsData
                params={params}
            />
        </Wrapper>
    )
}

export default UpdateBlogPage