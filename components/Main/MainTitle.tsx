import * as Styled from './MainTitle.styled';

const MainBackgroundImg = '/images/main-background.webp';

function MainTitle() {
  return (
    <Styled.Main>
      <Styled.MainBox>
        <Styled.MainTitle>
          <Styled.MainTitleEffect>세상의 모든 정보</Styled.MainTitleEffect>를<br />
          쉽게 저장하고 <Styled.MobileLineBreak /> 관리해 보세요
        </Styled.MainTitle>
        <Styled.MainLoginButton href="/signin">링크 추가하기</Styled.MainLoginButton>
        <Styled.MainBackImage src={MainBackgroundImg} alt="메인 배경 이미지" />
      </Styled.MainBox>
    </Styled.Main>
  );
}

export default MainTitle;
