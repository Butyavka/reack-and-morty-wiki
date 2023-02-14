import { gql } from '@apollo/client'

const LOCATION = gql `
    query GET_LOCATION($id: ID!) {
      location(id:$id) {
        name,
        type,
        dimension,
        characters:residents {
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

export {
    LOCATION,
}