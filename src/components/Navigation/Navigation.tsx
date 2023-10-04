import { memo } from 'react';
import styled from 'styled-components';

import { Box } from '@/Global/components/commonComponents';
import { COLOR, FONT_SIZE, FONT_WEIGHT } from '@/Global/globalStyles';
import DomekoLogoNoBackgroundSVG from '@/resources/Icons/domekoLogoNoBackgroundWhite.svg';

interface NavigationProps {
    className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
    return (
        <div className={className}>
            <NavigationContainer>
                <ImageWrapper>
                    <img src={DomekoLogoNoBackgroundSVG} alt="DomekoLogoNoBackgroundSVG" />
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

    a {
        color: inherit;
        text-decoration: inherit;
        font-size: inherit;
        font-weight: inherit;
    }
`;

const ImageWrapper = styled(Box)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
        width: 18rem;
    }
`;

const NavTextWrapper = styled(Box)`
    align-items: center;
`;

const NavigationContainer = styled(Box)`
    width: 100%;
    justify-content: space-between;
`;

const Line = styled.div`
    margin-top: 1rem;
    border-bottom: 4px solid ${COLOR.deepCarrotOrange};
    width: 80%;
`;

const StyledText = styled.p`
    color: ${COLOR.white};
    font-size: ${FONT_SIZE.medium};
    font-weight: ${FONT_WEIGHT.lite};
    margin-right: 3rem;
    cursor: pointer;
`;

export default Styled;
