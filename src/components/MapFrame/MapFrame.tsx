import { memo } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import arrow from '@/resources/Icons/arrow-up-right-from-square-solid.svg';
import WGTtextSVG from '@/resources/Icons/wgt-text-logo.svg';

interface MapFrameProps {
    className?: string;
}

const MapFrame = ({ className }: MapFrameProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Kontakt" />
            <Container>
                <TextContainer>
                    <div>
                        <Text>
                            Jesteśmy firmą zlokalizowaną we Włoszczowie na ulicy Przedborskiej 45. Jeśli potrzebujesz
                            profesjonalnego wsparcia w dziedzinie doradztwa, transportu lub planujesz zakup okien i
                            drzwi, skontaktuj się z nami.
                        </Text>
                    </div>
                    <div>
                        <Text>W naszym salonie oferujemy również:</Text>
                        <TextWrapper>
                            <Line />
                            <Text>Płytki</Text>
                        </TextWrapper>
                        <TextWrapper>
                            <Line />
                            <Text>Wizualizacje łazienek</Text>
                        </TextWrapper>
                        <TextWrapper>
                            <Line />
                            <Text>Artykuły budowlane</Text>
                        </TextWrapper>
                    </div>
                    <div>
                        <Text>Sprawdź również pełną ofertę naszego partnera!</Text>
                    </div>
                    <ButtonWrapper>
                        <Img src={WGTtextSVG} alt="WGTtextSVG" />
                        <StyledButton variant="secondary" size="lg">
                            <a href="https://www.woodnatural.pl/" target="blank">
                                Sprawdź
                            </a>
                            <StyledIcon src={arrow} alt="arrow" />
                        </StyledButton>
                    </ButtonWrapper>
                    <ButtonWrapper />
                </TextContainer>
                <div>
                    <StyledFrame
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10074.155159289425!2d19.9693384!3d50.8582244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717644fb5c878ed%3A0xca9e849b92351589!2sDomeko!5e0!3m2!1spl!2spl!4v1695065928040!5m2!1spl!2spl"
                        allowFullScreen={true}
                        loading="lazy"
                        title="domeko-mapFrame"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </Container>
        </div>
    );
};

const Memoized = memo(MapFrame);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 8rem;

    @media (max-width: ${SCREEN_WIDTH.xlargeMax}) {
        padding-top: 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.small}) {
        padding-top: 2rem;
    }
`;

const StyledFrame = styled.iframe`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border: 0;

    @media (max-width: ${SCREEN_WIDTH.xlargeMax}) {
        height: 400px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: ${SCREEN_WIDTH.xlargeMax}) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 1.5rem;
    justify-content: center;
    align-items: center;

    @media (max-width: ${SCREEN_WIDTH.small}) {
        flex-direction: column;
    }
`;

const StyledButton = styled(Button)`
    width: 250px;
    margin: 0 0 0 1.5rem;
    background-color: ${COLOR.grey};

    @media (max-width: ${SCREEN_WIDTH.small}) {
        margin: 1.5rem 0 0 0;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 2rem;

    & > div {
        padding-bottom: 1.5rem;
    }

    @media (max-width: ${SCREEN_WIDTH.small}) {
        padding: 0 0.5rem;
    }
`;

const StyledIcon = styled.img`
    width: 32px;
    padding-left: 1rem;
`;

const Text = styled.p`
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.medium};

    @media (max-width: ${SCREEN_WIDTH.small}) {
        font-size: ${FONT_SIZE.default};
    }
`;

const Line = styled.div`
    min-width: 1.5rem;
    height: 0.2rem;
    background-color: ${COLOR.deepCarrotOrange};
    margin-right: 1rem;
    margin-left: 0.5rem;
    top: 14px;
`;

const Img = styled.img`
    width: 200px;
`;
export default Styled;
