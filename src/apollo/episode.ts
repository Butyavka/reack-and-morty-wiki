import { gql } from '@apollo/client'

const EPISODE = gql `
query GET_EPISODE($id: ID!) {
  episode(id:$id) {
    id,
    name,
    airDate:air_date,
    episode,
    characters {
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
    EPISODE,
}