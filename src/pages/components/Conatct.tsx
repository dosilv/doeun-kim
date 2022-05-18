import styled from "styled-components";
import ContentsWrapper from "./ContentsWrapper";

interface propTypes {
  setIndex: (index: number) => void;
}

const Contact = ({ setIndex }: propTypes) => {
  const contactList = [
    ["Phone", "01029288613"],
    ["Email", "do.silver2@gmail.com"],
    ["Blog", "https://velog.io/@dosilv"],
    ["GitHub", "https://github.com/dosilv"],
  ];
  return (
    <ContentsWrapper
      title="Contact"
      child={
        <>
          <ProfileWrapper src="/assets/profile.jpeg" />
          <TextWrapper>
            {contactList.map((contact, idx) => (
              <Text key={idx}>
                <Lable>{contact[0]}</Lable>
                <Detail
                  onClick={
                    contact[1].startsWith("http")
                      ? () => window.open(contact[1])
                      : undefined
                  }
                  clickable={contact[1].startsWith("http")}
                >
                  {contact[1]}
                </Detail>
              </Text>
            ))}
          </TextWrapper>
        </>
      }
      bgColor="#ceabab"
      setIndex={setIndex}
    />
  );
};

const ProfileWrapper = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;

  @media ${({ theme }) => theme.mobile} {
    width: 150px;
    height: 150px;
  }
`;

const TextWrapper = styled.div`
  margin-left: 40px;
  margin-top: 40px;

  * {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.mobile} {
    margin-left: 20px;

    * {
      font-size: 16px;
    }
  }
`;

const Text = styled.div`
  line-height: 1.8;
`;

const Lable = styled.span`
  font-weight: 700;
  width: 80px;
  display: inline-block;

  @media ${({ theme }) => theme.mobile} {
    width: 65px;
  }
`;

const Detail = styled.button<{ clickable: boolean }>`
  font-weight: 300;
  cursor: ${(props) => (props.clickable ? "pointer" : "text")};
`;

export default Contact;
