import { useState } from "react";
import styled from "styled-components";
import Contact from "./Conatct";
import IndexBox from "./IndexBox";
import Introduce from "./Introduce";

const Dashboard = () => {
  const [index, setIndex] = useState(-1);
  const category = ["Contact", "Introduce", "Skills", "Projects"];
  const contents = [
    <Contact setIndex={setIndex} />,
    <Introduce setIndex={setIndex} />,
  ];

  return (
    <SecondHalf>
      <CategoryWrapper>
        {category.map((cat, idx) => (
          <IndexBox
            key={idx}
            index={idx}
            label={cat}
            curIndex={index}
            setIndex={setIndex}
          />
        ))}
      </CategoryWrapper>
      {index > -1 && contents[index]}
    </SecondHalf>
  );
};

const SecondHalf = styled.div`
  ${({ theme }) => theme.flexColumnSet()}
  position: relative;
  width: 60%;
  height: 100vh;
  background-size: 400%;
  background-image: linear-gradient(60deg, #baafd6, #f1cdab);
  animation: wave 4s ease-in-out 0s infinite normal;

  @media ${({ theme }) => theme.mobile} {
    ${({ theme }) => theme.flexColumnSet()}
    width: 100vw;
    height: 100vh;
  }
`;

const CategoryWrapper = styled.div`
  ${({ theme }) => theme.posCenter()}
`;

export default Dashboard;
