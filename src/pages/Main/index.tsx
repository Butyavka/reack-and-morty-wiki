import React from 'react'
import { useQuery } from '@apollo/client'
import { CHARACTERS } from '../../apollo/rickAndMorty'
import CharacterCard, { ICharacterCard } from '../../components/CharacterCard'

const Main = () => {
    const {
        loading, data, error,
    } = useQuery(CHARACTERS, { variables: { page: 1 }})
    const characters: ICharacterCard[] = data?.result.characters

    return (
        <div>
            {
                !!characters && characters.map(({
                    id, name, image, status, gender,
                }) => (
                    <CharacterCard key={ id } id={ id } name={ name } image={ image } status={ status } gender={ gender }/>
                ))
            }
        </div>
    )
}

export default Main