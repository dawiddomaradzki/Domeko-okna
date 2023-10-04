import { memo } from 'react';
import styled from 'styled-components';

import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '@/Global/globalStyles';
import slidingWindow from '@/resources/Images/slidingWindow.png';
import woodPlusHs from '@/resources/Images/woodPlusHs.webp';

interface SlidingWindowProps {
    className?: string;
}

const SlidingWindow = ({ className }: SlidingWindowProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Okna przesuwne WOOD + HS" />
            <Wrapper>
                <Container>
                    <ImageWrapper>
                        <Image src={woodPlusHs} alt="woodPlusHs" />
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
                            <Subtext>dla schematu A ramy 164 i skrzydła 68 (Wood+ HS 68)</Subtext>
                        </SubtextWrapper>
                        <SubtextWrapper>
                            <Line />
                            <Subtext>
                                dla schematu D ramy 178 i skrzydła 68 (Wood+ HS 68) ramy 184 i skrzydła 78 (Wood HS+ 78)
                                ramy 212 i skrzydła 92 (Wood+ HS 92) pozwala na konstrukcje okienne o wysokości
                                sięgającej 3000 mmi szerokości 9000 mm (w zależności od schematu)
                            </Subtext>
                        </SubtextWrapper>
                        <SubtextWrapper>
                            <Subtext>Ciepły pakiet szybowy o grubości nawet 56mm</Subtext>
                            <MainText>(Ugmax=0,4 W/m2k)</MainText>
                        </SubtextWrapper>
                    </div>
                </Container>
                <div>
                    <StyledImg src={slidingWindow} alt="slidingWindow" />
                </div>
            </Wrapper>
        </div>
    );
};

const Memoized = memo(SlidingWindow);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    padding-top: 7rem;
`;
const MainText = styled.p`
    color: ${COLOR.ghostWhite};
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.default};
    line-height: ${LINE_HEIGHT.medium};
`;
const Subtext = styled.span`
    color: ${COLOR.ghostWhite};
    font-weight: ${FONT_WEIGHT.normal};
    font-size: ${FONT_SIZE.default};
    line-height: ${LINE_HEIGHT.medium};
`;

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
    top: 14px;
`;

const ColorText = styled.p`
    padding: 1rem;
    color: ${COLOR.ghostWhite};
    font-weight: ${FONT_WEIGHT.normal};
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.medium};
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
`;
const ColorsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ColorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Wrapper = styled.div`
    background-color: ${COLOR.midnightGreen};
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

const StyledImg = styled.img`
    object-fit: cover;
`;

const Image = styled.img`
    width: 600px;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export default Styled;
