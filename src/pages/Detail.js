import React from "react";
import { PhotoCardWithQuery } from "../hooks/usePhotoCardWithQuery";

import { Layout } from "../components/Layout";

const Detail = ({ detailId }) => (
  <Layout title={`Fotografía ${detailId}`} showTitle={true}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
);

export default Detail;
