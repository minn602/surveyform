import React from "react";
import styled from "styled-components";

const AlertCommnet = ({ alertComment }) => {
  return <Comment>{alertComment !== "" && `* ${alertComment}`}</Comment>;
};

export default AlertCommnet;

const Comment = styled.p`
  position: absolute;
  left: 30px;
  bottom: 30px;
  background-color: #fff;
  font-size: 10px;
  color: red;
`;
