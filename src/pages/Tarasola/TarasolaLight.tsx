import { memo } from 'react';
import styled from 'styled-components';

import { TarasolaImage, TarasolaText } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { SCREEN_WIDTH } from '@/Global/globalStyles';
import LED from '@/resources/Images/Tarasola/t11.webp';
import LEDRGB from '@/resources/Images/Tarasola/t12.jpg';
import spot from '@/resources/Images/Tarasola/t13.jpg';
import line from '@/resources/Images/Tarasola/t14.webp';
import strip from '@/resources/Images/Tarasola/t15.webp';
import box from '@/resources/Images/Tarasola/t16.png';

interface TarasolaLightProps {
    className?: string;
}

const TarasolaLight = ({ className }: TarasolaLightProps) => {
    return (
        <div className={className} id="light">
            <HeaderWithLine text="Oświetlenia" />
            <TypeWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                        <TarasolaImage src={LED} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            <b>Listwa LED</b> po obwodzie konstrukcji - biały
                        </TarasolaText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            <b>Listwa LED</b> po obwodzie konstrukcji - RGB
                        </TarasolaText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <TarasolaImage src={LEDRGB} alt="tarasola logo" />
                    </ImageContainer>
                </ImageWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <TarasolaImage src={spot} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom">
                        <TarasolaText>
                            Na dachu: <b>spot</b>
                        </TarasolaText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            Na dachu: <b>line</b>
                        </TarasolaText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <TarasolaImage src={line} alt="tarasola logo" />
                    </ImageContainer>
                </ImageWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <TarasolaImage src={strip} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom">
                        <TarasolaText>
                            Na dachu: <b>strip</b>
                        </TarasolaText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            Na dachu: <b>box</b>
                        </TarasolaText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <TarasolaImage src={box} alt="tarasola logo" />
                    </ImageContainer>
                </ImageWrapper>
            </TypeWrapper>
        </div>
    );
};

const Memoized = memo(TarasolaLight);
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
