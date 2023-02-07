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

export { CHARACTERS }