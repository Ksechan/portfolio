import styled from 'styled-components';
import { visibleAnimation } from '../style';

const S = {
  SecondSection: styled.section`
    width: 100%;
    animation: ${visibleAnimation} 0.5s;
    transition: 1s;
    display: flex;
    padding: 100px 0 0 60px;
    margin-bottom: 15em;

    @media screen and (max-width: 1919px) {
      padding: 80px 0 0 50px;
    }

    @media screen and (max-width: 1279px) {
      padding: 70px 0 0 40px;
    }

    @media screen and (max-width: 1079px) {
      padding: 60px 0 0 20px;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 12em;
      padding: 60px 0 0 0px;
    }

    @media screen and (max-width: 480px) {
      flex-direction: column;
      margin-bottom: 8em;
    }
  `,

  SecondSectionName: styled.h3`
    font-size: 6rem;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.color.primary};
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 48px;
    margin-left: 80px;

    @media screen and (max-width: 1919px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 1279px) {
      font-size: 4.5rem;
    }

    @media screen and (max-width: 1079px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      margin-left: 16px;
      margin-bottom: 10px;
    }
  `,

  SecondSectionTitleWrap: styled.div`
    padding: 20px 0 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media screen and (max-width: 1079px) {
      padding: 20px 0 0 0px;
    }
  `,

  SecondSectionImgWrap: styled.div``,

  SecondSectionWebImgWrap: styled.div`
    position: relative;
    margin-bottom: 20em;

    @media screen and (max-width: 1919px) {
      margin-bottom: 17em;
    }

    @media screen and (max-width: 1279px) {
      margin-bottom: 10em;
    }

    @media screen and (max-width: 1079px) {
      margin-bottom: 2em;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 1em;
    }
  `,

  SecondSectionImg: styled.img`
    width: 400px;
    transform: rotate(-5deg);

    @media screen and (max-width: 1919px) {
      width: 350px;
    }

    @media screen and (max-width: 1279px) {
      width: 300px;
    }

    @media screen and (max-width: 1080px) {
      width: 250px;
    }

    @media screen and (max-width: 768px) {
      width: 200px;
      margin-bottom: 20px;
    }
  `,

  SecondSectionWebImg01: styled.img<{
    noShadow?: boolean;
    school?: boolean;
  }>`
    width: ${({ school }) => (school ? 330 : 800)}px;
    position: absolute;
    top: 180px;
    left: 50px;
    z-index: 2;
    box-shadow: ${({ noShadow }) =>
      noShadow ? '0px' : '-5px -10px 10px rgba(0, 0, 0, 0.3)'};

    @media screen and (max-width: 1919px) {
      width: ${({ school }) => (school ? 270 : 650)}px;
      top: 150px;
      left: 35px;
    }

    @media screen and (max-width: 1279px) {
      width: ${({ school }) => (school ? 220 : 500)}px;
      top: 120px;
      left: 30px;
    }

    @media screen and (max-width: 1080px) {
      width: ${({ school }) => (school ? 200 : 410)}px;
      top: 100px;
      left: 25px;
    }

    @media screen and (max-width: 768px) {
      width: ${({ school }) => (school ? 150 : 210)}px;
      top: ${({ school }) => (school ? 3 : 80)}px;
      left: ${({ school }) => (school ? 210 : 200)}px;
    }

    @media screen and (max-width: 480px) {
      width: ${({ school }) => (school ? 130 : 180)}px;
      top: ${({ school }) => (school ? 10 : 70)}px;
      left: ${({ school }) => (school ? 190 : 155)}px;
    }
  `,

  SecondSectionWebImg02: styled.img`
    width: 800px;
    transform: rotate(-5deg);

    @media screen and (max-width: 1919px) {
      width: 650px;
    }

    @media screen and (max-width: 1279px) {
      width: 500px;
    }

    @media screen and (max-width: 1080px) {
      width: 410px;
    }

    @media screen and (max-width: 768px) {
      width: 210px;
    }

    @media screen and (max-width: 480px) {
      width: 180px;
    }
  `,
};

export default S;
