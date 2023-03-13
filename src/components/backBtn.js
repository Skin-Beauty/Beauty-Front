import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Up from "../asset/Up.svg";

const BackBtn = () => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    console.log("back");
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  return (
    <>
      <BackButton onClick={onClickBtn}>
        <img src={Up}></img>
      </BackButton>
    </>
  );
};

const BackButton = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  background: none;
  img {
    width: 30px;
  }
`;

export default BackBtn;
