import { memo } from 'react';
import styled from 'styled-components';

import { Text } from '@/Global/components/commonComponents';
import { COLOR, FONT_SIZE, LINE_HEIGHT } from '@/Global/globalStyles';
import front from '@/resources/Images/front.png';

interface WelcomeShopProps {
    className?: string;
}

const WelcomeShop = ({ className }: WelcomeShopProps) => {
    return (
        <div className={className}>
            <Wrapper>
                <StyledImg src={front} />
                <StyledCardBody data-aos="fade-right" data-aos-anchor-placement="top-bottom">
                    <StyledText>
                        Jesteśmy firmą zlokalizowaną we Włoszczowie na ulicy Przedborskiej 45, która swoją działalność
                        prowadzi od 2001 roku. Nasze wieloletnie doświadczenie pozwoliło na zatrudnienie
                        wykwalifikowanych pracowników, którzy doradzą w każdym problemie. Współpracujemy z
                        profesjonalnymi firmami, które dostarczają nam wysokiej jakości produkty. Pomagamy Klientom w
                        realizacji marzeń związanych z budową i urządzeniem domu, pamiętając, że dom to nie tylko cztery
                        ściany, ale również ciepło rodzinne i bezpieczeństwo. U nas urządzą Państwo swoją łazienkę od A
                        do Z wraz z możliwością wykonania wizualizacji 3D. W naszej ofercie znajdziecie również okna,
                        drzwi, bramy garażowe oraz szeroki wybór farb. Ponadto dysponujemy mieszalnikiem do tynków
                        elewacyjnych i dekoracyjnych.
                    </StyledText>
                </StyledCardBody>
            </Wrapper>
        </div>
    );
};

const Memoized = memo(WelcomeShop);
const Styled = styled(Memoized)``;

const StyledImg = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`;

const Wrapper = styled.div`
    position: relative;
`;

const StyledText = styled(Text)`
    line-height: ${LINE_HEIGHT.m};
    font-size: ${FONT_SIZE.s};
`;

const StyledCardBody = styled.div`
    padding: 2rem 5rem;
    margin: 0 2rem;
    border-radius: 1rem;
    text-align: center;
    background-color: ${COLOR.midnightGreenRGB};
    position: absolute;
    bottom: 10%;
    color: ${COLOR.ghostWhite};
`;
export default Styled;
