import { useEffect, useState } from "react";
import styled from "styled-components";

interface propTypes {
  setIndex: (index: number) => void;
}

interface project {
  title: string;
  date: string;
  desc: string;
  link: string;
  linkName: string;
  features: Array<string>;
  color: string;
}

const Projects = ({ setIndex }: propTypes) => {
  const [close, setClose] = useState(true);

  const projectList: Array<project> = [
    {
      title: "Wena",
      date: "22.02-22.04",
      desc: "4050을 위한 익명 대화 앱",
      link: "https://wena-landing-page.web.app/",
      linkName: "Landing Page",
      features: [
        "Flutter로 구현한 하이브리드 앱",
        "GetX를 이용한 상태관리 및 UI/logic 분리",
        "JsonSerializable, Freezed를 이용한 데이터 클래스 관리",
        "Agora API를 이용한 앱내 음성 통화 기능 구현",
        "Fastlane으로 자동 배포 세팅",
      ],
      color: "orange",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setClose(false);
    }, 1000);
  }, []);

  const closeContents = () => {
    setClose(true);
    setTimeout(() => {
      setIndex(-1);
    }, 1000);
  };

  return (
    <Wrapper close={close}>
      <Back onClick={closeContents} close={close}>
        〈
      </Back>
      <Category onClick={closeContents} close={close}>
        Projects
      </Category>
      <ItemWrapper close={close}>
        <Colume>
          <Item>
            <Title color="orange">Wena</Title>
            <Date>22.02-22.04</Date>
            <Desc>
              <p>4050을 위한 익명 대화 앱 </p>

              <LinkButton
                onClick={() =>
                  window.open("https://wena-landing-page.web.app/")
                }
              >
                Landing Page ‣
              </LinkButton>
            </Desc>
            <Features>
              <p> Flutter로 구현한 하이브리드 앱</p>
              <p> GetX를 이용한 상태관리 및 UI/logic 분리</p>
            </Features>
          </Item>
        </Colume>
        <Colume>
          <Item>
            <Title color="orange">Wena</Title>
            <Date>22.02-22.04</Date>
            <Desc>
              <p>4050을 위한 익명 대화 앱 </p>

              <LinkButton
                onClick={() =>
                  window.open("https://wena-landing-page.web.app/")
                }
              >
                Landing Page ‣
              </LinkButton>
            </Desc>
            <Features>
              <p> Flutter로 구현한 하이브리드 앱</p>
              <p> GetX를 이용한 상태관리 및 UI/logic 분리</p>
            </Features>
          </Item>
        </Colume>
      </ItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ close: boolean }>`
  background-color: ${(props) => (props.close ? "#D8C3BD" : "#444444")};
  position: fixed;
  left: ${(props) => (props.close ? "40%" : 0)};
  top: 0;
  right: 0;
  bottom: 0;
  transition: all 1s;
  ${({ theme }) => theme.fadeIn}

  * {
    color: white;
  }

  @media ${({ theme }) => theme.mobile} {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    left: 0;
    background-color: "#444444";
    opacity: ${(props) => (props.close ? "20%" : "0%")};
  }
`;

const Back = styled.button<{ close: boolean }>`
  margin: 30px;
  font-size: 28px;
  font-weight: 300;
  opacity: ${(props) => (props.close ? "0%" : "100%")};

  @media ${({ theme }) => theme.mobile} {
    top: 30px;
    font-size: 24px;
  }
`;

const Category = styled.button<{ close: boolean }>`
  margin-top: 30px;
  font-size: 28px;
  font-weight: 300;
  opacity: ${(props) => (props.close ? "0%" : "100%")};

  @media ${({ theme }) => theme.mobile} {
    ${({ theme }) => theme.posCenterX()}
    font-size: 24px;
  }
`;

const ItemWrapper = styled.div<{ close: boolean }>`
  ${({ theme }) => theme.flexSet("space-around")}
  opacity: ${(props) => (props.close ? "0%" : "100%")};

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
  }
`;

const Colume = styled.div``;

const Item = styled.div`
  margin: 20px;
`;

const Title = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 22px;
  font-weight: 700;
`;

const Date = styled.span`
  margin-left: 10px;
  color: #b4b4b4;
  font-size: 14px;
  font-weight: 700;
`;

const Desc = styled.div`
  margin: 10px 0px;
  padding-left: 10px;
  border-left: 2px solid white;
  line-height: 1.5;
`;

const LinkButton = styled.button`
  font-weight: 700;
  padding: 2px 12px;
  background-color: #ffffff;
  border-radius: 12px;
  color: black;

  :hover {
    background-color: #d6d6d6;
  }
`;

const Features = styled.div`
  margin: 10px 0px;
  line-height: 1.5;

  p::before {
    content: "·";
    margin-right: 5px;
  }
`;

export default Projects;
