import React, { FC } from 'react'
import './style.scss'
import block from '../../helpers/bem'

const b = block('error-block')

interface IError {
    name?: string
    message?: string
}

const Error: FC<IError> = ({ name, message }) => {
    const errorHeader = name ? `Error: ${ name }` : 'Error'

    return (
        <div className={ b() }>
            <div className={ b('name') }>{errorHeader}</div>
            {message && <div className={ b('message') }>{message}</div>}
        </div>
    )
}

export default Error