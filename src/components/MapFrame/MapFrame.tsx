import { memo } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, LINE_HEIGHT } from '@/Global/globalStyles';
import arrow from '@/resources/Icons/arrow-up-right-from-square-solid.svg';
import DomekoLogoNoBackgroundSVG from '@/resources/Icons/domekoLogoNoBackgroundBlack.svg';
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
                    <Text>
                        Jesteśmy firmą zlokalizowaną we Włoszczowie na ulicy Przedborskiej 45. Jeśli potrzebujesz
                        profesjonalnego wsparcia w dziedzinie doradztwa, transportu lub planujesz zakup okien i drzwi,
                        skontaktuj się z nami.
                    </Text>
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
                    <Text>Sprawdź również witrynę naszego salonu oraz pełną ofertę naszego partnera!</Text>
                    <ButtonsWrapper>
                        <ButtonWrapper>
                            <Img src={DomekoLogoNoBackgroundSVG} alt="DomekoLogoNoBackgroundSVG" />
                            <StyledButton variant="secondary" size="lg">
                                <a href="https://domeko.eu/" target="blank">
                                    Sprawdź
                                </a>
                                <StyledIcon src={arrow} alt="arrow" />
                            </StyledButton>
                        </ButtonWrapper>
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
                    </ButtonsWrapper>
                </TextContainer>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10074.155159289425!2d19.9693384!3d50.8582244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717644fb5c878ed%3A0xca9e849b92351589!2sDomeko!5e0!3m2!1spl!2spl!4v1695065928040!5m2!1spl!2spl"
                        width="1000"
                        height="560"
                        style={{ border: 0 }}
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
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonsWrapper = styled.div`
    padding-top: 2rem;
    padding-bottom: 0.4;
    display: flex;
    justify-content: space-between;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledButton = styled(Button)`
    width: 250px;
    margin-top: 1.5rem;
    background-color: ${COLOR.grey};
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 2rem;
`;

const StyledIcon = styled.img`
    width: 32px;
    padding-left: 1rem;
`;

const Text = styled.p`
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.medium};
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
