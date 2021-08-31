import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { gql, useQuery } from "@apollo/client";
import { Loading } from "../components/Loading";

// Obtencion por la URL que haya clickado el usuario.
const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id },
  });
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h2>Internal Server Error</h2>;
  }

  return <PhotoCard {...data.photo} />;
};
