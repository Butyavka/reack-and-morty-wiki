import React, { FC } from 'react'
import './style.scss'
import { block } from '../../helpers/bem'
import { Episode as IEpisode } from '../../types/episode'
import { Link } from 'react-router-dom'
import { PATHS } from '../../constants/paths'

const b = block('episode')

const Episode: FC<IEpisode> = ({ airDate, episode, name, id }) => {
    return (
        <Link to={ PATHS.EPISODE_PAGE(id) } className={ b() }>
            <div className={ b('name-block') }>
                <div>{episode}</div>
                <div>{name}</div>
            </div>
            <div className={ b('date') }>{airDate}</div>
        </Link>
    )
}

export default Episode