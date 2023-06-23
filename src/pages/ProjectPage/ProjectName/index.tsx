import S from './style';
import CommonS from '../style';
import { ProjectListProps } from '@/pages/Home/components/PageInformation';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const ProjectName = ({ item }: ProjectListProps) => {
  const isTablet = useMediaQuery('(max-width: 768px)');
  return (
    <>
      {item.type === 'mobile' ? (
        <S.FirstSection>
          <S.FirstSectionNameWrap>
            <S.FirstSectionName>{`PROJECT\nNAME`}</S.FirstSectionName>
            <CommonS.SectionNumber marginBottom={60}>0 1</CommonS.SectionNumber>
            <S.FirstSectionTitle>
              {item.project?.projectTitle}
            </S.FirstSectionTitle>
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
            <S.FirstSectionImage
              src={item.project?.mainImg01}
              marginRight={20}
            />
            <S.FirstSectionImage src={item.project?.mainImg02} />
          </S.FirstSectionImageWrap>
        </S.FirstSection>
      ) : (
        <S.FirstSection>
          <S.FirstSectionNameWrap>
            <S.FirstSectionWebName>{`PROJECT\nNAME`}</S.FirstSectionWebName>
            <CommonS.SectionNumber marginBottom={60}>0 1</CommonS.SectionNumber>
            <S.FirstSectionTitle>
              {item.project?.projectTitle}
            </S.FirstSectionTitle>
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
            <S.FirstSectionWebImage
              src={item.project?.mainImg01}
              marginRight={isTablet ? 0 : 20}
            />
          </S.FirstSectionImageWrap>
        </S.FirstSection>
      )}
    </>
  );
};

export default ProjectName;
