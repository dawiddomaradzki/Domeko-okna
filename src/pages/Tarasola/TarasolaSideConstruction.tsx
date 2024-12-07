import { memo } from 'react';
import styled from 'styled-components';

import { TarasolaImage, TarasolaText } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { SCREEN_WIDTH } from '@/Global/globalStyles';
import glass from '@/resources/Images/Tarasola/t7.webp';
import shutters from '@/resources/Images/Tarasola/t8.webp';
import rollerBlinds from '@/resources/Images/Tarasola/t9.webp';
import fixedPanel from '@/resources/Images/Tarasola/t10.webp';

interface TarasolaSideConstructionProps {
    className?: string;
}

const TarasolaSideConstruction = ({ className }: TarasolaSideConstructionProps) => {
    return (
        <div className={className} id="sideConstruction">
            <HeaderWithLine text="Rodzaje zabudowy bocznej" />
            <TypeWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                        <TarasolaImage src={glass} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            <b>Przeszklenia</b>
                        </TarasolaText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            <b>Shutters</b>
                        </TarasolaText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <TarasolaImage src={shutters} alt="tarasola logo" />
                    </ImageContainer>
                </ImageWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <TarasolaImage src={rollerBlinds} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom">
                        <TarasolaText>
                            <b>Rolety ZIP</b>
                        </TarasolaText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            <b>Panel Stały</b>
                        </TarasolaText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <TarasolaImage src={fixedPanel} alt="tarasola logo" />
                    </ImageContainer>
                </ImageWrapper>
            </TypeWrapper>
        </div>
    );
};

const Memoized = memo(TarasolaSideConstruction);
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

    @media (max-width: ${SCREEN_WIDTH.s}) {
        grid-gap: 1.5rem;
    }
`;

const ImageContainer = styled.div``;
export default Styled;
