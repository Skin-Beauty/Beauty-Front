import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "../styles/common.scss";

import icons from "../_mock/icons";
import titleBox from "../components/titleBox";
import popularCosmetic from "../_mock/popular";
import BackBtn from "../components/backBtn";
import SideBar from "../components/sideBar";

const CosmeticPage = () => {
  return (
    <>
      <BackBtn />
      <SideBar />
      <SelectWrapper>
        {icons.map((icon) => {
          return (
            <SelectBox>
              <SelectImgBox>
                <img src={icon.img}></img>
              </SelectImgBox>
              <SelectNameBox>{icon.name}</SelectNameBox>
            </SelectBox>
          );
        })}
      </SelectWrapper>
      {titleBox("인기제품")}
      {popularCosmetic.map((cos) => {
        return (
          <CosmeticWrapper>
            <div className="img"></div>
            <div className="desc">
              <div className="company">{cos.company}</div>
              <div className="name">{cos.name}</div>
            </div>
          </CosmeticWrapper>
        );
      })}
    </>
  );
};

const SelectBox = styled.div`
  width: fit-content;
  user-select: none;
  cursor: pointer;
`;
const SelectNameBox = styled.div`
  width: fit-content;
  margin: auto;
  font-size: 10px;
`;

const SelectImgBox = styled.div`
  background: #ffffff;
  border: 1px solid #d38189;
  border-radius: 20px;
  width: 60px;
  height: 60px;
  margin: 15px 20px 5px;
  img {
    width: 40px;
    height: 40px;
    margin: 10px auto;
    display: block;
  }
  &:hover {
    background-color: #d38189;
  }
`;
const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: fit-content;
  margin: 20px auto;
`;
const CosmeticWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  height: 80px;
  width: 80%;
  margin: 20px auto;
  display: flex;
  .img {
    height: 70px;
    width: 70px;
    margin: 5px 20px;
  }
  .desc {
    height: 70px;
    width: 60%;
    margin-top: 5px;
  }
`;
export default CosmeticPage;
