import { memo } from 'react';
import styled from 'styled-components';

import { Header, Text } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import budowlanka from '@/resources/Images/budowlanka.png';
import door from '@/resources/Images/door.png';
import slab from '@/resources/Images/slab.png';
import visualization from '@/resources/Images/visualization.png';

interface OfferShopProps {
    className?: string;
}

const OfferShop = ({ className }: OfferShopProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="W salonie oferujemy" />
            <Container>
                <Row data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <StyledCard>
                        <StyledImg src={slab} />
                        <div>
                            <StyledHeader>Płytki</StyledHeader>
                            <StyledText>
                                Posiadamy w ofercie szeroką gamę płytek w wielu formatach oraz wzorach odpowiadających
                                nowoczesnym trendom. Nasze płytki to produkty najwyższej jakości producentów z
                                wieloletnim doświadczeniem na rynku.
                            </StyledText>
                        </div>
                    </StyledCard>
                </Row>
                <Row data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <StyledCard>
                        <StyledImg src={visualization} />
                        <div>
                            <StyledHeader>Wizualizacje łazienek</StyledHeader>
                            <StyledText>
                                Wykonujemy wizualizacje łazienek na życzenie klienta. Dzięki nim w łatwy sposób
                                wyobrazisz sobie, jak dobrane przez nas komponenty będą ze sobą współgrać w końcowym
                                projekcie.
                            </StyledText>
                        </div>
                    </StyledCard>
                </Row>
                <Row data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <StyledCard>
                        <StyledImg src={door} />
                        <div>
                            <StyledHeader>Okna i drzwi</StyledHeader>
                            <StyledText>
                                W naszym salonie znajdą Państwo wiele modeli okien oraz drzwi zarówno tych zawnętrznych
                                jak i wewnętrznych. Oferujemy również ich transport i montaż u klienta.
                            </StyledText>
                        </div>
                    </StyledCard>
                </Row>
                <Row data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <StyledCard>
                        <StyledImg src={budowlanka} />
                        <div>
                            <StyledHeader>Artykuły budowlane</StyledHeader>
                            <StyledText>
                                W salonie posiadamy studio Dekoral, które pozwoli na dobór oraz wymieszanie wybranych
                                tynków i farb. Oferujemy również różnego rodzaju wyposażenie wnętrz oraz artykuły
                                budowalne takie jak: armatura łazienkowa, materiały wykończeniowe, akcesoria remontowe i
                                nie tylko!
                            </StyledText>
                        </div>
                    </StyledCard>
                </Row>
            </Container>
        </div>
    );
};

const Memoized = memo(OfferShop);
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

const StyledCard = styled.div`
    color: ${COLOR.ghostWhite};
    text-align: center;
`;

const StyledHeader = styled(Header)`
    padding: 2rem 0;
`;

const StyledText = styled(Text)`
    padding: 0 4rem 2rem;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding: 0 2rem 1rem;
    }
    @media (max-width: ${SCREEN_WIDTH.s}) {
        line-height: ${LINE_HEIGHT.m};
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1.5rem;
    margin: 0 3rem;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
`;

const Row = styled.div`
    background-color: ${COLOR.midnightGreen};
    border-radius: 1rem;
`;

const StyledImg = styled.img`
    height: 600px;
    width: 100%;
    /* height: clamp(18.75rem, 50vw, 46.875rem); */
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;

    @media (max-width: ${SCREEN_WIDTH.xs}) {
        height: 300px;
    }
`;

export default Styled;
