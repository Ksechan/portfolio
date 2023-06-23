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
  Container: styled.div<{ animation?: boolean }>`
    background-color: ${({ theme }) => theme.color.bg};
    width: 100%;
    height: 100vh;
    padding: 40px;
    overflow: ${({ animation }) => (animation ? 'hidden' : 'auto')};

    @media screen and (max-width: 780px) {
      padding: 20px;
    }
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

    @media screen and (max-width: 1919px) {
      font-size: 4.5rem;
    }

    @media screen and (max-width: 1279px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 1080px) {
      font-size: 3.5rem;
    }
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

    @media screen and (max-width: 1919px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 1279px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 1079px) {
      font-size: 1rem;
      max-width: 400px;
    }

    @media screen and (max-width: 768px) {
      margin-left: 30px;
      font-size: 0.8rem;
      line-height: 24px;
    }
  `,
  // finish section
  FinishSection: styled.section`
    width: 100%;
    animation: ${visibleAnimation} 0.5s;
    padding: 2em 0 10em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  FinishSectionTitle: styled.h3`
    font-size: 6rem;
    color: ${({ theme }) => theme.color.primary};
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 1.3em;

    @media screen and (max-width: 1919px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 1279px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 1079px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 780px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
    }
  `,

  FinishSectionContact: styled.p`
    font-size: 2rem;
    color: ${({ theme }) => theme.color.lightGray};
    margin-bottom: 40px;

    @media screen and (max-width: 1919px) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 1279px) {
      font-size: 1.6rem;
    }

    @media screen and (max-width: 1079px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 780px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  `,

  FinishSectionButton: styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.color.primary};
    font-size: 1.75rem;
    margin-top: 48px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 8px;
    border: none;
    padding: 8px 16px;
    :hover {
      background-color: ${({ theme }) => theme.color.gray};
    }

    @media screen and (max-width: 1919px) {
      font-size: 1.6rem;
    }

    @media screen and (max-width: 1279px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 1079px) {
      font-size: 1.3rem;
    }
  `,
};

export default CommonS;
