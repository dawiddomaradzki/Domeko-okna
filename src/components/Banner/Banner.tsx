import { memo } from 'react';
import styled from 'styled-components';

import { SmallSpan } from '@/Global/components/commonComponents';
import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import tarasolaWordLogo from '@/resources/Images/Tarasola/tarasolaWordLogo.png';

interface BannerProps {
    className?: string;
}

const Banner = ({ className }: BannerProps) => {
    return (
        <div className={className}>
            <SectionWrapper>
                <StyledText>Zostaliśmy dumnym dealerem firmy</StyledText>
                <ImageContainer>
                    <Image src={tarasolaWordLogo} alt="tarasola logo" />
                </ImageContainer>
            </SectionWrapper>
            <SectionWrapper>
                <StyledAnchor href="https://tarasola.pl/" target="blank">
                    Dowiedz się więcej
                </StyledAnchor>
            </SectionWrapper>
        </div>
    );
};

const Memoized = memo(Banner);
const Styled = styled(Memoized)`
    background-color: ${COLOR.deepCarrotOrange};
    width: 100vw;
    height: 2.5rem;
    position: fixed;
    z-index: 100;
    top: 6rem;
    display: flex;
    justify-content: center;
    @media (max-width: ${SCREEN_WIDTH.m}) {
        flex-direction: column;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        top: 4rem;
    }
`;

const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.25rem;
    height: 0;
    @media (max-width: ${SCREEN_WIDTH.m}) {
        margin-right: 0;
    }
`;

const Image = styled.img`
    width: 120px;
    margin-bottom: 6px;
    @media (max-width: ${SCREEN_WIDTH.m}) {
        width: 100px;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        letter-spacing: 80px;
    }
`;

const StyledText = styled(SmallSpan)`
    text-align: center;
    color: ${COLOR.ghostWhite};
    letter-spacing: 0.1rem;
    @media (max-width: ${SCREEN_WIDTH.m}) {
        line-height: ${LINE_HEIGHT.s};
    }
    @media (max-width: ${SCREEN_WIDTH.s}) {
        line-height: ${LINE_HEIGHT.s};
        font-size: ${FONT_SIZE.xs};
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        letter-spacing: 0;
        line-height: ${LINE_HEIGHT.s};
        font-size: ${FONT_SIZE.xxs};
    }
`;
const StyledAnchor = styled.a`
    letter-spacing: 0.1rem;
    text-align: center;
    color: ${COLOR.ghostWhite};
    font-weight: ${FONT_WEIGHT.medium};
    font-size: ${FONT_SIZE.xs};
    line-height: ${LINE_HEIGHT.m};
    cursor: pointer;

    :hover {
        color: ${COLOR.black};
    }
    @media (max-width: ${SCREEN_WIDTH.m}) {
        line-height: ${LINE_HEIGHT.s};
        font-size: ${FONT_SIZE.xxs};
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        letter-spacing: 0;
    }
`;
export default Styled;
