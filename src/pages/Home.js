import React from "react";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";

import { Layout } from "../components/Layout";

// Seria lo mismo que  const { id } = props.match.params
const HomePage = ({ id }) => {
  return (
    <Layout
      title="App de fotos de mascotas"
      subtitle="Con Petgram puedes encontrar fotos de animales domésticos"
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};

//React.memo para que no se tenga que volver a renderizar la Home si no hay ningun cambio, (Disclaimer: hay que tener cuidado con el memo, si no es necesario tampoco hace falta hacerlo ya que puede ser hasta inproductivo usarlo)
const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id;
});

export default Home;
