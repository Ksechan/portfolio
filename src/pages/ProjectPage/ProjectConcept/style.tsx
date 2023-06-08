import styled from 'styled-components';
import { visibleAnimation } from '../style';

const S = {
  SecondSection: styled.section`
    width: 100%;
    height: 100vh;
    animation: ${visibleAnimation} 0.5s;
    transition: 1s;
    display: flex;
    padding: 40px 0 0 60px;
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
    padding: 20px 0 200px 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,

  SecondSectionImgWrap: styled.div``,

  SecondSectionImg: styled.img`
    width: 400px;
    transform: rotate(-5deg);
  `,
};

export default S;
