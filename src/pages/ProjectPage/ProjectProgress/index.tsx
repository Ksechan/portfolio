import S from './style';
import CommonS from '../style';
import FirstSectionImage from '@/assets/images/hanwha_home01.png';
import { ProjectListProps } from '@/pages/Home/components/PageInformation';

const ProjectProgress = ({ item }: ProjectListProps) => {
  return (
    <S.ThirdSectionWrap>
      <CommonS.SectionNumber marginBottom={60}>0 3</CommonS.SectionNumber>
      <S.ThirdSectionName>PROGRESS</S.ThirdSectionName>
      <S.ThirdSection>
        <S.ThirdSectionImageWrap>
          <S.ThirdSectionImage src={FirstSectionImage} />
        </S.ThirdSectionImageWrap>
        <S.ThirdSectionNameWrap>
          <S.ThirdSectionDescription>
            {item.project?.projectProgressDesc01}
          </S.ThirdSectionDescription>
          <S.ThirdSectionName marginTop={40}>
            {item.project?.projectProgressDescTitle01}
          </S.ThirdSectionName>
        </S.ThirdSectionNameWrap>
      </S.ThirdSection>

      <S.ThirdSection right>
        <S.ThirdSectionNameWrap>
          <S.ThirdSectionDescription marginRight={80}>
            {item.project?.projectProgressDesc02}
          </S.ThirdSectionDescription>
          <S.ThirdSectionName marginTop={60}>
            {item.project?.projectProgressDescTitle02}
          </S.ThirdSectionName>
        </S.ThirdSectionNameWrap>
        <S.ThirdSectionImageWrap>
          <S.ThirdSectionImage src={FirstSectionImage} />
        </S.ThirdSectionImageWrap>
      </S.ThirdSection>

      <S.ThirdSection>
        <S.ThirdSectionImageWrap>
          <S.ThirdSectionImage src={FirstSectionImage} />
        </S.ThirdSectionImageWrap>
        <S.ThirdSectionNameWrap>
          <S.ThirdSectionName marginBottom={60} marginLeft={200}>
            {item.project?.projectProgressDescTitle03}
          </S.ThirdSectionName>
          <S.ThirdSectionDescription>
            {item.project?.projectProgressDesc03}
          </S.ThirdSectionDescription>
        </S.ThirdSectionNameWrap>
      </S.ThirdSection>

      <S.ThirdSection right>
        <S.ThirdSectionNameWrap>
          <S.ThirdSectionName marginBottom={60}>
            {item.project?.projectProgressDescTitle04}
          </S.ThirdSectionName>
          <S.ThirdSectionDescription marginRight={40}>
            {item.project?.projectProgressDesc04}
          </S.ThirdSectionDescription>
        </S.ThirdSectionNameWrap>
        <S.ThirdSectionImageWrap>
          <S.ThirdSectionImage src={FirstSectionImage} />
        </S.ThirdSectionImageWrap>
      </S.ThirdSection>
    </S.ThirdSectionWrap>
  );
};

export default ProjectProgress;
