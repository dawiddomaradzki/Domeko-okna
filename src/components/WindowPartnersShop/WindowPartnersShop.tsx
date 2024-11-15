import { memo } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import { Header, Text } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import effector from '@/resources/Icons/effector.svg';
import eko from '@/resources/Icons/eko.svg';
import fizia from '@/resources/Icons/fizia.svg';
import horman from '@/resources/Icons/hoermann-vector-logo.svg';
import kns from '@/resources/Icons/kns.webp';

interface WindowPartnersShopProps {
    className?: string;
}

const WindowPartnersShop = ({ className }: WindowPartnersShopProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Okna aluminiowe i drzwi" />
            <Wrapper>
                <div>
                    <StyledText>
                        Szukasz nowoczesnych, trwałych i eleganckich okien aluminiowych lub drzwi? Mamy dla Ciebie
                        idealne rozwiązanie! Nasz sklep oferuje również szeroki wybór okien aluminiowych premium oraz
                        drzwi, które spełnią wszystkie Twoje oczekiwania. Zapoznaj się z producentami, z którymi
                        współpracuje nasz salon.
                    </StyledText>
                </div>

                <ImagesWrapper>
                    <ImageWrapper>
                        <ImageContainer>
                            <Image src={effector} alt="effector" />
                        </ImageContainer>
                        <StyledHeader>Effector okna</StyledHeader>
                        <StyledButton variant="secondary" size="lg">
                            <a href="https://www.effector.pl/" target="blank">
                                Sprawdź
                            </a>
                        </StyledButton>
                    </ImageWrapper>
                    <ImageWrapper>
                        <ImageContainer>
                            <Image src={eko} alt="eko" />
                        </ImageContainer>
                        <StyledHeader>Eko okna</StyledHeader>
                        <StyledButton variant="secondary" size="lg">
                            <a href="https://ekookna.pl/" target="blank">
                                Sprawdź
                            </a>
                        </StyledButton>
                    </ImageWrapper>
                    <ImageWrapper>
                        <ImageContainer>
                            <Image src={kns} alt="kns" />
                        </ImageContainer>
                        <StyledHeader>KNS okna</StyledHeader>
                        <StyledButton variant="secondary" size="lg">
                            <a href="https://knsokna.pl/" target="blank">
                                Sprawdź
                            </a>
                        </StyledButton>
                    </ImageWrapper>
                    <ImageWrapper>
                        <ImageContainer>
                            <Image src={fizia} alt="fizia" />
                        </ImageContainer>
                        <StyledHeader>Fizia drzwi</StyledHeader>
                        <StyledButton variant="secondary" size="lg">
                            <a href="https://www.fizia.pl/" target="blank">
                                Sprawdź
                            </a>
                        </StyledButton>
                    </ImageWrapper>
                    <ImageWrapper>
                        <ImageContainer>
                            <Image src={horman} alt="horman" />
                        </ImageContainer>
                        <StyledHeader>Hormann drzwi</StyledHeader>
                        <StyledButton variant="secondary" size="lg">
                            <a href="https://www.hormann.pl/" target="blank">
                                Sprawdź
                            </a>
                        </StyledButton>
                    </ImageWrapper>
                </ImagesWrapper>
            </Wrapper>
        </div>
    );
};

const Memoized = memo(WindowPartnersShop);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    padding-top: 8rem;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-top: 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding-top: 2rem;
    }
`;

const StyledText = styled(Text)`
    text-align: center;
    @media (max-width: ${SCREEN_WIDTH.lTop}) {
        font-size: ${FONT_SIZE.m};
        line-height: ${LINE_HEIGHT.m};
    }
`;

const Image = styled.img`
    width: 250px;
`;

const StyledButton = styled(Button)`
    width: 250px;

    @media (max-width: ${SCREEN_WIDTH.m}) {
        margin-top: 1.5rem;
    }
`;

const ImagesWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 1360px) {
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    & > div:last-of-type {
        justify-content: end;
    }

    @media (max-width: ${SCREEN_WIDTH.m}) {
        margin-top: 3rem;
    }
`;

const Wrapper = styled.div`
    background: ${COLOR.grey};
    color: ${COLOR.ghostWhite};
    padding: 4rem;
    @media (max-width: ${SCREEN_WIDTH.m}) {
        flex-direction: column;
        padding: 2rem;
    }
    @media (max-width: ${SCREEN_WIDTH.s}) {
        flex-direction: column;
    }
`;

const StyledHeader = styled(Header)`
    text-align: center;
    color: ${COLOR.ghostWhite};
    font-size: ${FONT_SIZE.m};
    padding: 2rem 0;

    @media (max-width: ${SCREEN_WIDTH.m}) {
        font-size: ${FONT_SIZE.s};
        padding: 1rem 0;
    }
`;
export default Styled;
