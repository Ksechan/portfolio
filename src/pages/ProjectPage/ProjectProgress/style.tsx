import styled from 'styled-components';
import { visibleAnimation } from '../style';

const S = {
  ThirdSectionWrap: styled.section`
    width: 100%;
    height: auto;
    margin-bottom: 15em;
  `,

  ThirdSection: styled.div<{ right?: boolean }>`
    width: 100%;
    animation: ${visibleAnimation} 0.5s;
    display: flex;
    justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
    padding-top: 100px;
    margin-bottom: 10em;

    @media screen and (max-width: 1919px) {
      padding-top: 80px;
    }

    @media screen and (max-width: 1079px) {
      padding-top: 60px;
    }

    @media screen and (max-width: 768px) {
      padding-top: 40px;
      flex-direction: column;
    }
  `,

  ThirdSectionNameWrap: styled.div`
    padding: 10em 0 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media screen and (max-width: 1919px) {
      padding: 6em 0 0 30px;
    }

    @media screen and (max-width: 1279px) {
      padding: 4em 0 0 30px;
    }

    @media screen and (max-width: 1079px) {
      padding: 2em 0 0 30px;
    }

    @media screen and (max-width: 768px) {
      padding: 1em 0 0 0px;
      align-items: center;
    }
  `,

  ThirdSectionName: styled.h3<{
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
  }>`
    font-size: 6rem;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.color.primary};
    font-family: 'Roboto Condensed', sans-serif;
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

    @media screen and (max-width: 1079px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  `,

  ThirdSectionImageWrap: styled.div`
    display: flex;

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
      align-items: center;
      justify-content: center;
      margin-top: 12px;
    }

    @media screen and (max-width: 480px) {
      font-size: 2rem;
      flex-direction: column;
    }
  `,

  ThirdSectionImage: styled.img<{
    marginTop?: number;
    marginRight?: number;
    marginLeft?: number;
    width?: number;
    height?: number;
  }>`
    width: ${({ width }) => (width ? width : 400)}px;
    height: ${({ height }) => (height ? height : 760)}px;
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;
    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)}px;
    border-radius: 20px;

    @media screen and (max-width: 1919px) {
      width: ${({ width }) => (width ? width : 320)}px;
      height: ${({ height }) => (height ? height : 630)}px;
    }

    @media screen and (max-width: 1279px) {
      width: ${({ width }) => (width ? width : 280)}px;
      height: ${({ height }) => (height ? height : 560)}px;
    }

    @media screen and (max-width: 1079px) {
      width: ${({ width }) => (width ? width : 220)}px;
      height: ${({ height }) => (height ? height : 430)}px;
    }

    @media screen and (max-width: 768px) {
      width: ${({ width }) => (width ? width : 200)}px;
      height: ${({ height }) => (height ? height : 400)}px;
    }

    @media screen and (max-width: 480px) {
      margin-bottom: 12px;
    }
  `,

  ThirdSectionSubImage: styled.img`
    width: 350px;
    height: 640px;
    margin-right: 20px;
    border-radius: 20px;

    @media screen and (max-width: 1919px) {
      width: 310px;
      height: 620px;
    }

    @media screen and (max-width: 1279px) {
      width: 280px;
      height: 560px;
    }

    @media screen and (max-width: 1079px) {
      width: 220px;
      height: 480px;
      margin-right: 12px;
    }

    @media screen and (max-width: 768px) {
      width: 200px;
      height: 400px;
    }

    @media screen and (max-width: 480px) {
      margin-right: 0px;
      margin-bottom: 12px;
    }
  `,

  ThirdSectionWebImage: styled.img`
    width: 1000px;
    height: 600px;
    border-radius: 8px;

    @media screen and (max-width: 1919px) {
      width: 750px;
      height: 510px;
    }

    @media screen and (max-width: 1279px) {
      width: 600px;
      height: 380px;
    }

    @media screen and (max-width: 1079px) {
      width: 390px;
      height: 260px;
      margin-right: 12px;
    }

    @media screen and (max-width: 768px) {
      width: 460px;
      height: auto;
    }

    @media screen and (max-width: 468px) {
      width: 100%;
      height: auto;
    }
  `,

  ThirdSectionIndependentImageWrap: styled.div`
    display: flex;
    position: relative;
    justify-content: center;
  `,

  ThirdSectionWebIndependentImage: styled.img<{
    marginTop?: number;
    marginLeft?: number;
    absolute?: boolean;
  }>`
    width: 600px;
    height: 400px;
    margin-top: ${({ absolute }) => (absolute ? 0 : 150)}px;
    margin-left: ${({ absolute }) => (absolute ? 0 : 240)}px;
    border-radius: 8px;
    position: ${({ absolute }) => (absolute ? 'absolute' : '')};
    top: ${({ absolute }) => (absolute ? 20 : 0)}px;
    box-shadow: ${({ absolute }) =>
      absolute ? '5px 10px 10px rgba(0, 0, 0, 0.3)' : '0px'};

    @media screen and (max-width: 1919px) {
      width: 500px;
      height: 320px;
      top: ${({ absolute }) => (absolute ? 10 : 0)}px;
      margin-top: ${({ absolute }) => (absolute ? 0 : 100)}px;
      margin-left: ${({ absolute }) => (absolute ? 0 : 250)}px;
    }

    @media screen and (max-width: 1279px) {
      width: 450px;
      height: 280px;
      top: ${({ absolute }) => (absolute ? 0 : 0)}px;
      margin-top: ${({ absolute }) => (absolute ? 0 : 80)}px;
      margin-left: ${({ absolute }) => (absolute ? 0 : 150)}px;
    }

    @media screen and (max-width: 1079px) {
      width: 320px;
      height: 180px;
      top: ${({ absolute }) => (absolute ? 0 : 0)}px;
      margin-top: ${({ absolute }) => (absolute ? 0 : 80)}px;
      margin-left: ${({ absolute }) => (absolute ? 0 : 80)}px;
    }

    @media screen and (max-width: 480px) {
      width: 270px;
      height: 150px;
      margin-left: ${({ absolute }) => (absolute ? 0 : 50)}px;
    }
  `,

  ThirdSectionDescription: styled.p<{ marginRight?: number }>`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.lightGray};
    max-width: 800px;
    line-height: 2.5rem;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;
    white-space: pre-wrap;

    @media screen and (max-width: 1919px) {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }

    @media screen and (max-width: 1279px) {
      font-size: 1.2rem;
      line-height: 2rem;
    }

    @media screen and (max-width: 1079px) {
      font-size: 0.9rem;
      line-height: 1.5rem;
      max-width: 350px;
    }
  `,
};

export default S;
``;
