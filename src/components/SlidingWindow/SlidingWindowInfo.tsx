import { memo } from 'react';
import styled from 'styled-components';

import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '@/Global/globalStyles';
import woodAlu from '@/resources/Images/woodAlu.webp';

interface SlidingWindowInfoProps {
    className?: string;
}

const SlidingWindowInfo = ({ className }: SlidingWindowInfoProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Okna drewniano-aluminiowe WOOD ALU" />
            <ImgWrapper>
                <StyledImg src={woodAlu} alt="woodAlu" />
            </ImgWrapper>
            <Row>
                <Square />
                <div>
                    <BoldRowText>Odporne na działanie wiatru, deszczu, słońca. </BoldRowText>
                    <RowText>Charakteryzują się długowiecznością i odpornością na trudne warunki.</RowText>
                </div>
            </Row>
            <Row>
                <Square />
                <div>
                    <BoldRowText>Możliwość wykonania niemal w każdym kształcie i dużych rozmiarach. </BoldRowText>
                    <RowText>Spełniają oczekiwania najbardziej kreatywnych inwestorów i architektów.</RowText>
                </div>
            </Row>
            <Row>
                <Square />
                <div>
                    <BoldRowText>
                        Konstrukcja oparta na bazie połączenia dwóch ram drewnianej oraz aluminiowej,{' '}
                    </BoldRowText>
                    <RowText>to jedno z najlepszych rozwiązań na rynku.</RowText>
                </div>
            </Row>
        </div>
    );
};

const Memoized = memo(SlidingWindowInfo);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-top: 8rem;
`;

const StyledImg = styled.img`
    width: 1200px;
`;
const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0 5rem 0;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
`;

const Square = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 2rem;
    background-color: ${COLOR.deepCarrotOrange};
`;

const RowText = styled.span`
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.xlarge};
`;
const BoldRowText = styled.span`
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.xlarge};
`;
export default Styled;
