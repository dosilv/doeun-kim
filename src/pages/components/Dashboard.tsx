import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Contact from "./Conatct";
import CategoryMenu from "./CategoryMenu";
import Introduce from "./Introduce";
import Skills from "./Skills";
import Projects from "./Projects";

const Dashboard = () => {
  const [index, setIndex] = useState(-1);
  const category = ["Contact", "Introduce", "Skills", "Projects"];
  const contents = [
    <Contact setIndex={setIndex} />,
    <Introduce setIndex={setIndex} />,
    <Skills setIndex={setIndex} />,
    <Projects setIndex={setIndex} />,
  ];

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ref.current!.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
          console.log("Heee");
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0,
      rootMargin: "-5%",
    });

    observer.observe(ref.current!);
  }, []);

  return (
    <Wrapper ref={ref}>
      <CategoryWrapper>
        {category.map((cat, idx) => (
          <CategoryMenu
            key={idx}
            index={idx}
            label={cat}
            curIndex={index}
            setIndex={setIndex}
          />
        ))}
      </CategoryWrapper>
      {index > -1 && contents[index]}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet()}
  position: relative;
  width: 60%;
  height: 100vh;
  background-size: 400%;
  background-image: linear-gradient(60deg, #baafd6, #f1cdab);
  animation: wave 4s ease-in-out 0s infinite normal;
  scroll-margin-top: 0;

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
