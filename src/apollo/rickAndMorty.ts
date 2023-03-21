import { gql } from '@apollo/client'

const CHARACTERS = gql `
    query GET_CHARACTERS($page: Int, $filter: FilterCharacter) {
      result:characters(page: $page, filter: $filter) {
        info {
          count
          pages
        }
          characters:results {
          id
          name
          image
          status
          species
          location {
            name
            id
          }
          origin {
            name
            id
          }
        }
      }
    }
`

const CHARACTER = gql `
    query GET_CHARACTER($id: ID!) {
      character(id:$id) {
        name
        status
        species
        type
        gender
        origin {
          name
          id
        }
        location {
          name
          id
        }
        image
        episode {
          id
          name
          airDate:air_date
          episode
        }
      }
    }
`

export { CHARACTERS, CHARACTER }