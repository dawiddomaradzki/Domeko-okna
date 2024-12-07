import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import { COLOR, SCREEN_WIDTH } from '@/Global/globalStyles';
import { ReactComponent as ArrowUpLogoSVG } from '@/resources/Icons/arrow-up-long.svg';
import { scrollToSectionWithOffset } from '@/utils/scrollTo';

import TarasolaAccessories from './TarasolaAccessories';
import TarasolaConstruction from './TarasolaConstruction';
import TarasolaForm from './TarasolaForm';
import TarasolaLight from './TarasolaLight';
import TarasolaSideConstruction from './TarasolaSideConstruction';
import TarasolaType from './TarasolaType';

interface TarasolaProps {
    className?: string;
}

const Tarasola = ({ className }: TarasolaProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={className} id="top">
            <TarasolaForm />
            <TarasolaType />
            <TarasolaConstruction />
            <TarasolaSideConstruction />
            <TarasolaLight />
            <TarasolaAccessories />
            <IconWrapper $isVisible={isVisible} onClick={() => scrollToSectionWithOffset('top', 0)}>
                <ArrowUpLogoSVG />
            </IconWrapper>
        </div>
    );
};

const Memoized = memo(Tarasola);
const Styled = styled(Memoized)`
    margin: 0 3rem;
    padding-top: 10rem;

    @media (max-width: ${SCREEN_WIDTH.s}) {
        padding-top: 8rem;
        margin: 0 1rem;
    }
`;

const IconWrapper = styled.div<{ $isVisible: boolean }>`
    position: fixed;
    width: 60px;
    height: 60px;
    background-color: ${COLOR.grey};
    opacity: 85%;
    bottom: 20px;
    left: 44vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    visibility: ${props => (props.$isVisible ? 'visible' : 'hidden')};
    transition: all 0.2s ease-in-out;
    & svg {
        height: 25px;
        cursor: pointer;
        fill: ${COLOR.ghostWhite};
    }

    &:hover {
        & svg {
            fill: ${COLOR.deepCarrotOrange};
            transition: fill 0.3s ease;
        }
    }
`;

export default Styled;
