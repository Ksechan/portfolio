import S from './style';
import CommonS from '../style';
import FirstSectionImage from '@/assets/images/hanwha_home01.png';
import FirstSectionImage02 from '@/assets/images/hanwha_home02.png';
import { ProjectListProps } from '@/pages/Home/components/PageInformation';

const ProjectName = ({ item }: ProjectListProps) => {
  return (
    <S.FirstSection>
      <S.FirstSectionNameWrap>
        <S.FirstSectionName>{`PROJECT\nNAME`}</S.FirstSectionName>
        <CommonS.SectionNumber marginBottom={60}>0 1</CommonS.SectionNumber>
        <S.FirstSectionTitle>{item.project?.projectTitle}</S.FirstSectionTitle>
        <S.FirstSectionStack>
          - {item.project?.projectStack01}
        </S.FirstSectionStack>
        <S.FirstSectionStack>
          - {item.project?.projectStack02}
        </S.FirstSectionStack>
        <S.FirstSectionStack>
          - {item.project?.projectStack03}
        </S.FirstSectionStack>
        <S.FirstSectionStack>
          - {item.project?.projectStack04}
        </S.FirstSectionStack>
        {item.project?.projectStack05 && !undefined ? (
          <S.FirstSectionStack>
            - {item.project?.projectStack05}
          </S.FirstSectionStack>
        ) : null}
      </S.FirstSectionNameWrap>
      <S.FirstSectionImageWrap>
        <S.FirstSectionImage src={FirstSectionImage} />
        <S.FirstSectionImage src={FirstSectionImage02} />
      </S.FirstSectionImageWrap>
    </S.FirstSection>
  );
};

export default ProjectName;
