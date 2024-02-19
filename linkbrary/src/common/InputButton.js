import { styled } from "styled-components";

const InputButton = styled.button`
  width: 80px;
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid var(--primary, #6d6afe);
  linear-gradient(to right, gra-purpleblue, skyblue);
  background-color: var(--white, #fff);
  margin: 60px auto 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1124px) {
    width: 80px;
  }
  @media (max-width: 774px) {
    width: 80px;
  }
`;

export default InputButton;
