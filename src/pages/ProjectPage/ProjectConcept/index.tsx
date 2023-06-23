import S from './style';
import CommonS from '../style';
import { ProjectListProps } from '@/pages/Home/components/PageInformation';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const ProjectConcept = ({ item }: ProjectListProps) => {
  const isLaptop = useMediaQuery('(max-width: 1079px)');
  const isTablet = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {item.type === 'mobile' ? (
        <S.SecondSection>
          <S.SecondSectionImgWrap>
            <S.SecondSectionImg src={item.project?.projectConceptImg01} />
          </S.SecondSectionImgWrap>
          <S.SecondSectionTitleWrap>
            <S.SecondSectionName>{`PROJECT\nCONCEPT`}</S.SecondSectionName>
            <CommonS.SectionNumber
              marginLeft={isTablet ? 30 : 100}
              marginBottom={isTablet ? 10 : 60}
            >
              0 2
            </CommonS.SectionNumber>
            <CommonS.SectionDescription
              marginLeft={isTablet ? 20 : 135}
              marginBottom={20}
            >
              {item.project?.projectConceptDesc01}
            </CommonS.SectionDescription>
            <CommonS.SectionDescription marginLeft={isTablet ? 20 : 135}>
              {item.project?.projectConceptDesc02}
            </CommonS.SectionDescription>
          </S.SecondSectionTitleWrap>
        </S.SecondSection>
      ) : (
        <S.SecondSection>
          <S.SecondSectionWebImgWrap>
            <S.SecondSectionWebImg01
              src={item.project?.projectConceptImg01}
              noShadow={item.title === 'school-trip'}
              school={item.title === 'school-trip'}
            />
            <S.SecondSectionWebImg02 src={item.project?.projectConceptImg02} />
          </S.SecondSectionWebImgWrap>
          <S.SecondSectionTitleWrap>
            <S.SecondSectionName>{`PROJECT\nCONCEPT`}</S.SecondSectionName>
            <CommonS.SectionNumber
              marginLeft={isTablet ? 40 : isLaptop ? 85 : 110}
              marginBottom={isLaptop ? 30 : 50}
            >
              0 2
            </CommonS.SectionNumber>
            <CommonS.SectionDescription
              marginLeft={isTablet ? 0 : isLaptop ? 90 : 140}
              marginBottom={40}
            >
              {item.project?.projectConceptDesc01}
            </CommonS.SectionDescription>
            <CommonS.SectionDescription marginLeft={isLaptop ? 0 : 140}>
              {item.project?.projectConceptDesc02}
            </CommonS.SectionDescription>
          </S.SecondSectionTitleWrap>
        </S.SecondSection>
      )}
    </>
  );
};

export default ProjectConcept;
