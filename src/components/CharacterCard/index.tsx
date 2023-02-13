import React, { FC } from 'react'
import './style.scss'
import block from '../../helpers/bem'
import { Link } from 'react-router-dom'
import { PATHS } from '../../constants/paths'
import { CharacterCard as ICharacterCard } from '../../types/character'

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
                    to={ PATHS.CHARACTER_DETAIL(id) }
                    className={ b('name').mix(b('link')) }
                >
                    {name}
                </Link>
                <div className={ b('status') }>
                    <span className={ b('status-indicator', { [status]: !!status }) }/>
                    {status} - {species}
                </div>
                <div className={ b('info') }>
                    <div className={ b('info-name') }>Last known location:</div>
                    <div className={ b('info-value') }>{location.name}</div>
                </div>
                <div className={ b('info') }>
                    <div className={ b('info-name') }>Place of origin:</div>
                    <div className={ b('info-value') }>{origin.name}</div>
                </div>
            </div>
        </li>
    )
}

export default CharacterCard