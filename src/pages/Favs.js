import React from "react";
import { RenderProp } from "../hooks/useGetFavorites";

import { Layout } from "../components/Layout";

const Favs = () => (
  <Layout
    title="Tus favoritos"
    subtitle="Aquí puedes encontrar tus favoritos"
    showTitle={true}
  >
    <RenderProp />
  </Layout>
);

export default Favs;
