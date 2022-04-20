import styled from "styled-components";

interface propTypes {
  index: number;
  label: string;
  curIndex: number;
  setIndex: (index: number) => void;
}

const CategoryMenu = ({ index, label, curIndex, setIndex }: propTypes) => {
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

const Index = styled.button<{ showAll: boolean; selected: boolean }>`
  display: block;
  opacity: ${(props) => (props.showAll ? "100%" : "0%")};
  margin: 30px 15px;
  padding: 0px 5px;
  font-size: 28px;
  font-weight: 700;
  transition: all 1s;
  cursor: pointer;
  color: white;

  &:hover {
    color: #2f2f2f;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 24px;
  }
`;
const ProjectTitle = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  font-size: 40px;
`;

export default CategoryMenu;
