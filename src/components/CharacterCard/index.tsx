import React, { FC } from 'react'

type gender = 'Female' | 'Male' | 'Genderless' | 'unknown'
type status = 'Alive' | 'Dead' | 'unknown'

export interface ICharacterCard {
    id: string
    name: string
    image: string
    status: status
    gender: gender
}

const CharacterCard: FC<ICharacterCard> = ({
    id, name, image, status, gender,
}) => {
    return (
        <div>
            {name}
            <img src={ image } alt={ name } />
        </div>
    )
}

export default CharacterCard