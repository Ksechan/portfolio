import styled from 'styled-components';
import { visibleAnimation } from '../style';

const S = {
  ThirdSectionWrap: styled.section`
    width: 100%;
    height: auto;
    padding-top: 160px;
  `,

  ThirdSection: styled.div<{ right?: boolean }>`
    width: 100%;
    animation: ${visibleAnimation} 0.5s;
    display: flex;
    justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
    padding-top: 100px;
  `,

  ThirdSectionNameWrap: styled.div`
    padding: 160px 0 0 30px;
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
  `,

  ThirdSectionImageWrap: styled.div`
    height: 800px;
    display: flex;
    padding-top: 40px;
    // margin-left: 120px;
  `,

  ThirdSectionImage: styled.img`
    width: 400px;
  `,

  ThirdSectionDescription: styled.p<{ marginRight?: number }>`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.lightGray};
    max-width: 800px;
    line-height: 40px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;
  `,
};

export default S;
