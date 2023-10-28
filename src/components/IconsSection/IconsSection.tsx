import { memo } from 'react';
import styled from 'styled-components';

import { Header, Text } from '@/Global/components/commonComponents';
import { LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import SmileIcon from '@/resources/Icons/face-smile-solid.svg';
import ScrewIcon from '@/resources/Icons/screwdriver-wrench-solid.svg';
import RampIcon from '@/resources/Icons/truck-ramp-box-solid.svg';
import PeopleIcon from '@/resources/Icons/user-group-solid.svg';

interface IconsSectionProps {
    className?: string;
}

const IconsSection = ({ className }: IconsSectionProps) => {
    return (
        <div className={className} data-aos="fade-in" data-aos-anchor-placement="top-bottom">
            <Container>
                <ImgWrapper>
                    <img src={PeopleIcon} alt="PeopleIcon" style={{ width: '180px' }} />
                </ImgWrapper>
                <HeaderWrapper>
                    <StyledHeader>Doradztwo</StyledHeader>
                </HeaderWrapper>
                <StyledTextWrapper>
                    <StyledText>
                        Nasi eksperci udzielą Ci przy wyborze niezbędnego wsparcia, aby spełnić wszystkie Twoje
                        oczekiwania.
                    </StyledText>
                </StyledTextWrapper>
            </Container>
            <Container>
                <ImgWrapper>
                    <img src={RampIcon} alt="RampIcon" style={{ width: '180px' }} />
                </ImgWrapper>
                <HeaderWrapper>
                    <StyledHeader>Transport</StyledHeader>
                </HeaderWrapper>
                <StyledTextWrapper>
                    <StyledText>Dostarczymy wybrane przez Ciebie okna we wskazane miejsce inwestycji.</StyledText>
                </StyledTextWrapper>
            </Container>
            <Container>
                <ImgWrapper>
                    <img src={ScrewIcon} alt="ScrewIcon" style={{ width: '160px' }} />
                </ImgWrapper>
                <HeaderWrapper>
                    <StyledHeader>Montaż</StyledHeader>
                </HeaderWrapper>
                <StyledTextWrapper>
                    <StyledText>
                        Profesjonalizm oraz dbałość o szczegóły przy montażu okien to dla nas podstawa.
                    </StyledText>
                </StyledTextWrapper>
            </Container>
            <Container>
                <ImgWrapper>
                    <img src={SmileIcon} alt="SmileIcon" style={{ width: '160px' }} />
                </ImgWrapper>
                <HeaderWrapper>
                    <StyledHeader>Zadowolenie</StyledHeader>
                </HeaderWrapper>
                <StyledTextWrapper id="offer">
                    <StyledText>Dokładamy wszelkich starań do Twojego zadowolenia!</StyledText>
                </StyledTextWrapper>
            </Container>
        </div>
    );
};

const Memoized = memo(IconsSection);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 6rem;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
    }

    @media (max-width: ${SCREEN_WIDTH.s}) {
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: 1fr;
        grid-row-gap: 2rem;
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledHeader = styled(Header)``;
const StyledText = styled(Text)`
    line-height: ${LINE_HEIGHT.m};
`;
const StyledTextWrapper = styled.div`
    width: 16rem;
`;
const ImgWrapper = styled.div`
    width: 12.5rem;
    height: 12.5rem;
    display: flex;
    justify-content: center;
`;
const HeaderWrapper = styled.div`
    padding: 2rem 0;
`;
export default Styled;
