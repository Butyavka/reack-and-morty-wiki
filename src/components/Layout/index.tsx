import React from 'react'
import './style.scss'
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