import React, { FC, useState } from 'react'
import './style.scss'
import { block } from '../../../helpers/bem'
import Button from '../Button'

const b = block('pagination')

interface IPagination {
    total: number;
    onChange: (pageNumber: number) => void;
    current?: number;
    className?: string;
}

const Pagination: FC<IPagination> = ({ total, onChange, current = 1, className }) => {
    const [ currentPage, setCurrentPage ] = useState(current)
    const buttons = getButtons()

    function getButtons() {
        const buttonsArray: number[] = []

        for (let i = 2; i < total; i++) {
            buttonsArray.push(i)
        }

        return buttonsArray
    }

    const buttonHandler = (buttonId: number) => {
        setCurrentPage(buttonId)
        onChange(buttonId)
    }

    const navigationHandler = (number: number) => {
        setCurrentPage(currentPage + number)
        onChange(currentPage + number)
    }

    return (
        <div className={ b({}).mix(className) }>
            <Button onClick={ () => navigationHandler(- 1) }>Prev</Button>
            <Button className={[ 1 === currentPage ? 'active' : '' ] } onClick={ () => buttonHandler(1) }>
                1
            </Button>
            {currentPage >= 5 ? (
                <>
                    <Button className={ b('extra') } onClick={ () => buttonHandler(currentPage - 4) }>
                        ...
                    </Button>
                    {buttons.slice(currentPage - 4, currentPage + 1).map((buttonId: number) => (
                        <Button
                            key={ buttonId }
                            className={[ buttonId === currentPage ? 'active' : '' ] }
                            onClick={ () => buttonHandler(buttonId) }
                        >
                            {buttonId}
                        </Button>
                    ))}
                </>
            ) : buttons.slice(0, 4).map((buttonId: number) => (
                <Button
                    key={ buttonId }
                    className={[ buttonId === currentPage ? 'active' : '' ] }
                    onClick={ () => buttonHandler(buttonId) }
                >
                    {buttonId}
                </Button>
            ))}
            {currentPage <= total - 5 && (
                <Button className={ b('extra') } onClick={ () => buttonHandler(currentPage + 4) }>
                    ...
                </Button>
            )}
            <Button className={[ total === currentPage ? 'active' : '' ] } onClick={ () => buttonHandler(total) }>
                {total}
            </Button>
            <Button onClick={ () => navigationHandler(1) }>Next</Button>
        </div>
    )
}

export default Pagination