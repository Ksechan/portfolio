import S from './style';
import CommonS from '../style';
import FirstSectionImage from '@/assets/images/hanwha_home01.png';

const ProjectProgress = () => {
  return (
    <>
      <S.ThirdSection>
        <S.ThirdSectionImageWrap>
          <S.ThirdSectionImage src={FirstSectionImage} />
        </S.ThirdSectionImageWrap>
        <S.ThirdSectionNameWrap>
          <CommonS.SectionNumber marginBottom={60}>0 3</CommonS.SectionNumber>
          <CommonS.SectionDescription marginBottom={120}>
            설명설명
          </CommonS.SectionDescription>
          <S.ThirdSectionName>PROGRESS</S.ThirdSectionName>
        </S.ThirdSectionNameWrap>
      </S.ThirdSection>
    </>
  );
};

export default ProjectProgress;
