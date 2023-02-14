import React from 'react'

const CharacterContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="page">
        <div className="character-detail__container container">
            {children}
        </div>
    </div>
)

export default CharacterContainer