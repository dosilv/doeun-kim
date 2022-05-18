import React, { useState } from "react";
import styled from "styled-components";
import smoothscroll from "smoothscroll-polyfill";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";

function Main() {
  smoothscroll.polyfill();

  return (
    <Wrapper>
      <Banner />
      <Dashboard />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet()}
  margin: auto;

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
  }
`;

export default Main;
