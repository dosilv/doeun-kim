import { useEffect, useState } from "react";
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

  useEffect(() => {
    interval();
  }, []);

  return (
    <FirstHalf>
      <NameWrapper>
        <p>KIM</p>
        <p>DO</p>
        <p>EUN</p>
      </NameWrapper>
      <ChangingText>
        <p>{front}</p>
        <p>{dev}</p>
      </ChangingText>
    </FirstHalf>
  );
};

const FirstHalf = styled.div`
  ${({ theme }) => theme.flexColumnSet()}
  position: relative;
  width: 40%;

  @media ${({ theme }) => theme.mobile} {
    width: 100vw;
    height: 80vh;
    padding: 30px;
  }
`;

const NameWrapper = styled.div`
  width: fit-content;
  font-size: 200px;
  font-weight: 700;
  background-size: 400%;
  background-image: linear-gradient(60deg, #baafd6, #f1cdab);
  animation: wave 4s ease-in-out 0s infinite normal;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;

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
