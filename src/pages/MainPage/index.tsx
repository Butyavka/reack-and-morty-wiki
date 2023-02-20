import React, { useEffect, useState } from 'react'
import './style.scss'
import Characters from '../../components/Characters'
import { useQuery } from '@apollo/client'
import { CHARACTERS } from '../../apollo/rickAndMorty'
import { CharacterCard } from '../../types/character'
import { useSearchParams } from 'react-router-dom'
import Pagination from '../../components/UI/Pagination'
import { block } from '../../helpers/bem'

const b = block('main-page')

const MainPage = () => {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const pageParam = Number(searchParams.get('page'))
    const [ page, setPage ] = useState(pageParam || 1)
    const { loading, data, error } = useQuery(CHARACTERS, { variables: { page }})
    const characters: CharacterCard[] = data?.result.characters
    const totalPage = data?.result.info.pages

    const handlerPagination = (id: number) => {
        setSearchParams({ 'page': id.toString() })
        setPage(id)
    }

    useEffect(() => {
        if (pageParam === 0) {
            setSearchParams({ 'page': '1' })
        }
    }, [ searchParams ])

    return (
        <div className="page">
            <div className="container">
                <Characters
                    characters={ characters }
                    loading={ loading }
                    error={ error || null }
                />
                {totalPage > 1 && (
                    <Pagination
                        total={ totalPage }
                        onChange={ id => handlerPagination(id)}
                        className={ b('pagination', { 'hidden': loading }) }
                        current={ page }
                    />
                )}
            </div>
        </div>
    )
}

export default MainPage