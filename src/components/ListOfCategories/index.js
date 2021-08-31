import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { Loading } from "../Loading";

import { List, Item } from "./styles";
/* import db from "../../../api/db.json"; */

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://petgram-server-sergio-sergiocuadrado.vercel.app/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Loading />
      ) : (
        /* <Item key="loading">
          <Category />
        </Item> */
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

//React.memo para que no se tenga que volver a renderizar listofcategories cuando cambies de categories
export const ListOfCategories = React.memo(ListOfCategoriesComponent);
