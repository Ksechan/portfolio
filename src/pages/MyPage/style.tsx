import styled from 'styled-components';

const S = {
  Container: styled.div`
    max-width: 46.5rem;
    padding: 0.8125rem 1.21875rem 2.4375rem 1.21875rem;
    margin: 0 auto;
  `,

  SectionTitle: styled.h3`
    font-size: 3rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.color.primary};
    border-left: 6px solid ${({ theme }) => theme.color.primary};
    padding-left: 30px;
    margin: 2em 0 1.5em;
  `,

  Title: styled.h1`
    font-size: 3rem;
    color: #ffeee4;
    font-weight: 500;
    margin-bottom: 0.5em;
  `,

  ListWrap: styled.div`
    display: flex;
    align-items: center;
    margin: 2em 0 3em 0;

    p {
      font-size: 1.5rem;
      color: #ffeee4;
    }
  `,

  ListTitle: styled.p`
    font-size: 2rem;
    color: #ffeee4;
  `,

  ListTextWrap: styled.ul`
    margin: 0 8px;
    text-align: center;
  `,

  ListText: styled.li`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.primary};
    line-height: 2em;
  `,

  Table: styled.table`
    width: 100%;
    margin-top: 3.5em;

    span {
      color: ${({ theme }) => theme.color.lightGray};
    }

    td:first-child {
      text-align: right;
      padding-right: 30px;
      color: #ffeee4;
    }

    td {
      border-top: 1px solid ${({ theme }) => theme.color.gray};
      border-bottom: 1px solid ${({ theme }) => theme.color.gray};
      padding: 16px 10px;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.color.lightGray};
    }
  `,

  DescText: styled.p`
    font-size: 1rem;
    color: #ffeee4;
    line-height: 2rem;
    white-space: pre-wrap;
  `,

  ProjectTitle: styled.button`
    font-size: 2rem;
    color: ${({ theme }) => theme.color.primary};
    margin-top: 3em;
    background-color: transparent;
    border: none;
    cursor: pointer;
  `,
};

export default S;
