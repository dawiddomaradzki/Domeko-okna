import { memo } from 'react';
import styled from 'styled-components';

import { MainHeader, Text } from '@/Global/components/commonComponents';
import { COLOR, SCREEN_WIDTH } from '@/Global/globalStyles';
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
                    <HeaderWrapper>
                        <StyledHeader>Okna drewniane</StyledHeader>
                        <StyledHeader>WOOD Natural</StyledHeader>
                    </HeaderWrapper>
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
                <ImageContainer />
            </Wrapper>
        </div>
    );
};

const Memoized = memo(WoodWindow);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: 0 2rem;
    margin-top: 8rem;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        margin-top: 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        margin-top: 2rem;
    }
`;

const Wrapper = styled.div`
    background-color: ${COLOR.midnightGreen};

    grid-template-columns: repeat(2, 1fr);
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
`;
const Container = styled.div`
    padding: 5rem 6rem 3rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding: 2.5rem 3rem;
    }
`;

const HeaderWrapper = styled.div`
    margin-bottom: 3rem;
`;

const StyledHeader = styled(MainHeader)`
    color: ${COLOR.ghostWhite};
`;

const StyledText = styled(Text)`
    padding: 0 1rem;
    color: ${COLOR.ghostWhite};
`;

const ImageContainer = styled.div`
    min-height: 400px;
    background-image: url(${woodWindow});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const StyledWoodImg = styled.img`
    border-radius: 0.5rem;
    width: 7.5rem;
    height: 3.75rem;
`;

const StyledWoodText = styled(Text)`
    padding: 1.5rem 0;
    color: ${COLOR.ghostWhite};
    text-align: center;
`;

const ImagesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3rem;

    @media (max-width: ${SCREEN_WIDTH.s}) {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ImageWoodWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Styled;
