import { memo } from 'react';
import styled from 'styled-components';

import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '@/Global/globalStyles';
import woodPlus from '@/resources/Images/woodPlus.webp';

interface WoodWindowInfoProps {
    className?: string;
}

const WoodWindowInfo = ({ className }: WoodWindowInfoProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Okna drewniane WOOD +" />
            <ImgWrapper>
                <StyledImg src={woodPlus} alt="logo" />
            </ImgWrapper>
            <Row>
                <Square />
                <div>
                    <BoldRowText>Wysokiej klasy okapnik aluminiowy </BoldRowText>
                    <RowText>
                        dostępny w wielu kolorach, który idealnie licuje z drewnianymi elementami okna. Okapnik
                        wykończony wysokiej jakości zaślepkami.
                    </RowText>
                </div>
            </Row>
            <Row>
                <Square />
                <div>
                    <BoldRowText>Okucia obwiedniowe z funkcją mikrowentylacji, </BoldRowText>
                    <RowText>
                        nożyca mikrowentylacji wyposażona w standardzie w zatrzask pozycji uchylnej, zawias dolny
                        regulowany w trzech płaszczyznach.
                    </RowText>
                </div>
            </Row>
            <Row>
                <Square />
                <div>
                    <BoldRowText>W standardzie aluminiowa listwa ochronna </BoldRowText>
                    <RowText>
                        montowana na dolnym elemencie skrzydła. (* na przyldze retro brak możliwości montażu aluminiowej
                        listwy ochronnej)
                    </RowText>
                </div>
            </Row>
            <Row>
                <Square />
                <div>
                    <BoldRowText>Wysokiej klasy okapnik aluminiowy </BoldRowText>
                    <RowText>
                        dostępny w wielu kolorach, który idealnie licuje z drewnianymi elementami okna. Okapnik
                        wykończony wysokiej jakości zaślepkami
                    </RowText>
                </div>
            </Row>
            <Row>
                <Square />
                <div>
                    <BoldRowText>Osłonki na zawiasy w kolorach standardowych: </BoldRowText>
                    <RowText>
                        biały, brązowy, srebrny, stare złoto, tytan ciemny mat (* inne kolory na zapytanie)
                    </RowText>
                </div>
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
