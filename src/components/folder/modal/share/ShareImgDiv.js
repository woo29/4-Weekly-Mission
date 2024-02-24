import styled from "styled-components";
import ShareImg from "./ShareImg";
import ShareText from "./ShareText";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: none;
  background-color: inherit;

  &:hover {
    cursor: pointer;
  }
`;

function ShareImgDiv({ src, alt, text, handleClick }) {
  return (
    <StyledDiv onClick={handleClick}>
      <ShareImg src={src} alt={alt} />
      <ShareText>{text}</ShareText>
    </StyledDiv>
  );
}

export default ShareImgDiv;
