import { memo } from 'react';
import styled from 'styled-components';

import { COLOR } from '@/Global/globalStyles';
import { ReactComponent as ArrowUpLogoSVG } from '@/resources/Icons/arrow-up-long.svg';

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
    return (
        <div className={className} id="top">
            <TarasolaForm />
            <TarasolaType />
            <TarasolaConstruction />
            <TarasolaSideConstruction />
            <TarasolaLight />
            <TarasolaAccessories />
            <IconWrapper>
                <a href="#top">
                    <ArrowUpLogoSVG />
                </a>
            </IconWrapper>
        </div>
    );
};

const Memoized = memo(Tarasola);
const Styled = styled(Memoized)`
    margin: 0 3rem;
    padding-top: 10rem;
`;

const IconWrapper = styled.div`
    position: fixed;
    width: 60px;
    height: 60px;
    background-color: ${COLOR.grey};
    opacity: 85%;
    bottom: 20px;
    left: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
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
