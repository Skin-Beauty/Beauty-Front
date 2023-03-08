import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <LoginBtn></LoginBtn>
      <RegisterBtn></RegisterBtn>
    </>
  );
};

const LoginBtn = styled.button`
  width: 80%;
`;

const RegisterBtn = styled.button`
  width: 80%;
`;
export default RegisterPage;
