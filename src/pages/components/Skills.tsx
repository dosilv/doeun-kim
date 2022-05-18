import styled from "styled-components";
import ContentsWrapper from "./ContentsWrapper";

interface propTypes {
  setIndex: (index: number) => void;
}

const Skills = ({ setIndex }: propTypes) => {
  const skillList = [
    ["Dart/Flutter", "78"],
    ["HTML/CSS", "90"],
    ["React.js", "70"],
    ["TypeScript", "40"],
  ];
  return (
    <ContentsWrapper
      title="Skills"
      child={
        <>
          {skillList.map((skill) => (
            <Wrapper key={skill[0]}>
              {skill[0]}
              <SkillGauge>
                <GaugeFill point={parseInt(skill[1])} />
              </SkillGauge>
            </Wrapper>
          ))}
        </>
      }
      bgColor="#a5b9d5"
      setIndex={setIndex}
    />
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet("space-between")}
  width: 270px;
  margin: 10px;

  @media ${({ theme }) => theme.mobile} {
    width: 250px;
  }
`;

const SkillGauge = styled.div`
  width: 160px;
  height: 20px;
  background-color: aliceblue;
  border-radius: 20px;

  @media ${({ theme }) => theme.mobile} {
    width: 130px;
  }
`;

const GaugeFill = styled.div<{ point: number }>`
  width: ${(props) => props.point}%;
  height: 20px;
  background-color: #697398;
  border-radius: 20px;
  animation: fill 2s ease 0.5s 1 forwards;

  @keyframes fill {
    from {
      width: 0px;
    }
    to {
    }
  }
`;

export default Skills;
