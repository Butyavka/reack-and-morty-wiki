import React from 'react'
import Footer from '../Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout