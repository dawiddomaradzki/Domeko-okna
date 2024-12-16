import { memo } from 'react';
import styled from 'styled-components';

import { TextSpan } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_WEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import poolWindow from '@/resources/Images/poolWindow.png';
import woodAluHs from '@/resources/Images/woodAluHs.webp';

interface AlSlidingWindowProps {
    className?: string;
}

const AlSlidingWindow = ({ className }: AlSlidingWindowProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Okna przesuwne WOOD ALU HS" />
            <Wrapper>
                <Container>
                    <ImageWrapper>
                        <Image src={woodAluHs} alt="woodAluHs" />
                    </ImageWrapper>
                    <ColorsWrapper>
                        <ColorWrapper>
                            <Color color={COLOR.silver}>
                                <ColorText>68 mm</ColorText>
                            </Color>
                            <ColorText>Grubość profilu</ColorText>
                        </ColorWrapper>
                        <ColorWrapper>
                            <Color color={COLOR.beige}>
                                <ColorText>78 mm</ColorText>
                            </Color>
                            <ColorText>Grubość profilu</ColorText>
                        </ColorWrapper>
                        <ColorWrapper>
                            <Color color={COLOR.brown}>
                                <ColorText>92 mm</ColorText>
                            </Color>
                            <ColorText>Grubość profilu</ColorText>
                        </ColorWrapper>
                    </ColorsWrapper>

                    <div>
                        <MainText>Profil o grubości:</MainText>
                        <SubtextWrapper>
                            <Line />
                            <Subtext>dla schematu A ramy 164 i skrzydła 68 (Wood ALU HS+ 68)</Subtext>
                        </SubtextWrapper>
                        <SubtextWrapper>
                            <Line />
                            <Subtext>
                                dla schematu D ramy 178 i skrzydła 68 (Wood ALU HS+ 68) ramy 184 i skrzydła 78 (Wood ALU
                                HS+ 78) ramy 212 i skrzydła 92(Wood ALU HS+ 92) pozwala na konstrukcje okienne o
                                wysokości sięgającej 3000 mm i szerokości 9000 mm (w zależności od schematu)
                            </Subtext>
                        </SubtextWrapper>
                        <SubtextWrapper>
                            <Subtext>Ciepły pakiet szybowy o grubości nawet 56mm</Subtext>
                            <MainText>(Ugmax=0,4 W/m2k)</MainText>
                        </SubtextWrapper>
                    </div>
                </Container>
                <ImageContainer />
            </Wrapper>
        </div>
    );
};

const Memoized = memo(AlSlidingWindow);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: 5rem 2rem 0;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        margin: 3rem 2rem 0;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        margin-top: 2rem;
    }
`;
const MainText = styled(TextSpan)`
    font-weight: ${FONT_WEIGHT.bold};
`;
const Subtext = styled(TextSpan)``;

const SubtextWrapper = styled.div`
    display: flex;
`;
const Line = styled.div`
    min-width: 1.5rem;
    height: 0.2rem;
    background-color: ${COLOR.deepCarrotOrange};
    margin-right: 1rem;
    margin-left: 0.5rem;
    position: relative;
    top: 20px;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        top: 14px;
    }
`;

const ColorText = styled(TextSpan)`
    padding: 1rem;
    text-align: center;
`;

const Color = styled.div<{ color: string }>`
    border-radius: 0.5rem;
    width: 9.5rem;
    height: 5.6rem;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${SCREEN_WIDTH.s}) {
        height: 3.5rem;
        width: 8.5rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        width: 6.5rem;
    }
`;
const ColorsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: ${SCREEN_WIDTH.xs}) {
        flex-direction: column;
        margin-bottom: 1.5rem;
    }
`;

const ColorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        flex-direction: row;
        justify-content: center;
    }
`;
const Wrapper = styled.div`
    display: grid;
    background-color: ${COLOR.midnightGreen};
    grid-template-columns: repeat(2, 1fr);
    color: ${COLOR.ghostWhite};

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
`;
const Container = styled.div`
    padding: 5rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${SCREEN_WIDTH.m}) {
        padding: 2.5rem 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding: 2.5rem 1rem;
    }
`;

const Image = styled.img`
    width: 600px;
    @media (max-width: ${SCREEN_WIDTH.s}) {
        width: 450px;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        width: 250px;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
`;

const ImageContainer = styled.div`
    min-height: 400px;
    background-image: url(${poolWindow});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export default Styled;
