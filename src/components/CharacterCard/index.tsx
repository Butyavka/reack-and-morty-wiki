import React, { FC } from 'react'
import './style.scss'
import block from '../../helpers/bem'

// type gender = 'Female' | 'Male' | 'Genderless' | 'unknown'
type status = 'Alive' | 'Dead' | 'unknown'

export interface ICharacterCard {
    id: string
    name: string
    image: string
    status: status
    location: { name: string }
    origin: { name: string }
    species: string
}

const b = block('character-card')

const CharacterCard: FC<ICharacterCard> = ({
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
                <div className={ b('name') }>{name}</div>
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