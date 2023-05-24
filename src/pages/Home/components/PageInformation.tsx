import styled from 'styled-components';
import { ProjectListType } from '@/types';

interface ProjectListProps {
  item: ProjectListType;
}

const S = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h1`
    font-size: 4.5rem;
    color: ${({ theme }) => theme.color.primary};
    font-weight: 700;
    margin-bottom: 24px;
  `,

  Description: styled.h4`
    font-size: 2.25rem;
    color: #ffeee4;
    font-weight: 500;
  `,

  Description02: styled.h4`
    font-size: 2.25rem;
    color: #ffeee4;
    font-weight: 500;
  `,
};

const PageInformation = ({ item }: ProjectListProps) => {
  console.log(item);
  return (
    <S.Content>
      <S.Title>{item.title}</S.Title>
      <S.Description>{item.description}</S.Description>
      <S.Description02>{item.description02}</S.Description02>
    </S.Content>
  );
};

export default PageInformation;
