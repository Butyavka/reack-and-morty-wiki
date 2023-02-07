import React, { FC } from 'react'
import './style.scss'
import block from '../../../helpers/bem'

const b = block('button')

interface IButton {
    children?: React.ReactNode
    disabled?: boolean
    className?: string[]
}

const Button: FC<IButton> = ({ children, disabled, className = []}) => {
    return (
        <button
            className={ b({ disabled }).mix(className) }
            disabled={ disabled }
        >
            {children}
        </button>
    )
}

export default Button