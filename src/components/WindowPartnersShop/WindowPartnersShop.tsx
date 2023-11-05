import { memo } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import { Header, Text } from '@/Global/components/commonComponents';
import { COLOR, FONT_SIZE, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import effector from '@/resources/Icons/effector.svg';
import eko from '@/resources/Icons/eko.svg';
import kns from '@/resources/Icons/kns.webp';

interface WindowPartnersShopProps {
    className?: string;
}

const WindowPartnersShop = ({ className }: WindowPartnersShopProps) => {
    return (
        <div className={className}>
            <Wrapper>
                <div>
                    <StyledText>
                        Szukasz nowoczesnych, trwałych i eleganckich okien aluminiowych? Mamy dla Ciebie idealne
                        rozwiązanie! Nasz sklep oferuje również szeroki wybór okien aluminiowych premium, które spełnią
                        wszystkie Twoje oczekiwania. Zapoznaj się z producentami z którymi współpracuje nasz salon.
                    </StyledText>
                </div>
                <ImagesWrapper>
                    <ImageWrapper>
                        <Image src={effector} alt="effector" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image src={eko} alt="eko" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image src={kns} alt="kns" />
                    </ImageWrapper>
                </ImagesWrapper>
                <ImagesWrapper>
                    <ImageWrapper>
                        <StyledHeader>Effector</StyledHeader>
                        <StyledButton variant="secondary" size="lg">
                            <a href="https://www.effector.pl/" target="blank">
                                Sprawdź
                            </a>
                        </StyledButton>
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledHeader>Eko okna</StyledHeader>
                        <StyledButton variant="secondary" size="lg">
                            <a href="https://ekookna.pl/" target="blank">
                                Sprawdź
                            </a>
                        </StyledButton>
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledHeader>KNS okna</StyledHeader>
                        <StyledButton variant="secondary" size="lg">
                            <a href="https://knsokna.pl/" target="blank">
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${SCREEN_WIDTH.m}) {
        margin-top: 3rem;
    }
`;

const Wrapper = styled.div`
    background: ${COLOR.grey};
    color: ${COLOR.ghostWhite};
    padding: 4rem;
    border-radius: 16px;
    margin: 0 1rem;
    @media (max-width: ${SCREEN_WIDTH.m}) {
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
    }
`;
export default Styled;
