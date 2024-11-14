import React from 'react'

import styles from './page.module.css'

// For Components
import { SpecificBlog } from '../../_components/SpecificBlog/SpecificBlog'

const SpecificBlogpage = (
    { params }: { params: { Id: string } }
) => {
    return (
        <SpecificBlog
            params={params}
        />
    )
}

export default SpecificBlogpage