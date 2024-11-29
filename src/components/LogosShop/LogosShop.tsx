import { memo } from 'react';
import styled from 'styled-components';

import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { SCREEN_WIDTH } from '@/Global/globalStyles';
import allegroSVG from '@/resources/Icons/Allegro.svg';
import facebookSVG from '@/resources/Icons/FacebookWord.svg';

interface LogosShopProps {
    className?: string;
}

const LogosShop = ({ className }: LogosShopProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Sprawdź nas" />
            <IconsWrapper>
                <a href="https://www.facebook.com/Domeko-W%C5%82oszczowa-564951136912778/" target="blank">
                    <img src={facebookSVG} alt="facebookSVG" className="face" />
                </a>
                <a href="https://allegro.pl/uzytkownik/radek_domeko" target="_blank" rel="noreferrer">
                    <img src={allegroSVG} alt="allegroSVG" className="alle" />
                </a>
            </IconsWrapper>
        </div>
    );
};

const Memoized = memo(LogosShop);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    padding-top: 5rem;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-top: 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding-top: 2rem;
    }
`;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    & svg {
        cursor: pointer;
    }

    & .face {
        height: clamp(100px, 30vw, 150px);
        padding: 2rem 0;
    }
    & .alle {
        height: clamp(60px, 20vw, 130px);
    }
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        flex-direction: column;
    }
`;
export default Styled;
