import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "../styles/common.scss";
import BackBtn from "../components/backBtn";
import Profile from "../asset/Profile.svg";
import SideBar from "../components/sideBar";

const MyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackBtn></BackBtn>
      <SideBar></SideBar>
      <Wrapper>
        <SubTitle>Mypage</SubTitle>
        <Title>마이페이지</Title>
        <ImgBox></ImgBox>
        <TypeBox>
          <h2>내 피부 MBTI</h2>
          <img src={Profile}></img>
          <span>여드름성 피부</span>
        </TypeBox>
        <LoginBtn>회원정보수정</LoginBtn>
      </Wrapper>
    </>
  );
};
export default MyPage;

const ImgBox = styled.div`
  border-radius: 40px;
  width: 260px;
  height: 260px;
  margin: 20px auto;
  background-color: red;
`;

const TypeBox = styled.div`
  width: 80%;
  max-width: 400px;
  margin: auto;
  height: 150px;
  border: 0.8px solid #979797;
  box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
  border-radius: 10px;
  h2 {
    display: block;
    width: fit-content;
    font-weight: 700;
    font-size: 18px;
    margin: 20px auto;
  }
  img {
    margin-right: 30px;
  }
  span {
    font-size: 40px;
    color: #414141;
  }
`;
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
