import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Button>
        <Link to="/login">로그인</Link>
      </Button>
      <Button>
        <Link to="/register">회원가입</Link>
      </Button>
    </>
  );
};
export default MainPage;

const Button = styled.button`
  width: 80%;
  max-width: 300px;
  margin: 20px auto;
  border-radius: 10px;
  display: block;
  height: 40px;
  font-size: 15px;
  a {
    text-decoration: none;
  }
`;
