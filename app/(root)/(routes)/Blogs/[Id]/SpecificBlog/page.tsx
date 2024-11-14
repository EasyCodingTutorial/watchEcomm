import React from 'react'

import styles from './page.module.css'

// For Compnents
import { SpecificBlog } from '../../_components/SpecificBlog/SpecificBlog'
import Wrapper from '@/Components/Wrapper/Wrapper'

const SpecificBlogPage = (
    { params }: { params: { Id: string } }
) => {
    return (
        <Wrapper>
            <SpecificBlog
                params={params}
            />
        </Wrapper>
    )
}

export default SpecificBlogPage