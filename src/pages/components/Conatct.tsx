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
          <ProfileWrapper src="/assets/profile2.jpeg" />
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
                >
                  {contact[1]}
                </Detail>
              </Text>
            ))}
          </TextWrapper>
        </>
      }
      bgColor="#daaeae"
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

    @media ${({ theme }) => theme.mobile} {
      font-size: 16px;
    }
  }
`;

const Text = styled.div`
  line-height: 1.8;
`;

const Lable = styled.span`
  font-weight: 700;
`;

const Detail = styled.button`
  font-weight: 300;
`;

export default Contact;
