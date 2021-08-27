import { gql } from '@urql/svelte'

export const getAlbums = gql`
fragment SomeAlbum on AlbumsPage {
  data {
    id
    title
    photos {
      data {
        id
        url
        title
      }
    }
  }
}
query getAlbums (
  $options: PageQueryOptions
) {
  albums(options: $options) {
    ...SomeAlbum
  }
}
`;

export const createAlbum = gql`
  mutation createAlbum (
    $input: CreateAlbumInput!
  ) {
    createAlbum(input: $input) {
      title
    }
  }
`;

export const getFirstUser = gql`
query getFirstUser {
  user(id: 1) {
    id
    username
    email
    address {
      geo {
        lat
        lng
      }
    }
  }
}
`;