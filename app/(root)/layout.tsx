import React from 'react'


// for Layout Components
import { RootNavbar } from './layout/Navbar/Navbar'
import { RootFooter } from './layout/Footer/Footer'

const Rootlayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <>

            <RootNavbar />
            {children}
            <RootFooter />
        </>
    )
}

export default Rootlayout