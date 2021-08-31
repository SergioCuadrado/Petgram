import React from "react";

import { Button } from "./styles";

import PropTypes from "prop-types";

export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

// 'Node' es cualquier cosa que React puede renderizar (number, bool, func...)
SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
