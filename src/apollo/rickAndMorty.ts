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
          }
          origin {
            name
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
          air_date
          episode
        }
      }
    }
`

export { CHARACTERS, CHARACTER }