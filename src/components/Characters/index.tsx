import React, { FC } from 'react'
import './style.scss'
import CharacterCard from '../CharacterCard'
import { CharacterCard as ICharacterCard } from '../../types/character'
import Loading from '../UI/Loading'
import { ApolloError } from '@apollo/client'
import Error from '../Error'
import block from '../../helpers/bem'

const b = block('characters-block')

interface ICharacters {
    characters: ICharacterCard[];
    loading: boolean;
    error: ApolloError | null
}

const Characters: FC<ICharacters> = ({ characters, loading, error }) => {
    if (error) return <Error { ...error }/>

    if (loading) return <Loading size={ 40 }/>

    return (
        <div className={ b('container').mix('container') }>
            <ul className={ b() }>
                {characters.map(character => (
                    <CharacterCard
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        image={character.image}
                        status={character.status}
                        location={character.location}
                        origin={character.origin}
                        species={character.species}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Characters