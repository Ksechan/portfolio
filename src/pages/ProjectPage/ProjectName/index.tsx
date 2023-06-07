import S from './style';
import CommonS from '../style';
import FirstSectionImage from '@/assets/images/hanwha_home01.png';
import FirstSectionImage02 from '@/assets/images/hanwha_home02.png';

const ProjectName = () => {
  return (
    <S.FirstSection>
      <S.FirstSectionNameWrap>
        <S.FirstSectionName>{`PROJECT\nNAME`}</S.FirstSectionName>
        <CommonS.SectionNumber marginBottom={60}>0 1</CommonS.SectionNumber>
        <S.FirstSectionTitle>Hanwha-motiev</S.FirstSectionTitle>
        <CommonS.SectionDescription>
          설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충설명설명설명충
        </CommonS.SectionDescription>
      </S.FirstSectionNameWrap>
      <S.FirstSectionImageWrap>
        <S.FirstSectionImage src={FirstSectionImage} />
        <S.FirstSectionImage src={FirstSectionImage02} />
      </S.FirstSectionImageWrap>
    </S.FirstSection>
  );
};

export default ProjectName;
