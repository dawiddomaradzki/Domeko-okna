import { memo } from 'react';
import styled from 'styled-components';

import { Box } from '@/Global/components/commonComponents';
import { COLOR, FONT_SIZE, FONT_WEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import { ReactComponent as DomekoLogoNoBackgroundSVG } from '@/resources/Icons/domekoLogoNoBackgroundWhite.svg';

interface NavigationProps {
    className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
    return (
        <div className={className}>
            <NavigationContainer>
                <ImageWrapper>
                    <DomekoLogoNoBackgroundSVG />
                    <Line />
                </ImageWrapper>
                <NavTextWrapper>
                    <StyledText>
                        <a href="#about">O nas</a>
                    </StyledText>
                    <StyledText>
                        <a href="#offer">Oferta</a>
                    </StyledText>
                    <StyledText>
                        <a href="#realization">Nasze realizacje</a>
                    </StyledText>
                    <StyledText>
                        <a href="#contact">Kontakt</a>
                    </StyledText>
                </NavTextWrapper>
            </NavigationContainer>
        </div>
    );
};

const Memoized = memo(Navigation);
const Styled = styled(Memoized)`
    position: fixed;
    z-index: 9999;
    height: 6rem;
    width: 100%;
    background-color: ${COLOR.midnightGreenRGB};
    display: flex;
    padding: 1rem 2.5rem;

    @media (max-width: ${SCREEN_WIDTH.xlargeMin}) {
        height: 6rem;
        padding: 0.7rem 2.5rem 0.4rem;
    }

    @media (max-width: ${SCREEN_WIDTH.medium}) {
        height: 6rem;
        padding: 0.7rem 1.5rem 0.4rem;
    }

    @media (max-width: ${SCREEN_WIDTH.small}) {
        height: 5rem;
        padding: 0.5rem 1.5rem;
    }
`;

const ImageWrapper = styled(Box)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 1201px) {
        & svg {
            width: 18rem;
            height: 18rem;
        }
    }
    @media (max-width: ${SCREEN_WIDTH.small}) {
        & svg {
            width: 10rem;
        }
    }
`;

const NavTextWrapper = styled(Box)`
    align-items: center;
    @media (max-width: ${SCREEN_WIDTH.xlargeMax}) {
        justify-content: center;
    }
`;

const NavigationContainer = styled(Box)`
    width: 100%;
    justify-content: space-between;

    @media (max-width: ${SCREEN_WIDTH.xlargeMax}) {
        flex-direction: column;
    }
`;

const Line = styled.div`
    margin-top: 1rem;
    border-bottom: 4px solid ${COLOR.deepCarrotOrange};
    width: 80%;

    /* @media (max-width: ${SCREEN_WIDTH.xlargeMax}) {
        margin-top: 0.6rem;
    } */
    @media (max-width: ${SCREEN_WIDTH.small}) {
        margin-top: 0.5rem;
    }
`;

const StyledText = styled.p`
    color: ${COLOR.white};
    font-size: ${FONT_SIZE.medium};
    font-weight: ${FONT_WEIGHT.lite};
    margin-right: 3rem;
    cursor: pointer;
    @media (max-width: ${SCREEN_WIDTH.xlargeMax}) {
        margin: 0 1.5rem;
        font-size: ${FONT_SIZE.normal};
    }
    @media (max-width: ${SCREEN_WIDTH.medium}) {
        margin: 0 0.8rem;
        font-size: ${FONT_SIZE.normal};
    }
    @media (max-width: ${SCREEN_WIDTH.small}) {
        font-size: ${FONT_SIZE.default};
        margin: 0.3rem 0.5rem 0;
    }
`;

export default Styled;
