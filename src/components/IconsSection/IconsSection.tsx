import { memo } from 'react';
import styled from 'styled-components';

import { Box } from '@/Global/components/commonComponents';
import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '@/Global/globalStyles';
import SmileIcon from '@/resources/Icons/face-smile-solid.svg';
import ScrewIcon from '@/resources/Icons/screwdriver-wrench-solid.svg';
import RampIcon from '@/resources/Icons/truck-ramp-box-solid.svg';
import PeopleIcon from '@/resources/Icons/user-group-solid.svg';

interface IconsSectionProps {
    className?: string;
}

const IconsSection = ({ className }: IconsSectionProps) => {
    return (
        <div className={className}>
            <Container>
                <ImgWrapper>
                    <img src={PeopleIcon} alt="PeopleIcon" style={{ width: '180px' }} />
                </ImgWrapper>
                <HeaderWrapper>
                    <StyledHeader>Doradztwo</StyledHeader>
                </HeaderWrapper>
                <div>
                    <StyledText>
                        Nasi eksperci udzielą Ci przy wyborze niezbędnego wsparcia, aby spełnić wszystkie Twoje
                        oczekiwania.
                    </StyledText>
                </div>
            </Container>
            <Container>
                <ImgWrapper>
                    <img src={RampIcon} alt="RampIcon" style={{ width: '180px' }} />
                </ImgWrapper>
                <HeaderWrapper>
                    <StyledHeader>Transport</StyledHeader>
                </HeaderWrapper>
                <div>
                    <StyledText>Dostarczymy wybrane przez Ciebie okna we wskazane miejsce inwestycji.</StyledText>
                </div>
            </Container>
            <Container>
                <ImgWrapper>
                    <img src={ScrewIcon} alt="ScrewIcon" style={{ width: '160px' }} />
                </ImgWrapper>
                <HeaderWrapper>
                    <StyledHeader>Montaż</StyledHeader>
                </HeaderWrapper>
                <div>
                    <StyledText>
                        Profesjonalizm oraz dbałość o szczegóły przy montażu okien to dla nas podstawa.
                    </StyledText>
                </div>
            </Container>
            <Container>
                <ImgWrapper>
                    <img src={SmileIcon} alt="SmileIcon" style={{ width: '160px' }} />
                </ImgWrapper>
                <HeaderWrapper>
                    <StyledHeader>Zadowolenie</StyledHeader>
                </HeaderWrapper>
                <div id="offer">
                    <StyledText>Dokładamy wszelkich starań do Twojego zadowolenia!</StyledText>
                </div>
            </Container>
        </div>
    );
};

const Memoized = memo(IconsSection);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    padding-top: 6rem;
`;
const Container = styled(Box)`
    width: 16rem;
    flex-direction: column;
    align-items: center;
`;
const StyledHeader = styled.p`
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.medium};
    line-height: ${LINE_HEIGHT.medium};
`;
const StyledText = styled.p`
    font-weight: ${FONT_WEIGHT.normal};
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.normal};
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
