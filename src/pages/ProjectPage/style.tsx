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
  // finish section
  FinishSection: styled.section`
    width: 100%;
    height: 100vh;
    animation: ${visibleAnimation} 0.5s;
    padding: 160px 0 160px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  FinishSectionTitle: styled.h3`
    font-size: 6rem;
    color: ${({ theme }) => theme.color.primary};
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 60px;
  `,

  FinishSectionContact: styled.p`
    font-size: 2.25rem;
    color: ${({ theme }) => theme.color.lightGray};
    margin-bottom: 40px;
  `,

  FinishSectionContactEmail: styled.link`
    font-size: 2.25rem;
    color: ${({ theme }) => theme.color.lightGray};
    margin-bottom: 30px;
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
  `,
};

export default CommonS;
