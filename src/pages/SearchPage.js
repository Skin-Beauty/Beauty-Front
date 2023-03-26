import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "../styles/common.scss";

import BackBtn from "../components/backBtn";
import profile from "../asset/Profile.svg";

const SearchPage = () => {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();
  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };
  return (
    <>
      <BackBtn></BackBtn>
      <Title>피부진단</Title>
      <ResultImg>
        <img src={imgFile ? imgFile : `${profile}`} alt="프로필 이미지" />
        <form>
          <label className="signup-profileImg-label" htmlFor="profileImg">
            프로필 이미지 추가
          </label>
          <input
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={saveImgFile}
            ref={imgRef}
          />
        </form>
      </ResultImg>
      <TitleWrapper>피부타입</TitleWrapper>
      <SkinTypeWrapper>
        <img src={profile}></img>
      </SkinTypeWrapper>
      <TitleWrapper>추천제품</TitleWrapper>
    </>
  );
};
export default SearchPage;

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
  border-radius: 20px;
  margin: auto;
  border: 2px solid black;
  img {
    width: 300px;
    height: 200px;
    border-radius: 20px;
  }
  .signup-profileImg-label {
    margin: 5px auto 20px 0;
    font-weight: bold;
    font-size: 13px;
    color: #0095f6;
    display: block;
    cursor: pointer;
  }

  // input태그
  input[type="file"] {
    display: none;
  }
`;
