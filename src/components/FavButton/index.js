import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./styles";

import PropTypes from "prop-types";

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" color="#cc0000" />
      {likes} likes!
    </Button>
  );
};

// Validacion de las props que recibe. Poniendo tambien si es necesaria la prop o no
FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
