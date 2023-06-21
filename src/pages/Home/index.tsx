import { useState } from 'react';
import S from './style';
import { projectList } from '@/data';
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
          <S.TitleBlock>
            {projectList.map((item) => {
              if (item.id > 0 && item.id < 4) {
                return (
                  <div key={item.id}>
                    <h3
                      key={item.id}
                      onClick={() => onClickPageHandler(item.id)}
                    >
                      {item.title}
                    </h3>
                  </div>
                );
              }
              return;
            })}
          </S.TitleBlock>
        </S.LeftBlockWrap>
        <S.CenterBlock>
          <PageInformation item={projectList[currentPage]} />
        </S.CenterBlock>
        <S.TitleBlock>
          {projectList.map((item) => {
            if (item.id >= 4) {
              return (
                <div key={item.id}>
                  <h3 key={item.id} onClick={() => onClickPageHandler(item.id)}>
                    {item.title}
                  </h3>
                </div>
              );
            }
            return;
          })}
        </S.TitleBlock>
      </S.Container>
    </>
  );
};

export default Home;
