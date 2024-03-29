import React from 'react'
import { useQuery } from '@apollo/client'
import { CHARACTER } from '../../apollo/characters'
import Loading from '../../components/UI/Loading'
import { Link, useParams } from 'react-router-dom'
import Error from '../../components/Error'
import { block } from '../../helpers/bem'
import './style.scss'
import { Character as ICharacter } from '../../types/character'
import { PATHS } from '../../constants/paths'
import Episode from '../../components/Episode'

const b = block('character-detail')

const CharacterPage = () => {
    const { id } = useParams()
    const { loading, data, error } = useQuery(CHARACTER, { variables: { id }})
    const character: ICharacter = data?.character
    const isEmpty = !loading && !character

    if (loading) return (
        <div className="page">
            <div className={ b('container').mix('container') }>
                <Loading/>
            </div>
        </div>
    )

    if (error) return (
        <div className="page">
            <div className={ b('container').mix('container') }>
                <Error { ...error }/>
            </div>
        </div>
    )

    return (
        <div className="page">
            <div className={ b('container').mix('container') }>
                {loading && <Loading/>}
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
                                        <div className={ b('info-name') }>Type or subspecies of the character:</div>
                                        <div className={ b('info-value') }>{character.type}</div>
                                    </div>
                                )}
                                <div className={ b('info') }>
                                    <div className={ b('info-name') }>Last known location:</div>
                                    <Link
                                        to={ PATHS.LOCATION_PAGE(character.location.id) }
                                        className={ b('info-value').mix(b('link')) }
                                    >
                                        {character.location.name}
                                    </Link>
                                </div>
                                <div className={ b('info') }>
                                    <div className={ b('info-name') }>Place of origin:</div>
                                    <Link
                                        to={ PATHS.LOCATION_PAGE(character.origin.id) }
                                        className={ b('info-value').mix(b('link')) }
                                    >
                                        {character.origin.name}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={ b('episodes') }>
                            <h2 className={ b('episodes-header') }>
                                Episodes in which this character appeared
                                <span className={ b('episodes-count') }>({character.episode.length})</span>:
                            </h2>
                            <div className={ b('episodes-box') }>
                                {character.episode.map(item => (
                                    <Episode
                                        key={ item.id }
                                        id={ item.id }
                                        airDate={ item.airDate }
                                        episode={ item.episode }
                                        name={ item.name }
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                ) : <div>Not data</div>}
            </div>
        </div>
    )
}

export default CharacterPage