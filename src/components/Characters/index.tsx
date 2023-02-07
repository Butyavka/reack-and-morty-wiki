import React from 'react'
import './style.scss'
import CharacterCard, { ICharacterCard } from '../CharacterCard'
import Loading from '../UI/Loading'
import { useQuery } from '@apollo/client'
import { CHARACTERS } from '../../apollo/rickAndMorty'
import Error from '../Error'
import block from '../../helpers/bem'

const b = block('characters-block')

const Characters = () => {
    const { loading, data, error } = useQuery(CHARACTERS, { variables: { page: 1 }})
    const characters: ICharacterCard[] = data?.result.characters

    if (error) return <Error { ...error }/>

    if (loading) {
        return <Loading size={ 40 }/>
    } else {
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
}

export default Characters