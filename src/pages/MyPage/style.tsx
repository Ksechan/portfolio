import styled from 'styled-components';

const S = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    padding: 40px;
  `,

  Title: styled.h3`
    color: ${({ theme }) => theme.color.primary};
  `,
};

export default S;
