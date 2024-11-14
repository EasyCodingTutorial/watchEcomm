import React from 'react'

import styles from './page.module.css'

// For Components
import Wrapper from '@/Components/Wrapper/Wrapper'
import { DeleteButton } from '../../_components/DeleteButton/DeleteButton'


export const metadata = {
  title: "Delete Blog "
}


const DeleteBlogPage = (
  { params }: { params: { Id: string } }
) => {
  return (
    <Wrapper>
      <div className={styles.Delete}>
        <h6>Are You Sure You Wants To Delete This Blog</h6>

        <DeleteButton
          params={params}
        />
      </div>
    </Wrapper>
  )
}

export default DeleteBlogPage