import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBarBtn from "../asset/hamburger.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const sidebarAction = (e) => {
    setShow(!show);
    return { show };
  };
  // 사이드바 배경 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <>
      <HamburgerBtn onClick={sidebarAction}>
        <img src={SideBarBtn}></img>
      </HamburgerBtn>
      {show ? (
        <BarWrapper>
          <LinkWrapper>
            <Link to="/cosmetic">전체보기</Link>
            <Link to="/search">피부 진단</Link>
            <Link to="/mypage">마이페이지</Link>
          </LinkWrapper>
          <LogoutWrapper>
            <Link to="/">로그아웃</Link>
          </LogoutWrapper>
        </BarWrapper>
      ) : (
        <></>
      )}
      {show ? <OuterToToggleSideBar onClick={sidebarAction} /> : ""}
    </>
  );
};
const LogoutWrapper = styled.div`
  width: fit-content;
  margin: 300px auto;
`;

const OuterToToggleSideBar = styled.div`
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: 0.8;
  background-color: black;
  position: fixed;
`;
const LinkWrapper = styled.div`
  width: fit-content;
`;
const BarWrapper = styled.div`
  z-index: 100;
  height: 650px;
  width: 80%;
  max-width: 350px;
  background: #ffffff;
  border-radius: 0px 5px 5px 0px;
  position: absolute;
  left: 0;
  animation: LeftToRight 0.8s;
  @keyframes LeftToRight {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translateZ(0);
    }
  }
  a {
    color: #818181;
    text-decoration: none;
    cursor: pointer;
    display: block;
    font-size: 20px;
    margin-top: 20px;
  }
  a:hover {
    color: #fbb03b;
  }
`;
const HamburgerBtn = styled.button`
  float: right;
  display: block;
  width: 30px;
  height: 20px;
  cursor: pointer;
  margin: 5px 10px;
  border: none;
  background: none;
  img {
    width: 22px;
  }
`;

export default SideBar;
