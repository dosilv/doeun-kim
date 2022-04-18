import styled from "styled-components";

interface propTypes {
  index: number;
  label: string;
  curIndex: number;
  setIndex: (index: number) => void;
}

const IndexBox = ({ index, label, curIndex, setIndex }: propTypes) => {
  return (
    <Index
      showAll={curIndex === -1}
      selected={index === curIndex}
      onClick={() => setIndex(index)}
    >
      {label}
    </Index>
  );
};

const Index = styled.div<{ showAll: boolean; selected: boolean }>`
  opacity: ${(props) => (props.showAll ? "100%" : "0%")};
  margin: 15px;
  padding: 0px 5px;
  font-size: 28px;
  font-weight: 300;
  transition: all 1s;
  cursor: pointer;

  &:hover {
    background-color: white;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 24px;
  }
`;
const ProjectTitle = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  font-size: 40px;
`;

export default IndexBox;
