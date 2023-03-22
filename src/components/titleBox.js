import styled from "styled-components";
import React, { useEffect, useState } from "react";

const titleBox = (title) => {
  return (
    <>
      <TitleWrapper>{title}</TitleWrapper>
    </>
  );
};

const TitleWrapper = styled.div`
  background: #d38189;
  border-radius: 0 24px 24px 0;
`;

export default titleBox;
