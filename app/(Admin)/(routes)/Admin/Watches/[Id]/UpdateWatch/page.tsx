import React from 'react'

import styles from './page.module.css'

// For Components
import { UpdateWatchCompo } from '../../_components/UpdateWatchCompo/UpdateWatchCompo'

export const metadata = {
    // TODO
    title: "Update Watch"
}

const UpdateWatchpage = (
    { params }: { params: { Id: string } }
) => {
    return (
        <UpdateWatchCompo
            Id={params.Id}
        />
    )
}

export default UpdateWatchpage