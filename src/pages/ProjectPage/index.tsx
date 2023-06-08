import { useState, useEffect } from 'react';
import IntroMessage from './components/IntroMessage';
import S from './style';
import ProjectName from './ProjectName';
import ProjectConcept from './ProjectConcept';

const ProjectPage = () => {
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 2500);
  }, []);
  return (
    <S.Container>
      {animation ? (
        <IntroMessage />
      ) : (
        <>
          {/* project name section */}
          <ProjectName />
          {/* project concept section */}
          <ProjectConcept />
        </>
      )}
    </S.Container>
  );
};

export default ProjectPage;
