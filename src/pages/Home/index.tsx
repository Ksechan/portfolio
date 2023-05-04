import { useState } from 'react';
import S from './style';
import { projectList } from '@/constants';
import PageInformation from './components/PageInformation';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const onClickPageHandler = (id: number) => {
    setCurrentPage(id);
  };
  return (
    <>
      <S.Container>
        <S.LeftBlockWrap>
          <S.HomeLink onClick={() => onClickPageHandler(0)}>
            {projectList[0].title}
          </S.HomeLink>
          <S.LeftBlock>
            {projectList.map((item) => {
              if (item.id > 0 && item.id < 4) {
                return (
                  <h3 key={item.id} onClick={() => onClickPageHandler(item.id)}>
                    {item.title}
                  </h3>
                );
              }
              return;
            })}
          </S.LeftBlock>
        </S.LeftBlockWrap>
        <S.CenterBlock>
          <PageInformation item={projectList[currentPage]} />
        </S.CenterBlock>
        <S.RightBlock>
          {projectList.map((item) => {
            if (item.id >= 4) {
              return (
                <h3 key={item.id} onClick={() => onClickPageHandler(item.id)}>
                  {item.title}
                </h3>
              );
            }
            return;
          })}
        </S.RightBlock>
      </S.Container>
    </>
  );
};

export default Home;
