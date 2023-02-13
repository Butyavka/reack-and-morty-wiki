import React from 'react'
import { useQuery } from '@apollo/client'
import { CHARACTER } from '../../apollo/rickAndMorty'
import Loading from '../../components/UI/Loading'
import { useParams } from 'react-router-dom'
import Error from '../../components/Error'
import block from '../../helpers/bem'
import './style.scss'
import CharacterContainer from './CharacterContainer'
import { Character as ICharacter } from '../../types/character'

const b = block('character-detail')

const CharacterDetail = () => {
    const { id } = useParams()
    const { loading, data, error } = useQuery(CHARACTER, { variables: { id }})
    const character: ICharacter = data?.character
    const isEmpty = !loading && !character

    if (loading) return (
        <CharacterContainer>
            <Loading/>
        </CharacterContainer>
    )

    if (error) return (
        <CharacterContainer>
            <Error { ...error }/>
        </CharacterContainer>
    )

    return (
        <CharacterContainer>
            {!isEmpty ? (
                <>
                    <div className={ b('block') }>
                        <div className={ 'img-block' }>
                            <img src={ character.image } alt={ character.name }/>
                        </div>
                        <div className={ b('info-block') }>
                            <div className={ b('name') }>{character.name}</div>
                            <div className={ b('status') }>
                                <span className={ b('status-indicator', { [character.status]: !!character.status }) }/>
                                {character.status} - {character.species}
                            </div>
                            <div className={ b('info') }>
                                <div className={ b('info-name') }>Gender:</div>
                                <div className={ b('info-value') }>{character.gender}</div>
                            </div>
                            {character.type !== '' && (
                                <div className={ b('info') }>
                                    <div className={ b('info-name') }>Type or subspecies of the characte:r</div>
                                    <div className={ b('info-value') }>{character.type}</div>
                                </div>
                            )}
                            <div className={ b('info') }>
                                <div className={ b('info-name') }>Last known location:</div>
                                <div className={ b('info-value') }>{character.location.name}</div>
                            </div>
                            <div className={ b('info') }>
                                <div className={ b('info-name') }>Place of origin:</div>
                                <div className={ b('info-value') }>{character.origin.name}</div>
                            </div>
                        </div>
                    </div>
                    <div className={ b('episode') }>
                        <h2 className={ b('episode-header') }>Episodes in which this character appeared:</h2>
                    </div>
                </>
            ) : <div>Not data</div>}
        </CharacterContainer>
    )
}

export default CharacterDetail