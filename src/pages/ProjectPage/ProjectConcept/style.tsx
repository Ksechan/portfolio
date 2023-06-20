import styled from 'styled-components';
import { visibleAnimation } from '../style';

const S = {
  SecondSection: styled.section`
    width: 100%;
    animation: ${visibleAnimation} 0.5s;
    transition: 1s;
    display: flex;
    padding: 100px 0 0 60px;
  `,

  SecondSectionName: styled.h3`
    font-size: 6rem;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.color.primary};
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 48px;
    margin-left: 80px;
  `,

  SecondSectionTitleWrap: styled.div`
    padding: 20px 0 300px 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,

  SecondSectionImgWrap: styled.div``,

  SecondSectionWebImgWrap: styled.div`
    position: relative;
  `,

  SecondSectionImg: styled.img`
    width: 400px;
    transform: rotate(-5deg);
  `,

  SecondSectionWebImg01: styled.img<{ width?: number; noShadow?: boolean }>`
    width: ${({ width }) => (width ? width : 800)}px;
    position: absolute;
    top: 200px;
    left: 50px;
    z-index: 2;
    box-shadow: ${({ noShadow }) =>
      noShadow ? '0px' : '-5px -10px 10px rgba(0, 0, 0, 0.3)'};
  `,

  SecondSectionWebImg02: styled.img`
    width: 800px;
    transform: rotate(-5deg);
  `,
};

export default S;
