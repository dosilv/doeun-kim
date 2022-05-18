import { useEffect, useState } from "react";
import styled from "styled-components";

interface propTypes {
  setIndex: (index: number) => void;
}

interface project {
  title: string;
  date: string;
  desc: string;
  link: string[];
  linkName: string[];
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
      link: ["https://wena-landing-page.web.app/"],
      linkName: ["Landing Page"],
      features: [
        "Flutter로 구현한 하이브리드 앱",
        "GetX를 이용한 상태관리 및 UI/logic 분리",
        "JsonSerializable, Freezed를 이용한 데이터 클래스 관리",
        "Agora API를 이용한 앱내 음성 통화 기능 구현",
        "WebSocket을 통한 실시간 통화 매칭 기능 구현",
        "Fastlane으로 자동 배포 세팅",
      ],
      color: "orange",
    },
    {
      title: "Woobo",
      date: "21.08-22.12",
      desc: "요양시설과 보호자간의 소통을 돕는 앱",
      link: ["https://woobocare.com/"],
      linkName: ["Landing Page"],
      features: [
        "Flutter로 구현한 하이브리드 앱",
        "Provider를 이용한 상태관리",
        "Firebase Messaging, Flutter Local Notification을 이용한 푸시 알람 구현",
        "Flutter Secure Storage를 이용한 자동 로그인",
        "랜딩페이지(웹) 또한 플러터로 개발 및 배포",
      ],
      color: "#87efff",
    },
    {
      title: "Drag&Drop / Zoom&Pan",
      date: "21.08-22.12",
      desc: "라이브러리 없이, React DOM 조작만으로 마우스 및 휠 컨트롤 이벤트를 구현해 본 미니프로젝트",
      link: [
        "https://velog.io/@dosilv/React-Drag-and-Drop-기능-구현하기",
        "https://velog.io/@dosilv/React-Zoom-and-Pan-기능-구현하기",
      ],
      linkName: ["Drag&Drop", "Zoom&Pan"],
      features: [],
      color: "#c3b8f1",
    },
    {
      title: "Create101",
      date: "21.05-21.06",
      desc: "Class101 웹 사이트 클론코딩",
      link: ["https://velog.io/@dosilv/2차-프로젝트-후기-Create101"],
      linkName: ["프로젝트 회고"],
      features: [
        "Recoil을 활용한 비동기 데이터 상태관리",
        "Media query를 이용한 데스크탑/모바일 반응형 레이아웃 구현",
        "Intersection Observer API를 사용해 인터렉티브한 스크롤 이벤트 구현",
        "FileReader API, FormData를 활용한 이미지 업로드 기능 구현",
      ],
      color: "orange",
    },
    {
      title: "Wesop",
      date: "21.05",
      desc: "Aesop 웹 사이트 클론코딩",
      link: ["https://velog.io/@dosilv/1차-프로젝트-Aesop-클론-프로젝트-후기"],
      linkName: ["프로젝트 회고"],
      features: [
        "JWT, SessionStorage를 이용한 로그인/로그아웃 구현",
        "React와 SCSS를 이용한 애니메이션 및 이미지 캐러셀 구현",
        "Fetch API를 이용한 장바구니 사이클링 구현",
      ],
      color: "#7ad388",
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
          {projectList.slice(0, 2).map((project, idx) => (
            <Item key={idx}>
              <Title color={project.color}>{project.title}</Title>
              <Date>{project.date}</Date>
              <Desc>
                <p>{project.desc}</p>
                {project.link.map((link, idx) => (
                  <LinkButton key={idx} onClick={() => window.open(link)}>
                    {project.linkName[idx]} ‣
                  </LinkButton>
                ))}
              </Desc>
              <Features>
                {project.features.map((feature, idx) => (
                  <p key={idx}>{feature}</p>
                ))}
              </Features>
            </Item>
          ))}
        </Colume>
        <Colume>
          {projectList.slice(2).map((project, idx) => (
            <Item key={idx}>
              <Title color={project.color}>{project.title}</Title>
              <Date>{project.date}</Date>
              <Desc>
                <p>{project.desc}</p>
                {project.link.map((link, idx) => (
                  <LinkButton key={idx} onClick={() => window.open(link)}>
                    {project.linkName[idx]} ‣
                  </LinkButton>
                ))}
              </Desc>
              <Features>
                {project.features.map((feature, idx) => (
                  <p key={idx}>{feature}</p>
                ))}
              </Features>
            </Item>
          ))}
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
  overflow: scroll;

  * {
    color: white;
    opacity: ${(props) => (props.close ? "0%" : "100%")};
    transition: all 1s;
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

const Colume = styled.div`
  ${({ theme }) => theme.flexColumnSet("flex-start", "flex-start")}
`;

const Item = styled.div`
  margin: 20px 40px;

  @media ${({ theme }) => theme.mobile} {
    margin: 30px 45px;
  }
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
  margin: 2px;
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
