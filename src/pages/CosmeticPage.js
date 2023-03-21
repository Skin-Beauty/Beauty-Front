import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "../styles/common.scss";

import titleBox from "../components/titleBox";
import popularCosmetic from "../_mock/popular";
import BackBtn from "../components/backBtn";
import SideBar from "../components/sideBar";

const CosmeticPage = () => {
  return (
    <>
      <BackBtn></BackBtn>
      <SideBar />
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
