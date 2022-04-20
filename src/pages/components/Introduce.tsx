import styled from "styled-components";
import ContentsWrapper from "./ContentsWrapper";

interface propTypes {
  setIndex: (index: number) => void;
}

const Introduce = ({ setIndex }: propTypes) => {
  return (
    <ContentsWrapper
      title="Introduce"
      child={
        <>
          <Emoji>💻 💗</Emoji>
          <Desc>
            영문과를 졸업한 문과생 비전공자였으나, 개발에 대한 호기심과 관심이
            저를 코딩 부트캠프로 이끌었습니다. 적성을 찾았다고 자신있게 말할
            만큼 무척 즐겁게 웹 개발을 공부했지만, 수료 직후 발을 들인 첫
            직장에서 어쩌다 앱 개발까지 도맡게 되었습니다. 그때 처음 만나게 된
            플러터와 혼자 고군분투하며 지금까지 두 개의 앱을 개발 및
            배포했습니다.
          </Desc>
          <Milestone>
            <p>
              📚 위코드 부트캠프 수료 <Date>2021.04~2021.07</Date>
            </p>
            <p>
              💼 프리즘39 인턴십 <Date>2021.06~2021.07</Date>
            </p>
            <p>
              📱{" "}
              <Link onClick={() => window.open("https://humilylab.com/")}>
                휴밀리랩
              </Link>{" "}
              프론트엔드 웹/앱 개발 <Date>2021.07~</Date>
            </p>
          </Milestone>
        </>
      }
      bgColor="#a5beac"
      setIndex={setIndex}
    />
  );
};

const Emoji = styled.p`
  font-size: 48px;
`;
const Desc = styled.div`
  margin: 40px 15%;
  padding: 10px 16px;
  border-radius: 10px;
  background-color: antiquewhite;
  line-height: 1.75;
`;

const Milestone = styled.div`
  line-height: 1.75;
  font-size: 16px;
`;

const Date = styled.span`
  color: white;
  font-size: 14px;
`;

const Link = styled.span`
  cursor: pointer;
`;

export default Introduce;
