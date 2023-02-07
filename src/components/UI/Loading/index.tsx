import React, { FC } from 'react'
import portal from '../../../assets/images/portal.png'
import './style.scss'
import block from '../../../helpers/bem'

const b = block('loading')

interface ILoading {
    size?: number
}

const Loading: FC<ILoading> = ({ size = 50 }) => {
    return (
        <div className={ b('container') } style={{ width: size, height: size }}>
            <img className={ b() } src={ portal } alt="Loading"/>
        </div>
    )
}

export default Loading