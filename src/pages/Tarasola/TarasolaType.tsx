import { memo } from 'react';
import styled from 'styled-components';

import { TarasolaImage, TarasolaText } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { SCREEN_WIDTH } from '@/Global/globalStyles';
import carousel2 from '@/resources/Images/carousel2.png';
import technicPro from '@/resources/Images/Tarasola/t1.webp';
import cubic from '@/resources/Images/Tarasola/t2.jpg';
import carport from '@/resources/Images/Tarasola/t3.webp';

import { ImageContainer } from './common';

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
                        <TarasolaImage src={technicPro} alt="Technic Pro" />
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
                            <b>Cubic</b> – Konstrukcja z dachem tkaninowym – podwójna tkanina
                        </TarasolaText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom" $alignRight>
                        <TarasolaImage src={cubic} alt="cubic" />
                    </ImageContainer>
                </ImageWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <TarasolaImage src={carport} alt="Carport" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom">
                        <TarasolaText>
                            <b>Carport</b> – konstrukcja z dachem z blachy trapezowej. Idealnie sprawdzi się jako
                            zadaszenie dla samochodu
                        </TarasolaText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            <b>Fix</b> – Konstrukcja z dachem z poliwęglanu
                        </TarasolaText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom" $alignRight>
                        <TarasolaImage src={carousel2} alt="fix" />
                    </ImageContainer>
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
    max-width: 1500px;
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

export default Styled;
