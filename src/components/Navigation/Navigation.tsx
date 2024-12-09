import { memo, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR, FONT_RESPONSIVE_SIZE, FONT_WEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import { ReactComponent as DomekoLogoNoBackgroundSVG } from '@/resources/Icons/domekoLogoNoBackgroundWhite.svg';

interface NavigationProps {
    className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={className}>
            <NavigationContainer>
                <ImageWrapper>
                    <DomekoLogoNoBackgroundSVG />
                </ImageWrapper>
                <NavTextWrapper>
                    <StyledNavItem>
                        <StyledNavLink to="/tarasola">
                            <StyledText>Tarasola - Wyceń</StyledText>
                        </StyledNavLink>
                    </StyledNavItem>
                    <StyledNavItem>
                        <StyledNavLink to="/gallery">
                            <StyledText>Galeria</StyledText>
                        </StyledNavLink>
                    </StyledNavItem>
                    <StyledNavItem>
                        <StyledNavLink to="/">
                            <StyledText>Okna i drzwi</StyledText>
                        </StyledNavLink>
                    </StyledNavItem>
                    <StyledNavItem>
                        <StyledNavLink to="/shop">
                            <StyledText>Projektowanie i wnętrza</StyledText>
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
    width: 100vw;
    background-color: ${COLOR.midnightGreenRGB};
    display: flex;
    padding: 1rem 2.5rem;

    @media (max-width: ${SCREEN_WIDTH.xs}) {
        height: 4rem;
        padding: 0.5rem;
    }
`;

const StyledNavLink = styled(NavLink)`
    &.active {
        p::after {
            position: relative;
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
    margin-right: 1rem;
    @media (min-width: 1201px) {
        & svg {
            width: 16rem;
            height: 16rem;
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
    @media (max-width: ${SCREEN_WIDTH.m}) {
        justify-content: space-around;
    }
`;

const NavigationContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: ${SCREEN_WIDTH.m}) {
        flex-direction: column;
    }
`;

const StyledNavItem = styled(Nav.Item)`
    margin-right: 3rem;
    @media (max-width: ${SCREEN_WIDTH.m}) {
        margin: 0;
    }
`;

const StyledText = styled.p`
    color: ${COLOR.white};
    font-weight: ${FONT_WEIGHT.lite};
    cursor: pointer;
    font-size: ${FONT_RESPONSIVE_SIZE.navigation};
`;

export default Styled;
