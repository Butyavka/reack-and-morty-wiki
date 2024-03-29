import { Episode } from './episode'

type gender = 'Female' | 'Male' | 'Genderless' | 'unknown'
type status = 'Alive' | 'Dead' | 'unknown'

interface Character {
    id: string
    name: string
    image: string
    status: status
    species: string
    gender: gender
    type: string
    location: { name: string, id: string }
    origin: { name: string, id: string }
    episode: Episode[]
}

interface CharacterCard {
    id: string
    name: string
    image: string
    status: status
    location: { name: string, id: string }
    origin: { name: string, id: string }
    species: string
}

export {
    type Character,
    type CharacterCard,
}