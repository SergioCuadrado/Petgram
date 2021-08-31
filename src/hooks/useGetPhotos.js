import { gql, useQuery } from "@apollo/client";
//Obtencion de todas las fotos de la misma categoria (todos de perros, todas de gatos...)
export function useGetPhotos(categoryId) {
  const GET_PHOTOS = gql`
    query getPhotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        liked
        userId
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });

  return { loading, error, data };
}
