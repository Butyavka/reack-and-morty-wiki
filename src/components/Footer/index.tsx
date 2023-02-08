import React from 'react'
import './style.scss'
import block from '../../helpers/bem'

const b = block('footer')

const Footer = () => {
    return (
        <div className={ b() }>
            Create with love by
            <a className={ b('link') } href="https://github.com/Butyavka">Butyavka</a>
        </div>
    )
}

export default Footer