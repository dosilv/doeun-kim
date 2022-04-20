import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Banner = () => {
  const [front, setFront] = useState("frontend");
  const [dev, setDev] = useState("developer");

  const shuffleWord = (word: string): string => {
    return [...word.split("")].sort(() => Math.random() - 0.5).join("");
  };

  const interval = () => {
    const intervalFront = setInterval(() => {
      setFront(shuffleWord("frontend"));
    }, 100);
    const intervalDev = setInterval(() => {
      setDev(shuffleWord("developer"));
    }, 100);
    setTimeout(() => {
      clearInterval(intervalFront);
      setFront("frontend");
    }, 1000);
    setTimeout(() => {
      clearInterval(intervalDev);
      setDev("developer");
    }, 2000);

    setTimeout(interval, 4000);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    interval();
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.scrollTo({ top: 0, behavior: "smooth" });
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
      <NameWrapper>
        KIM
        <br />
        DO
        <br />
        EUN
      </NameWrapper>
      <ChangingText>
        <p>{front}</p>
        <p>{dev}</p>
      </ChangingText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet()}
  position: relative;
  width: 40%;
  scroll-margin-top: 0;

  @media ${({ theme }) => theme.mobile} {
    width: 100vw;
    height: 100vh;
    padding: 30px;
  }
`;

const NameWrapper = styled.div`
  max-width: 100%;
  font-size: 200px;
  font-weight: 700;
  white-space: pre-wrap;

  background-image: linear-gradient(60deg, #baafd6, #f1cdab);
  background-size: 400%;
  background-clip: text;
  animation: wave 3s ease-in-out 0s infinite normal;
  box-decoration-break: clone;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;

  p {
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 140px;
  }

  @keyframes wave {
    0% {
      background-position: left;
    }
    50% {
      background-position: right;
    }
    100% {
      background-position: left;
    }
  }
`;

const ChangingText = styled.div`
  ${({ theme }) => theme.posCenterY()}
  left: 47%;
  color: black;
  font-size: 40px;
  font-weight: 200;
  letter-spacing: 10px;

  @media ${({ theme }) => theme.mobile} {
    left: 40%;
    font-size: 24px;
  }
`;

export default Banner;
