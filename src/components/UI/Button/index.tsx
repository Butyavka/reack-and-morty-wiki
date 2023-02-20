import React, { FC } from 'react'
import './style.scss'
import { block } from '../../../helpers/bem'

const b = block('button')

interface IButton {
    children?: React.ReactNode
    disabled?: boolean
    className?: string[] | string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<IButton> = ({ children, disabled, className = [], onClick }) => {
    return (
        <button
            className={ b({ disabled }).mix(className) }
            disabled={ disabled }
            onClick={ onClick }
        >
            {children}
        </button>
    )
}

export default Button