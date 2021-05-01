import React from "react";
import { useParams } from "react-router-dom";
// import { Route, Redirect } from "react-router-dom";

import ReducedLogin from "../components/ReducedLogin/ReducedLogin";

const LoginReduced = () => {
  const { qid } = useParams();
  return <ReducedLogin qid={qid} />;
};

export default LoginReduced;
