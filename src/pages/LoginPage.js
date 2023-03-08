import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "../styles/common.scss";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Wrapper>
        <SubTitle>Login</SubTitle>
        <Title>로그인</Title>
        <span>계정이 없으신가요?</span>
        <Link to="/register">회원가입하기</Link>
        <IDinput type="text" placeholder="아이디"></IDinput>
        <PWinput type="passwordt" placeholder="비밀번호"></PWinput>
        <span>아이디찾기</span>
        <span>비밀번호 찾기</span>
        <Link to="/register"></Link>
        <LoginBtn>로그인</LoginBtn>
      </Wrapper>
    </>
  );
};
export default LoginPage;

const Wrapper = styled.div`
  width: 90%;
  height: 90vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  margin: auto;
`;
const SubTitle = styled.h2`
  align-items: center;
  text-align: center;
  color: var(--grey);
  font-size: 15px;
`;
const Title = styled.h1`
  align-items: center;
  text-align: center;
`;

const LoginBtn = styled.button`
  width: 80%;
  margin: 0 auto;
  background: $--pink;
  height: 44px;
  color: #ffffff;
  border-radius: 24.5px;
  display: block;
  border: none;
`;

const IDinput = styled.input`
  display: block;
  margin: auto;
  width: 80%;
  border: 0.8px solid #979797;
  box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
  border-radius: 10px;
  height: 34px;
  margin-bottom: 28px;
`;

const PWinput = styled.input`
  display: block;
  margin: auto;
  width: 80%;
  border: 0.8px solid #979797;
  box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
  border-radius: 10px;
  height: 34px;
  margin-bottom: 28px;
`;
