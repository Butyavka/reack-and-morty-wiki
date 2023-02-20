import React, { FC } from 'react'
import './style.scss'
import { block } from '../../helpers/bem'
import { Link } from 'react-router-dom'
import { PATHS } from '../../constants/paths'
import { CharacterCard as ICharacterCard } from '../../types/character'
import { scrollTop } from '../../helpers/scrollTop'

const b = block('character-card')

const CharacterCard: FC<ICharacterCard> = ({
    id,
    name,
    image,
    status,
    location,
    origin,
    species,
}) => {
    return (
        <li className={ b() }>
            <div className={ b('img-box') }>
                <img className={ b('img') } src={ image } alt={ name } />
            </div>
            <div className={ b('info-block') }>
                <Link
                    to={ PATHS.CHARACTER_PAGE(id) }
                    className={ b('name').mix(b('link')) }
                    title={ name }
                    onClick={ scrollTop }
                >
                    {name}
                </Link>
                <div className={ b('status') }>
                    <span className={ b('status-indicator', { [status]: !!status }) }/>
                    {status} - {species}
                </div>
                <div className={ b('info') }>
                    <div className={ b('info-name') }>Last known location:</div>
                    <Link
                        to={ PATHS.LOCATION_PAGE(location.id) }
                        className={ b('info-value').mix(b('link')) }
                        onClick={ scrollTop }
                    >
                        {location.name}
                    </Link>
                </div>
                <div className={ b('info') }>
                    <div className={ b('info-name') }>Place of origin:</div>
                    <Link
                        to={ PATHS.LOCATION_PAGE(origin.id) }
                        className={ b('info-value').mix(b('link')) }
                        onClick={ scrollTop }
                    >
                        {origin.name}
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default CharacterCard