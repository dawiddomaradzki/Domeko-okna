import { memo } from 'react';
import styled from 'styled-components';

import { Text } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import heatEmitter from '@/resources/Images/Tarasola/t17.png';
import audio from '@/resources/Images/Tarasola/t18.png';
import weatherSensor from '@/resources/Images/Tarasola/t19.png';
import smart from '@/resources/Images/Tarasola/t20.png';

interface TarasolaAccessoriesProps {
    className?: string;
}

const TarasolaAccessories = ({ className }: TarasolaAccessoriesProps) => {
    return (
        <div className={className} id="accessories">
            <HeaderWithLine text="Akcesoria" />
            <TypeWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                        <Image src={heatEmitter} alt="heatEmitter" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            <b>Promienniki ciepła</b>
                        </StyledText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            <b>Zestaw audio</b>
                        </StyledText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <Image src={audio} alt="audio" />
                    </ImageContainer>
                </ImageWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <Image src={weatherSensor} alt="weatherSensor" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom">
                        <StyledText>
                            <b>Czujniki pogodowe</b>
                        </StyledText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            <b>Sterowanie smart </b>
                        </StyledText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <Image src={smart} alt="smart" />
                    </ImageContainer>
                </ImageWrapper>
            </TypeWrapper>
        </div>
    );
};

const Memoized = memo(TarasolaAccessories);
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
