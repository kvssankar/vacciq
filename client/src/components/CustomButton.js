import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import "../css/component.css";
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

export default CustomButton;
