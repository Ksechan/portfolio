import S from './style';
import CommonS from '../style';
import { ProjectListProps } from '@/pages/Home/components/PageInformation';

const ProjectConcept = ({ item }: ProjectListProps) => {
  return (
    <>
      {item.type === 'mobile' ? (
        <S.SecondSection>
          <S.SecondSectionImgWrap>
            <S.SecondSectionImg src={item.project?.projectConceptImg01} />
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
      ) : (
        <S.SecondSection>
          <S.SecondSectionWebImgWrap>
            <S.SecondSectionWebImg01
              src={item.project?.projectConceptImg01}
              width={item.title === 'school-trip' ? 300 : 800}
              noShadow={item.title === 'school-trip'}
            />
            <S.SecondSectionWebImg02 src={item.project?.projectConceptImg02} />
          </S.SecondSectionWebImgWrap>
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
      )}
    </>
  );
};

export default ProjectConcept;
