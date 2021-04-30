import React from "react";
import { Button } from "reactstrap";
import "../css/component.css";
const CustomButton = ({ size, children, className, style }) => (
  <Button style={style} className={className} size={size}>
    {children}
  </Button>
);

export default CustomButton;
