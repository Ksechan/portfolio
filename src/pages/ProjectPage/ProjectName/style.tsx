import styled from 'styled-components';
import { visibleAnimation } from '../style';

const S = {
  FirstSection: styled.section`
    width: 100%;
    height: 100vh;
    animation: ${visibleAnimation} 0.5s;
    display: flex;
    justify-content: space-between;
  `,

  FirstSectionNameWrap: styled.div`
    padding: 60px 0 0 30px;
  `,

  FirstSectionName: styled.h3`
    font-size: 6rem;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.color.primary};
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 30px;
  `,

  FirstSectionWebName: styled.h3`
    font-size: 6rem;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.color.primary};
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 30px;
    margin-right: 40px;
  `,

  FirstSectionTitle: styled.h2`
    font-size: 4.5rem;
    white-space: pre-wrap;
    color: #e1e1e1;
    margin-bottom: 40px;
  `,

  FirstSectionImageWrap: styled.div`
    height: 800px;
    display: flex;
    padding-top: 40px;
    // margin-left: 120px;
  `,

  FirstSectionImage: styled.img<{ marginRight?: number }>`
    width: 400px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;
  `,

  FirstSectionWebImage: styled.img<{ marginRight?: number }>`
    width: 100%;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;
    border-radius: 12px;
  `,

  FirstSectionStack: styled.p`
    font-size: 1.75rem;
    color: ${({ theme }) => theme.color.lightGray};
    max-width: 500px;
    margin-bottom: 20px;
  `,
};

export default S;
