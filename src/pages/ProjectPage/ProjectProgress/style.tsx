import styled from 'styled-components';
import { visibleAnimation } from '../style';

const S = {
  ThirdSection: styled.section`
    width: 100%;
    height: 100vh;
    animation: ${visibleAnimation} 0.5s;
    display: flex;
    padding-top: 160px;
  `,

  ThirdSectionNameWrap: styled.div`
    padding: 160px 0 0 30px;
  `,

  ThirdSectionName: styled.h3`
    font-size: 6rem;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.color.primary};
    font-family: 'Roboto Condensed', sans-serif;
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
};

export default S;
