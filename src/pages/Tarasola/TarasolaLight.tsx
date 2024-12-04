import { memo } from 'react';
import styled from 'styled-components';

import { Text } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
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
                        <Image src={LED} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            <b>Listwa LED</b> po obwodzie konstrukcji - biały
                        </StyledText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            <b>Listwa LED</b> po obwodzie konstrukcji - RGB
                        </StyledText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <Image src={LEDRGB} alt="tarasola logo" />
                    </ImageContainer>
                </ImageWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <Image src={spot} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom">
                        <StyledText>
                            Na dachu: <b>spot</b>
                        </StyledText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            Na dachu: <b>line</b>
                        </StyledText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <Image src={line} alt="tarasola logo" />
                    </ImageContainer>
                </ImageWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <Image src={strip} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom">
                        <StyledText>
                            Na dachu: <b>strip</b>
                        </StyledText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            Na dachu: <b>box</b>
                        </StyledText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <Image src={box} alt="tarasola logo" />
                    </ImageContainer>
                </ImageWrapper>
            </TypeWrapper>
        </div>
    );
};

const Memoized = memo(TarasolaLight);
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
