import { memo } from 'react';
import styled from 'styled-components';

import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '@/Global/globalStyles';
import larch from '@/resources/Images/larch.png';
import meranti from '@/resources/Images/meranti.png';
import oak from '@/resources/Images/oak.png';
import pine from '@/resources/Images/pine.png';
import woodWindow from '@/resources/Images/woodWindow.png';

interface WoodWindowProps {
    className?: string;
}

const WoodWindow = ({ className }: WoodWindowProps) => {
    return (
        <div className={className}>
            <Wrapper>
                <Container>
                    <div>
                        <Header>Okna drewniane</Header>
                        <Header>WOOD Natural</Header>
                    </div>
                    <div>
                        <StyledText>
                            Okna drewniane wykonane z zachowaniem najwyższych standardów ekologicznych, odznaczające się
                            trwałością oraz jakością wykonania to nasz priorytet. Wybierz okna drewniane idealnie
                            dopasowane do Twoich potrzeb i upodobań wykorzystując wieloletnie doświadczenie naszych
                            specjalistów oraz ich miłość do drewna.
                        </StyledText>
                    </div>
                    <ImagesWrapper>
                        <ImageWoodWrapper>
                            <StyledWoodImg src={pine} alt="pine" />
                            <StyledWoodText>Sosna</StyledWoodText>
                        </ImageWoodWrapper>
                        <ImageWoodWrapper>
                            <StyledWoodImg src={oak} alt="oak" />
                            <StyledWoodText>Modrzew</StyledWoodText>
                        </ImageWoodWrapper>
                        <ImageWoodWrapper>
                            <StyledWoodImg src={meranti} alt="meranti" />
                            <StyledWoodText>Meranti</StyledWoodText>
                        </ImageWoodWrapper>
                        <ImageWoodWrapper>
                            <StyledWoodImg src={larch} alt="larch" />
                            <StyledWoodText>Dąb</StyledWoodText>
                        </ImageWoodWrapper>
                    </ImagesWrapper>
                </Container>
                <div>
                    <StyledImg src={woodWindow} alt="woodWindow" />
                </div>
            </Wrapper>
        </div>
    );
};

const Memoized = memo(WoodWindow);
const Styled = styled(Memoized)`
    max-width: 1800px;
    background-color: ${COLOR.midnightGreen};
    margin: auto;
    margin-top: 8rem;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Container = styled.div`
    padding: 5rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Header = styled.p`
    text-align: center;
    color: ${COLOR.ghostWhite};
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.xlarge};
    line-height: ${LINE_HEIGHT.xxlarge};
`;

const StyledText = styled.p`
    padding: 0 1rem;
    color: ${COLOR.ghostWhite};
    font-weight: ${FONT_WEIGHT.normal};
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.xlarge};
`;

const StyledImg = styled.img`
    object-fit: cover;
`;

const StyledWoodImg = styled.img`
    border-radius: 0.5rem;
    width: 7.5rem;
    height: 3.75rem;
`;

const StyledWoodText = styled.p`
    padding: 1.5rem;
    color: ${COLOR.ghostWhite};
    font-weight: ${FONT_WEIGHT.normal};
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.medium};
    text-align: center;
`;

const ImagesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ImageWoodWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Styled;
