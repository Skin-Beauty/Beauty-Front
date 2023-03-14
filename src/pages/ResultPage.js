import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "../styles/common.scss";

import BackBtn from "../components/backBtn";
import profile from "../asset/Profile.svg";

const ResultPage = () => {
  useEffect(() => {}, []);
  return (
    <>
      <BackBtn></BackBtn>
      <Title>피부진단결과</Title>
      <ResultImg></ResultImg>
      <TitleWrapper>피부타입</TitleWrapper>
      <SkinTypeWrapper>
        <img src={profile}></img>
      </SkinTypeWrapper>
      <TitleWrapper>추천제품</TitleWrapper>
    </>
  );
};
export default ResultPage;

const Title = styled.h2`
  align-items: center;
  text-align: center;
`;
const SkinTypeWrapper = styled.div`
  border: 1px solid #979797;
  box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
  border-radius: 10px;
  width: 300px;
  height: 60px;
  margin: 20px auto;
  display: flex;
  img {
    width: 40px;
    height: 40px;
    margin: 10px 20px;
  }
`;
const TitleWrapper = styled.div`
  width: 70%;
  height: 35px;
  max-width: 250px;
  background: #d38189;
  border-radius: 0 24px 24px 0;
  text-align: center;
  margin-top: 60px;
  color: #ffffff;
`;

const ResultImg = styled.div`
  width: 300px;
  height: 200px;
  background-color: red;
  border-radius: 20px;
  margin: auto;
`;
