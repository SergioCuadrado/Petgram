/* import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;
 */
// fetchPolicy=‘cache-and-network’ va a la red y obtiene una version fresca q almacena en el cache. Este es mejor por si hay acceso offline a la app.

/* const FavsWithQuery = () => {
  const { data, error, loading } = useQuery(GET_FAVS, {
    fetchPolicy: "cache-and-network",
  });

  return { data, loading, error };
};

export const useGetFavorites = () => {
  const { loading, data, error } = FavsWithQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  const { favs } = data;

  return <ListOfFavs favs={favs} />;
}; */

import { useQuery, gql } from "@apollo/client";
import React from "react";
import { ListOfFavs } from "../components/ListOfFavs";
import { Loading } from "../components/Loading";

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

// fetchPolicy=‘cache-and-network’ va a la red y obtiene una version fresca que almacena en el cache. Este es mejor por si hay acceso offline a la app.
const FavsWithQuery = () => {
  const { loading, data, error } = useQuery(GET_FAVORITES, {
    fetchPolicy: "cache-and-network",
  });
  return { loading, data, error };
};

export const RenderProp = () => {
  const { loading, data, error } = FavsWithQuery();
  if (loading) return <Loading />;
  if (error) return <p>Error...</p>;
  const { favs } = data;

  return <ListOfFavs favs={favs} />;
};
