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
          <Emoji>ππ»ββοΈππ» </Emoji>
          <Desc>
            μλ¬Έκ³Όλ₯Ό μ‘Έμν λ¬Έκ³Όμ λΉμ κ³΅μμμΌλ, κ°λ°μ λν νΈκΈ°μ¬κ³Ό κ΄μ¬μ΄
            μ λ₯Ό μ½λ© λΆνΈμΊ νλ‘ μ΄λμμ΅λλ€. μ μ±μ μ°Ύμλ€κ³  μμ μκ² λ§ν 
            λ§νΌ λ¬΄μ² μ¦κ²κ² μΉ κ°λ°μ κ³΅λΆνμ§λ§, μλ£ μ§ν λ°μ λ€μΈ μ²«
            μ§μ₯μμ μ΄μ©λ€ μ± κ°λ°κΉμ§ λλ§‘κ² λμμ΅λλ€. κ·Έλ μ²μ λ§λκ² λ
            νλ¬ν°μ νΌμ κ³ κ΅°λΆν¬νλ©° μ§κΈκΉμ§ λ κ°μ μ±μ κ°λ° λ°
            λ°°ν¬νμ΅λλ€.
          </Desc>
          <Milestone>
            <p>
              π μμ½λ λΆνΈμΊ ν μλ£ <Date>2021.04~2021.07</Date>
            </p>
            <p>
              πΌ νλ¦¬μ¦39 μΈν΄μ­ <Date>2021.06~2021.07</Date>
            </p>
            <p>
              π±{" "}
              <Link onClick={() => window.open("https://humilylab.com/")}>
                ν΄λ°λ¦¬λ©
              </Link>{" "}
              νλ‘ νΈμλ μΉ/μ± κ°λ° <Date>2021.07~</Date>
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
