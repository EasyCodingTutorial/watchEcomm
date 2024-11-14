import React from 'react'

import styles from './page.module.css'

import Link from 'next/link'


// For Components
import { AdminAllBlogs } from './_components/AdminAllBlogs/AdminAllBlogs';

// For React Icons
import { RiFolderAddFill } from "react-icons/ri";


export const metadata = {
    title: "All Blogs"
}


const Blogspage = () => {
    return (
        <div className={styles.Blogs}>
            <div className={styles.Content}>
                <h6>All Blogs</h6>
                <Link href={'/Admin/Blogs/AddNewBlog'}> <RiFolderAddFill /> Add New Blog</Link>
            </div>

            <AdminAllBlogs />


        </div>
    )
}

export default Blogspage