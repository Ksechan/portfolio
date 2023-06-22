import styled from 'styled-components';
import { ProjectListType } from '@/types';
import { useNavigate } from 'react-router-dom';

export interface ProjectListProps {
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
    margin-bottom: 32px;

    @media screen and (max-width: 1919px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 1023px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
      display: none;
    }
  `,

  Description: styled.h4`
    font-size: 2.25rem;
    color: #ffeee4;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 3rem;

    @media screen and (max-width: 1919px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 1023px) {
      font-size: 1.5rem;
      line-height: 2.25rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
      text-align: center;
      line-height: 1.5rem;
    }

    @media screen and (max-width: 480px) {
      display: none;
    }
  `,

  Description02: styled.h4`
    font-size: 2.25rem;
    color: #ffeee4;
    font-weight: 500;

    @media screen and (max-width: 1919px) {
      font-size: 1.9rem;
    }

    @media screen and (max-width: 1023px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    @media screen and (max-width: 480px) {
      display: none;
    }
  `,

  Button: styled.button`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color.lightGray};
    color: ${({ theme }) => theme.color.primary};
    border-radius: 8px;
    font-size: 1.75rem;
    cursor: pointer;
    padding: 8px 24px;
    margin-top: 1.5em;

    @media screen and (max-width: 1919px) {
      font-size: 1.5rem;
      padding: 6px 20px;
    }

    @media screen and (max-width: 1023px) {
      font-size: 1.25rem;
      padding: 6px 20px;
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      padding: 4px 12px;
      margin-top: 1em;
    }

    @media screen and (max-width: 480px) {
      display: none;
    }
  `,
};

const PageInformation = ({ item }: ProjectListProps) => {
  const navigate = useNavigate();
  const onPageHandler = () => {
    if (item.id !== 0) {
      navigate('/project', { state: { item } });
    } else {
      navigate('/mypage');
    }
  };

  return (
    <S.Content>
      <S.Title>{item.title}</S.Title>
      <S.Description>{item.description}</S.Description>
      {item.description02 !== undefined && (
        <S.Description02>{item.description02}</S.Description02>
      )}
      <S.Button onClick={onPageHandler}>더보기</S.Button>
    </S.Content>
  );
};

export default PageInformation;
