import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectList } from '@/data';
import { ProjectListType } from '@/types';
import PageInformation from './components/PageInformation';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import S from './style';

const Home = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const isMobile = useMediaQuery('(max-width: 480px)');

  const onClickPageHandler = (id: number) => {
    setCurrentPage(id);
  };

  const onClickMobilePageHandler = (item: ProjectListType) => {
    navigate('/project', { state: { item } });
  };

  const onIntroduceMobilePageHandler = () => {
    navigate('/myPage');
  };

  return (
    <>
      <S.Container>
        <S.LeftBlockWrap>
          <S.HomeLink
            onClick={() => {
              if (isMobile) {
                onIntroduceMobilePageHandler();
              } else {
                onClickPageHandler(0);
              }
            }}
          >
            {projectList[0].title}
          </S.HomeLink>
          <S.TitleBlock>
            {projectList.map((item) => {
              if (item.id > 0 && item.id < 4) {
                return (
                  <div key={item.id}>
                    <h3
                      key={item.id}
                      onClick={() => {
                        if (isMobile) {
                          onClickMobilePageHandler(item);
                        } else {
                          onClickPageHandler(item.id);
                        }
                      }}
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
                  <h3
                    key={item.id}
                    onClick={() => {
                      if (isMobile) {
                        onClickMobilePageHandler(item);
                      } else {
                        onClickPageHandler(item.id);
                      }
                    }}
                  >
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
