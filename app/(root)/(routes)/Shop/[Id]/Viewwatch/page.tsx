import React from 'react'

import styles from './page.module.css'

// For Components
import Wrapper from '@/Components/Wrapper/Wrapper'
import { SpecificWatch } from '../../_components/SpecificWatch/SpecificWatch'

const SpecificWatchpage = (
    { params }: { params: { Id: string } }
) => {
    return (
        <Wrapper>
            <SpecificWatch
                params={params}
            />
        </Wrapper>
    )
}

export default SpecificWatchpage