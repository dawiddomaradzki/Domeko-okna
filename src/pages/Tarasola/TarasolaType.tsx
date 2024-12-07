import { memo } from 'react';
import styled from 'styled-components';

import { TarasolaImage, TarasolaText } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { SCREEN_WIDTH } from '@/Global/globalStyles';
import technicPro from '@/resources/Images/Tarasola/t1.webp';
import cubic from '@/resources/Images/Tarasola/t2.webp';
import carport from '@/resources/Images/Tarasola/t3.webp';

interface TarasolaTypeProps {
    className?: string;
}

const TarasolaType = ({ className }: TarasolaTypeProps) => {
    return (
        <div id="type" className={className}>
            <HeaderWithLine text="Konstrukcja do wyboru" />
            <TypeWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                        <TarasolaImage src={technicPro} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            <b>Technic Pro</b> – konstrukcja z dachem lamelowym i z zintegrowaną roletą ZIP
                        </TarasolaText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            <b>Cubic</b> – Konstrukcja z dachem takninowym – podwójna tkanina dolna oraz górna
                        </TarasolaText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <TarasolaImage src={cubic} alt="tarasola logo" />
                    </ImageContainer>
                </ImageWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <TarasolaImage src={carport} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom">
                        <TarasolaText>
                            <b>Carport</b> – konstrukcja z dachem z blachy trapezowej. Idealnie sprawdzi się jako
                            zadaszenie dla samochodu
                        </TarasolaText>
                    </TextWrapper>
                </ImageWrapper>
            </TypeWrapper>
        </div>
    );
};

const Memoized = memo(TarasolaType);
const Styled = styled(Memoized)`
    padding-top: 5rem;

    @media (max-width: ${SCREEN_WIDTH.s}) {
        padding-top: 3rem;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TypeWrapper = styled.div`
    max-width: 1700px;
    margin: auto;
`;

const ImageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    margin-bottom: 2rem;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        grid-gap: 1.5rem;
    }
`;

const ImageContainer = styled.div``;
export default Styled;
