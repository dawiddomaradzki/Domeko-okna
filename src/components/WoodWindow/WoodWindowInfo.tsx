import { memo } from 'react';
import styled from 'styled-components';

import { TextSpan } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_WEIGHT, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import { ReactComponent as SquareSVG } from '@/resources/Icons/square-solid.svg';
import woodPlus from '@/resources/Images/woodPlus.webp';

interface WoodWindowInfoProps {
    className?: string;
}

const WoodWindowInfo = ({ className }: WoodWindowInfoProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Okna drewniane WOOD +" />
            <ImgWrapper data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                <StyledImg src={woodPlus} alt="logo" />
            </ImgWrapper>
            <Row>
                <div>
                    <Square />
                </div>
                <TextWrapper>
                    <BoldRowText>Wysokiej klasy okapnik aluminiowy </BoldRowText>
                    <RowText>
                        dostępny w wielu kolorach, który idealnie licuje z drewnianymi elementami okna. Okapnik
                        wykończony wysokiej jakości zaślepkami.
                    </RowText>
                </TextWrapper>
            </Row>
            <Row>
                <div>
                    <Square />
                </div>
                <TextWrapper>
                    <BoldRowText>Okucia obwiedniowe z funkcją mikrowentylacji, </BoldRowText>
                    <RowText>
                        nożyca mikrowentylacji wyposażona w standardzie w zatrzask pozycji uchylnej, zawias dolny
                        regulowany w trzech płaszczyznach.
                    </RowText>
                </TextWrapper>
            </Row>
            <Row>
                <div>
                    <Square />
                </div>
                <TextWrapper>
                    <BoldRowText>W standardzie aluminiowa listwa ochronna </BoldRowText>
                    <RowText>
                        montowana na dolnym elemencie skrzydła. (* na przyldze retro brak możliwości montażu aluminiowej
                        listwy ochronnej)
                    </RowText>
                </TextWrapper>
            </Row>
            <Row>
                <div>
                    <Square />
                </div>
                <TextWrapper>
                    <BoldRowText>Osłonki na zawiasy w kolorach standardowych: </BoldRowText>
                    <RowText>
                        biały, brązowy, srebrny, stare złoto, tytan ciemny mat (* inne kolory na zapytanie)
                    </RowText>
                </TextWrapper>
            </Row>
            <Row>
                <div>
                    <Square />
                </div>
                <TextWrapper>
                    <BoldRowText>Możliwość wykonania niemal w każdym kształcie </BoldRowText>
                    <RowText>
                        i dużych rozmiarach. Spełniają oczekiwania najbardziej kreatywnych inwestorów i architektów.
                    </RowText>
                </TextWrapper>
            </Row>
        </div>
    );
};

const Memoized = memo(WoodWindowInfo);
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
