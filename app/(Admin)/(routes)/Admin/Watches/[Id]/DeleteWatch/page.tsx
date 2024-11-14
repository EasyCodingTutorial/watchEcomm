import React from 'react'

import styles from './page.module.css'
import { RemoveButton } from '../../_components/RemoveButton/RemoveButton'

export const metadata = {
    // TODO Dynamic Metadata
    title: "Delete Watch"
}

const DeleteWatchpage = (
    { params }: { params: { Id: string } }
) => {
    return (
        <RemoveButton
            Id={params.Id}
        />
    )
}

export default DeleteWatchpage