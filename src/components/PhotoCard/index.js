import React, { useEffect, useRef, useState } from "react";

import { ImgWrapper, Img, Article } from "./styles";

import { useNearScreen } from "../../hooks/useNearScreen";

import { FavButton } from "../FavButton";
import { useToggleLikeMutation } from "../../hooks/useToggleLikeMutation";
import { Link } from "@reach/router";

import PropTypes from "prop-types";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const { mutation, mutationLoading, mutationError } = useToggleLikeMutation();

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

// Comprobando que el valor de los likes no sea menor a 0 o undefined, con un mensaje de error personalizado. Esto solo sale en modo desarrollo, en modo produccion no sale los errores.
PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }
    if (propValue < 0) {
      return new Error(`${propName} Value must be greater than 0`);
    }
  },
};
