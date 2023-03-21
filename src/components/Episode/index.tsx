import React, { FC } from 'react'
import './style.scss'
import { block } from '../../helpers/bem'
import { Episode as IEpisode } from '../../types/episode'

const b = block('episode')

const Episode: FC<IEpisode> = ({ airDate, episode, name }) => {
    return (
        <div className={ b() }>
            <div className={ b('name-block') }>
                <div>{episode}</div>
                <div>{name}</div>
            </div>
            <div className={ b('date') }>{airDate}</div>
        </div>
    )
}

export default Episode