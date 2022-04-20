import React, { useState } from "react";
import styled from "styled-components";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";

function Main() {
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
