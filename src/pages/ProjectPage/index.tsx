import { useState, useEffect } from 'react';
import IntroMessage from './components/IntroMessage';
import S from './style';
import ProjectName from './ProjectName';
import ProjectConcept from './ProjectConcept';
import ProjectProgress from './ProjectProgress';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ProjectPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [animation, setAnimation] = useState(true);
  const item = location.state.item;

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 2500);
  }, []);

  const sendEmailHandler = () => {
    return (window.location.href = 'mailto:rlatpcks77@gmail.com');
  };

  const goHomeButtonHandler = () => {
    navigation(-1);
  };

  return (
    <S.Container>
      {animation ? (
        <IntroMessage />
      ) : (
        <>
          {/* project name section */}
          <ProjectName item={item} />
          {/* project concept section */}
          <ProjectConcept item={item} />
          {/* project progress section */}
          <ProjectProgress item={item} />
          <S.FinishSection>
            <S.FinishSectionTitle>THANK YOU FOR VIEWING</S.FinishSectionTitle>
            <S.FinishSectionContact>
              phone: 010-3356-9426
            </S.FinishSectionContact>
            <Link
              onClick={sendEmailHandler}
              style={{ textDecoration: 'none' }}
              to={''}
            >
              <S.FinishSectionContact>
                email: rlatpcks77@gmail.com
              </S.FinishSectionContact>
            </Link>
            <Link
              to="https://github.com/Ksechan"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <S.FinishSectionContact>
                github: https://github.com/Ksechan
              </S.FinishSectionContact>
            </Link>
            <S.FinishSectionButton onClick={goHomeButtonHandler}>
              SECHAN
            </S.FinishSectionButton>
          </S.FinishSection>
        </>
      )}
    </S.Container>
  );
};

export default ProjectPage;
