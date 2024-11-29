import { memo } from 'react';
import styled from 'styled-components';

import { Header, Text } from '@/Global/components/commonComponents';
import { SCREEN_WIDTH } from '@/Global/globalStyles';
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
                    <Header>Doradztwo</Header>
                </HeaderWrapper>
                <StyledTextWrapper>
                    <Text>
                        Nasi eksperci udzielą Ci przy wyborze niezbędnego wsparcia, aby spełnić wszystkie Twoje
                        oczekiwania.
                    </Text>
                </StyledTextWrapper>
            </Container>
            <Container>
                <ImgWrapper>
                    <img src={RampIcon} alt="RampIcon" style={{ width: '180px' }} />
                </ImgWrapper>
                <HeaderWrapper>
                    <Header>Transport</Header>
                </HeaderWrapper>
                <StyledTextWrapper>
                    <Text>Dostarczymy wybrane przez Ciebie okna we wskazane miejsce inwestycji.</Text>
                </StyledTextWrapper>
            </Container>
            <Container>
                <ImgWrapper>
                    <img src={ScrewIcon} alt="ScrewIcon" style={{ width: '160px' }} />
                </ImgWrapper>
                <HeaderWrapper>
                    <Header>Montaż</Header>
                </HeaderWrapper>
                <StyledTextWrapper>
                    <Text>Profesjonalizm oraz dbałość o szczegóły przy montażu okien to dla nas podstawa.</Text>
                </StyledTextWrapper>
            </Container>
            <Container>
                <ImgWrapper>
                    <img src={SmileIcon} alt="SmileIcon" style={{ width: '160px' }} />
                </ImgWrapper>
                <HeaderWrapper>
                    <Header>Zadowolenie</Header>
                </HeaderWrapper>
                <StyledTextWrapper id="offer">
                    <Text>Dokładamy wszelkich starań do Twojego zadowolenia!</Text>
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
    padding-top: 4rem;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
    }

    @media (max-width: ${SCREEN_WIDTH.xs}) {
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

const StyledTextWrapper = styled.div`
    width: 16rem;
`;
const ImgWrapper = styled.div`
    width: 8.5rem;
    height: 8.5rem;
    display: flex;
    justify-content: center;
`;
const HeaderWrapper = styled.div`
    padding: 2rem 0;
`;
export default Styled;
