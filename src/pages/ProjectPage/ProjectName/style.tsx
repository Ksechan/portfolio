import styled from 'styled-components';
import { visibleAnimation } from '../style';

const S = {
  FirstSection: styled.section`
    width: 100%;
    animation: ${visibleAnimation} 0.5s;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15em;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 12em;
    }

    @media screen and (max-width: 480px) {
      flex-direction: column;
      margin-bottom: 8em;
    }
  `,

  FirstSectionNameWrap: styled.div`
    padding: 60px 0 0 30px;

    @media screen and (max-width: 1279px) {
      padding: 40px 0 0 20px;
    }

    @media screen and (max-width: 768px) {
      padding: 20px 0 0 16px;
    }
  `,

  FirstSectionName: styled.h3`
    font-size: 6rem;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.color.primary};
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 30px;

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
    }
  `,

  FirstSectionWebName: styled.h3`
    font-size: 6rem;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.color.primary};
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 30px;
    margin-right: 40px;

    @media screen and (max-width: 1919px) {
      font-size: 3.5rem;
    }

    @media screen and (max-width: 1279px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 1079px) {
      font-size: 2.5rem;
    }
  `,

  FirstSectionTitle: styled.h2`
    font-size: 4.5rem;
    white-space: pre-wrap;
    color: #e1e1e1;
    margin-bottom: 40px;

    @media screen and (max-width: 1919px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 1279px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 1079px) {
      font-size: 1.5rem;
    }
  `,

  FirstSectionImageWrap: styled.div`
    height: 800px;
    display: flex;
    padding-top: 40px;
    justify-content: center;

    @media screen and (max-width: 1919px) {
      height: 700px;
    }

    @media screen and (max-width: 1279px) {
      height: 600px;
    }

    @media screen and (max-width: 1079px) {
      height: 500px;
    }

    @media screen and (max-width: 1079px) {
      height: auto;
    }

    @media screen and (max-width: 480px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  `,

  FirstSectionImage: styled.img<{ marginRight?: number }>`
    width: 400px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;

    @media screen and (max-width: 1919px) {
      width: 350px;
    }

    @media screen and (max-width: 1279px) {
      width: 300px;
    }

    @media screen and (max-width: 1079px) {
      width: 225px;
      margin-right: 10px;
    }

    @media screen and (max-width: 768px) {
      width: 225px;
    }

    @media screen and (max-width: 480px) {
      margin-bottom: 12px;
    }
  `,

  FirstSectionWebImage: styled.img<{ marginRight?: number }>`
    width: 1100px;
    height: auto;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;
    border-radius: 12px;
    object-fit: contain;
    border-radius: 12px;

    @media screen and (max-width: 1919px) {
      width: 900px;
    }

    @media screen and (max-width: 1279px) {
      width: 750px;
    }

    @media screen and (max-width: 1079px) {
      width: 480px;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `,

  FirstSectionStack: styled.p`
    font-size: 1.75rem;
    color: ${({ theme }) => theme.color.lightGray};
    max-width: 500px;
    margin-bottom: 20px;

    @media screen and (max-width: 1919px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 1279px) {
      font-size: 1.25rem;
      margin-bottom: 16px;
    }

    @media screen and (max-width: 1079px) {
      font-size: 1rem;
      margin-bottom: 12px;
    }
  `,
};

export default S;
