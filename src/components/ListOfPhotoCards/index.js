import React from "react";
import { PhotoCard } from "../PhotoCard";
import { Loading } from "../Loading";

import { useGetPhotos } from "../../hooks/useGetPhotos";

export const ListOfPhotoCards = ({ categoryId }) => {
  // https://petgram-server-sergio-sergiocuadrado.vercel.app/graphql , la data es la informacion y el loading y error te lo trae el graphql
  const { loading, error, data } = useGetPhotos(categoryId);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h2>Internal Server Error</h2>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
