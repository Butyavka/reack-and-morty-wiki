import React from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { EPISODE } from '../../apollo/episode'
import Loading from '../../components/UI/Loading'
import Error from '../../components/Error'
import Characters from '../../components/Characters'
import { block } from '../../helpers/bem'

const b = block('episode-page')

const EpisodePage = () => {
    const { id } = useParams()

    const { loading, data, error } = useQuery(EPISODE, { variables: { id }})

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

    const { characters, airDate, episode, name } = data.episode

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
                            Episode:
                        </span>
                        <span className={ b('info') }>
                            { episode }
                        </span>
                    </div>
                    <div className={ b('info-block') }>
                        <span className={ b('info-name') }>
                            Air date:
                        </span>
                        <span className={ b('info-value') }>
                            { airDate }
                        </span>
                    </div>
                </div>
                <h2 className={ b('header') }>Episode characters:</h2>
                <Characters characters={ characters } loading={ false } error={ null }/>
            </div>
        </div>
    )
}

export default EpisodePage