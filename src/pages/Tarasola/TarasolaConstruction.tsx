import { memo } from 'react';
import styled from 'styled-components';

import { Text } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import freeStand from '@/resources/Images/Tarasola/t5.webp';
import sideStand from '@/resources/Images/Tarasola/t6.webp';

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
                        <Image src={freeStand} alt="freeStand" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            <b>Wolnostojący</b>
                        </StyledText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            <b>Przyścienny</b>
                        </StyledText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <Image src={sideStand} alt="sideStand" />
                    </ImageContainer>
                </ImageWrapper>
            </TypeWrapper>
        </div>
    );
};

const Memoized = memo(TarasolaConstruction);
const Styled = styled(Memoized)`
    padding-top: 5rem;
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledText = styled(Text)`
    text-align: center;
`;

const Image = styled.img`
    max-height: 400px;
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
`;

const ImageContainer = styled.div``;
export default Styled;
