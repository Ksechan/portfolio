import styled, { keyframes } from 'styled-components';

const textLeftAnimation = keyframes`
0%{
  transform: translateX(0%);
}
35%{ 
  transform: translateX(37%);
}
60%{ 
  transform: translateX(37%);
}
70%{
  transform: translateX(40%);
}
100%{
  transform: translateX(100%);
}
`;

const textRightAnimation = keyframes`
0%{
  transform: translateX(100%);
}
35%{ 
  transform: translateX(40%);
}
70%{ 
  transform: translateX(40%);
}
100%{
  transform: translateX(-50%);
}
`;

const S = {
  IntroTitle: styled.h3`
    color: #ed413e;
    font-size: 4rem;
    padding-top: 300px;
    white-space: pre-line;
    animation: ${textLeftAnimation} 2.5s;
    animation-fill-mode: forwards;
  `,
  IntroBigTitle: styled.h3`
    color: #ed413e;
    font-size: 6rem;
    white-space: pre-line;
    letter-spacing: 2px;
    animation: ${textRightAnimation} 2.5s;
    animation-fill-mode: forwards;
  `,
};

const IntroMessage = () => {
  return (
    <>
      <S.IntroTitle>HERE COMES A NEW</S.IntroTitle>
      <S.IntroBigTitle>PROJECT</S.IntroBigTitle>
    </>
  );
};

export default IntroMessage;
