import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <LoginBtn></LoginBtn>
    </>
  );
};
export default MainPage;

const LoginBtn = styled.button`
  width: 80%;
`;
