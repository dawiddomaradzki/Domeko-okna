import { memo } from 'react';
import styled from 'styled-components';

import { Text } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
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
                        <Image src={glass} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            <b>Przeszklenia</b>
                        </StyledText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            <b>Shutters</b>
                        </StyledText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <Image src={shutters} alt="tarasola logo" />
                    </ImageContainer>
                </ImageWrapper>
                <ImageWrapper>
                    <ImageContainer data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <Image src={rollerBlinds} alt="tarasola logo" />
                    </ImageContainer>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom">
                        <StyledText>
                            <b>Rolety ZIP</b>
                        </StyledText>
                    </TextWrapper>
                </ImageWrapper>
                <ImageWrapper>
                    <TextWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
                        <StyledText>
                            <b>Panel Stały</b>
                        </StyledText>
                    </TextWrapper>
                    <ImageContainer data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                        <Image src={fixedPanel} alt="tarasola logo" />
                    </ImageContainer>
                </ImageWrapper>
            </TypeWrapper>
        </div>
    );
};

const Memoized = memo(TarasolaSideConstruction);
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
