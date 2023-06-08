import S from './style';
import CommonS from '../style';
import FirstSectionImage from '@/assets/images/hanwha_home01.png';

const ProjectConcept = () => {
  return (
    <S.SecondSection>
      <S.SecondSectionImgWrap>
        <S.SecondSectionImg src={FirstSectionImage} />
      </S.SecondSectionImgWrap>
      <S.SecondSectionTitleWrap>
        <S.SecondSectionName>{`PROJECT\nCONCEPT`}</S.SecondSectionName>
        <CommonS.SectionNumber marginLeft={140} marginBottom={60}>
          0 2
        </CommonS.SectionNumber>
        <CommonS.SectionDescription marginLeft={180}>
          설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충
        </CommonS.SectionDescription>
      </S.SecondSectionTitleWrap>
    </S.SecondSection>
  );
};

export default ProjectConcept;
