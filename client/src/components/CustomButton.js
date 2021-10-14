import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import "../css/component.css";

import PropTypes from "prop-types";

const CustomButton = ({ size, children, className, style, href }) => {
  const history = useHistory();

  return (
    <Button
      style={style}
      onClick={() => history.push(href)}
      className={className}
      size={size}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  href: PropTypes.string,
};

export default CustomButton;
