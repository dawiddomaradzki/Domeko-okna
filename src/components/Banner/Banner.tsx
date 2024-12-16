import { memo } from 'react';
import styled from 'styled-components';

import { COLOR, FONT_RESPONSIVE_SIZE, FONT_WEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import tarasolaWordLogo from '@/resources/Images/Tarasola/tarasolaWordLogo.png';

interface BannerProps {
    className?: string;
}

const Banner = ({ className }: BannerProps) => {
    return (
        <div className={className}>
            <SectionWrapper>
                <StyledText>Jesteśmy partnerem premium firmy</StyledText>
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

const StyledText = styled.span`
    font-weight: ${FONT_WEIGHT.medium};
    text-align: center;
    color: ${COLOR.ghostWhite};
    letter-spacing: 0.1rem;
    font-size: ${FONT_RESPONSIVE_SIZE.paragraph};
`;

const StyledAnchor = styled.a`
    letter-spacing: 0.1rem;
    text-align: center;
    color: ${COLOR.ghostWhite};
    font-size: ${FONT_RESPONSIVE_SIZE.paragraph};
    font-weight: ${FONT_WEIGHT.medium};
    cursor: pointer;

    :hover {
        color: ${COLOR.black};
    }
`;
export default Styled;
