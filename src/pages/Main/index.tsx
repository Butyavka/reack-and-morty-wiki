import React from 'react'
import Characters from '../../components/Characters'
import { useQuery } from '@apollo/client'
import { CHARACTERS } from '../../apollo/rickAndMorty'
import { CharacterCard } from '../../types/character'

const Main = () => {
    const { loading, data, error } = useQuery(CHARACTERS, { variables: { page: 1 }})
    const characters: CharacterCard[] = data?.result.characters

    return (
        <div className="page">
            <Characters characters={ characters } loading={ loading } error={ error || null }/>
        </div>
    )
}

export default Main