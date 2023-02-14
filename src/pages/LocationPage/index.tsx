import React from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { LOCATION } from '../../apollo/locations'
import CharacterContainer from '../CharacterPage/CharacterContainer'
import Loading from '../../components/UI/Loading'
import Error from '../../components/Error'
import Characters from '../../components/Characters'
import { block } from '../../helpers/bem'

const b = block('location')

const LocationPage = () => {
    const { id } = useParams()
    const { loading, data, error } = useQuery(LOCATION, { variables: { id }})

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

    const { characters, name, type, dimension } = data.location

    return (
        <div className="page">
            <div className={ b('container').mix('container') }>
                <div className={ b('info') }>
                    <div className={ b('info-block') }>
                        <span className={ b('info-name') }>
                            Name:
                        </span>
                        <span className={ b('name') }>
                            { name }
                        </span>
                    </div>
                    <div className={ b('info-block') }>
                        <span className={ b('info-name') }>
                            Type:
                        </span>
                        <span className={ b('info-value') }>
                            { type }
                        </span>
                    </div>
                    <div className={ b('info-block') }>
                        <span className={ b('info-name') }>
                            Dimension:
                        </span>
                        <span className={ b('info-value') }>
                            { dimension }
                        </span>
                    </div>
                </div>
                <h2 className={ b('header') }>Location characters:</h2>
                <Characters characters={ characters } loading={ false } error={ null }/>
            </div>
        </div>
    )
}

export default LocationPage