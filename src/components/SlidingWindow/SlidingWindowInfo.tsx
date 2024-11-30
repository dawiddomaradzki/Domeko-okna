import { memo } from 'react';
import styled from 'styled-components';

import { TextSpan } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_WEIGHT, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import { ReactComponent as SquareSVG } from '@/resources/Icons/square-solid.svg';
import woodAlu from '@/resources/Images/woodAlu.webp';

interface SlidingWindowInfoProps {
    className?: string;
}

const SlidingWindowInfo = ({ className }: SlidingWindowInfoProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Okna drewniano-aluminiowe WOOD ALU" />
            <ImgWrapper data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                <StyledImg src={woodAlu} alt="woodAlu" />
            </ImgWrapper>
            <Row>
                <div>
                    <Square />
                </div>
                <TextWrapper>
                    <BoldRowText>Odporne na działanie wiatru, deszczu, słońca. </BoldRowText>
                    <RowText>Charakteryzują się długowiecznością i odpornością na trudne warunki.</RowText>
                </TextWrapper>
            </Row>
            <Row>
                <div>
                    <Square />
                </div>
                <TextWrapper>
                    <BoldRowText>Możliwość wykonania niemal w każdym kształcie i dużych rozmiarach. </BoldRowText>
                    <RowText>Spełniają oczekiwania najbardziej kreatywnych inwestorów i architektów.</RowText>
                </TextWrapper>
            </Row>
            <Row>
                <div>
                    <Square />
                </div>
                <TextWrapper>
                    <BoldRowText>
                        Konstrukcja oparta na bazie połączenia dwóch ram drewnianej oraz aluminiowej,{' '}
                    </BoldRowText>
                    <RowText>to jedno z najlepszych rozwiązań na rynku.</RowText>
                </TextWrapper>
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
    padding: 5rem 2rem 0;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding: 3rem 2rem 0;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding-top: 2rem;
    }
`;

const StyledImg = styled.img`
    width: 1200px;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        width: 900px;
    }
    @media (max-width: ${SCREEN_WIDTH.m}) {
        width: 750px;
    }
    @media (max-width: ${SCREEN_WIDTH.s}) {
        width: 600px;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        width: 350px;
    }
`;
const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0 5rem 0;
`;

const Row = styled.div`
    display: flex;
    padding-bottom: 1rem;
    margin: 0 1rem;
`;

const TextWrapper = styled.div`
    margin-left: 2rem;
`;

const Square = styled(SquareSVG)`
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.7rem;
    fill: ${COLOR.deepCarrotOrange};
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        width: 1rem;
        height: 1rem;
    }
`;

const RowText = styled(TextSpan)`
    @media (max-width: ${SCREEN_WIDTH.s}) {
        line-height: ${LINE_HEIGHT.m};
    }
`;
const BoldRowText = styled(TextSpan)`
    font-weight: ${FONT_WEIGHT.bold};

    @media (max-width: ${SCREEN_WIDTH.s}) {
        line-height: ${LINE_HEIGHT.m};
    }
`;
export default Styled;
