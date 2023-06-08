import S from './style';
import CommonS from '../style';
import FirstSectionImage from '@/assets/images/hanwha_home01.png';
import { ProjectListProps } from '@/pages/Home/components/PageInformation';

const ProjectConcept = ({ item }: ProjectListProps) => {
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
        <CommonS.SectionDescription marginLeft={180} marginBottom={40}>
          {item.project?.projectConceptDesc01}
        </CommonS.SectionDescription>
        <CommonS.SectionDescription marginLeft={180}>
          {item.project?.projectConceptDesc02}
        </CommonS.SectionDescription>
      </S.SecondSectionTitleWrap>
    </S.SecondSection>
  );
};

export default ProjectConcept;
