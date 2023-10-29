import { memo } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
                    <StyledNavItem>
                        <StyledNavLink to="/">
                            <StyledText>Okna i drzwi</StyledText>
                        </StyledNavLink>
                    </StyledNavItem>
                    <StyledNavItem>
                        <StyledNavLink to="/shop">
                            <StyledText>Domeko salon</StyledText>
                        </StyledNavLink>
                    </StyledNavItem>
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

    @media (max-width: ${SCREEN_WIDTH.lTop}) {
        height: 6rem;
        padding: 0.7rem 2.5rem 0.4rem;
    }

    @media (max-width: ${SCREEN_WIDTH.s}) {
        height: 6rem;
        padding: 0.7rem 1.5rem 0.4rem;
    }

    @media (max-width: ${SCREEN_WIDTH.xs}) {
        height: 5rem;
        padding: 0.5rem 1.5rem;
    }
`;

const StyledNavLink = styled(NavLink)`
    &.active {
        p::after {
            content: '';
            height: 2px;
            width: 100%;
            background: ${COLOR.deepCarrotOrange};
            display: block;
        }
    }
`;
const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 1201px) {
        & svg {
            width: 18rem;
            height: 18rem;
        }
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        & svg {
            width: 10rem;
        }
    }
`;

const NavTextWrapper = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        justify-content: center;
    }
`;

const NavigationContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        flex-direction: column;
    }
`;

const Line = styled.div`
    margin-top: 1rem;
    border-bottom: 4px solid ${COLOR.deepCarrotOrange};
    width: 80%;

    @media (max-width: ${SCREEN_WIDTH.xs}) {
        margin-top: 0.5rem;
    }
`;

const StyledNavItem = styled(Nav.Item)`
    margin-right: 3rem;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        margin: 0;
    }
`;

const StyledText = styled.p`
    color: ${COLOR.white};
    font-size: ${FONT_SIZE.l};
    font-weight: ${FONT_WEIGHT.lite};
    cursor: pointer;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        margin: 0 1.5rem;
        font-size: ${FONT_SIZE.m};
    }
    @media (max-width: ${SCREEN_WIDTH.s}) {
        margin: 0 0.8rem;
        font-size: ${FONT_SIZE.m};
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        font-size: ${FONT_SIZE.xs};
        margin: 0.3rem 0.5rem 0;
    }
`;

export default Styled;
