import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "../styles/common.scss";
import BackBtn from "../components/backBtn";

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackBtn></BackBtn>
      <Wrapper>
        <SubTitle>Create an account</SubTitle>
        <Title>회원가입</Title>
        <span>계정이 있으신가요?</span>
        <Link to="/login">로그인하기</Link>
        <div className="line"></div>
        <Emailinput type="email" placeholder="이메일"></Emailinput>
        <IDinput type="text" placeholder="아이디"></IDinput>
        <PWinput type="password" placeholder="비밀번호"></PWinput>
        <PWCheckinput type="password" placeholder="비밀번호확인"></PWCheckinput>
        <LoginBtn>
          <Link to="/login">계정 만들기</Link>
        </LoginBtn>
      </Wrapper>
    </>
  );
};
export default RegisterPage;

const Wrapper = styled.div`
  width: 90%;
  height: 90vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  margin: auto;
  text-align: center;
  span {
    margin-right: 10px;
    font-weight: 400;
    font-size: 16px;
  }
  .line {
    margin-top: 60px;
    border: 1.5px solid #d7d7d7;
    height: 0px;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
`;
const SubTitle = styled.h2`
  align-items: center;
  text-align: center;
  color: $grey;
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
  margin-top: 20px;
  background-color: $pink;
`;

const Emailinput = styled.input`
  display: block;
  margin: auto;
  width: 80%;
  border: 0.8px solid #979797;
  box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
  border-radius: 10px;
  height: 34px;
  margin-bottom: 28px;
  margin-top: 40px;
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
  margin-top: 40px;
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

const PWCheckinput = styled.input`
  display: block;
  margin: auto;
  width: 80%;
  border: 0.8px solid #979797;
  box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
  border-radius: 10px;
  height: 34px;
  margin-bottom: 28px;
`;
