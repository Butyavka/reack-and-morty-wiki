import React from 'react'
import './style.scss'
import { block } from '../../helpers/bem'
import { Link } from 'react-router-dom'
import { PATHS } from '../../constants/paths'

const b = block('header')

const Header = () => {
    return (
        <div className={ b() }>
            <div className={ b('container').mix('container') }>
                <Link to={ PATHS.MAIN() } className={ b('logo') }>
                    RaMwiki
                </Link>
            </div>
        </div>
    )
}

export default Header