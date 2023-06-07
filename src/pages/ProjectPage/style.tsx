import styled, { keyframes } from 'styled-components';

export const visibleAnimation = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const CommonS = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.color.bg};
    width: 100%;
    height: 100vh;
    padding: 40px;
  `,
  // common
  SectionNumber: styled.p<{
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
  }>`
    font-family: 'Poiret One', cursive;
    font-size: 6rem;
    color: ${({ theme }) => theme.color.lightGray};
    letter-spacing: -0.4rem;
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)}px;
  `,
  SectionDescription: styled.p<{
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
  }>`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.lightGray};
    max-width: 500px;
    line-height: 32px;
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)}px;
  `,
};

export default CommonS;
