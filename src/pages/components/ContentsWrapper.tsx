import { ReactElement } from "react";
import styled from "styled-components";

interface propTypes {
  title: string;
  child: JSX.Element;
  bgColor: string;
  setIndex: (index: number) => void;
}

const ContentsWrapper = ({ title, child, bgColor, setIndex }: propTypes) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Back onClick={() => setIndex(-1)}>〈</Back>
      <Category onClick={() => setIndex(-1)}>{title}</Category>
      {child}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.fadeIn}
  ${({ theme }) => theme.flexColumnSet()}
`;

const Back = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 28px;
  font-weight: 300;

  @media ${({ theme }) => theme.mobile} {
    top: 30px;
    font-size: 24px;
  }
`;

const Category = styled.button`
  position: absolute;
  top: 30px;
  left: 65px;
  font-size: 28px;
  font-weight: 300;

  @media ${({ theme }) => theme.mobile} {
    ${({ theme }) => theme.posCenterX()}
    top:30px;
    font-size: 24px;
  }
`;

export default ContentsWrapper;
