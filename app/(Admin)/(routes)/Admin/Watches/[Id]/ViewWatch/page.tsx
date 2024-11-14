import React from 'react'

import styles from './page.module.css'

// For Components 
import { SpecificWatch } from '../../_components/SpecificWatch/SpecificWatch'



const ViewSpecificWatchPage = (
    { params }: { params: { Id: string } }
) => {
    return (
        <>
            <SpecificWatch
                params={params}
            />
        </>
    )
}

export default ViewSpecificWatchPage