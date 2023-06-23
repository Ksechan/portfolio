import styled from 'styled-components';

const S = {
  Container: styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    column-gap: 20px;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.bg};

    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr 0fr 1fr;
    }
  `,

  LeftBlockWrap: styled.div`
    display: flex;
    flex-direction: column;
  `,

  TitleBlock: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;

    h3 {
      transform-origin: center;
      text-align: center;
      color: ${({ theme }) => theme.color.lightGray};
      font-size: 1.875rem;
      cursor: pointer;
      padding: 16px 20px;
      transition: 0.2s;

      @media screen and (max-width: 1919px) {
        font-size: 1.45rem;
        padding: 10px 12px;
      }

      @media screen and (max-width: 1279px) {
        font-size: 1.3rem;
      }

      @media screen and (max-width: 768px) {
        font-size: 1rem;
        padding: 6px 8px;
      }
    }
    div {
      display: flex;
      justify-content: center;
    }
    h3:hover {
      background-color: ${({ theme }) => theme.color.lightGray};
      color: ${({ theme }) => theme.color.primary};
      border-radius: 10px;
    }
  `,

  CenterBlock: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  HomeLink: styled.h2`
    text-align: center;
    background-color: ${({ theme }) => theme.color.bg};
    margin-top: 30px;
    padding: 10px 0;
    cursor: pointer;
    color: ${({ theme }) => theme.color.lightGray};
    font-size: 1.5rem;

    @media screen and (max-width: 1919px) {
      font-size: 1.25rem;
      padding: 10px 12px;
    }

    @media screen and (max-width: 1279px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      padding: 6px 8px;
    }

    :hover {
      color: ${({ theme }) => theme.color.primary};
    }
  `,
};

export default S;
