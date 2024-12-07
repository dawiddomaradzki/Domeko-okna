import { memo } from 'react';
import styled from 'styled-components';

import { TarasolaImage, TarasolaText } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { SCREEN_WIDTH } from '@/Global/globalStyles';
import freeStand from '@/resources/Images/Tarasola/t5.jpg';
import sideStand from '@/resources/Images/Tarasola/t6.jpg';

interface TarasolaConstructionProps {
    className?: string;
}

const TarasolaConstruction = ({ className }: TarasolaConstructionProps) => {
    return (
        <div className={className} id="construction">
            <HeaderWithLine text="Rodzaj konstrukcji" />
            <TypeWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                        <TarasolaImage src={freeStand} alt="freeStand" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            <b>Wolnostojący</b>
                        </TarasolaText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <TarasolaText>
                            <b>Przyścienny</b>
                        </TarasolaText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <TarasolaImage src={sideStand} alt="sideStand" />
                    </ImageContainer>
                </ImageWrapper>
            </TypeWrapper>
        </div>
    );
};

const Memoized = memo(TarasolaConstruction);
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
