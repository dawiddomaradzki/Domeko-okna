import { memo } from 'react';
import styled from 'styled-components';

import { Box } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import aboutUsPhoto from '@/resources/Images/aboutUsPhoto.jpg';

interface HomeInformationProps {
    className?: string;
}

const HomeInformation = ({ className }: HomeInformationProps) => {
    return (
        <div id="about" className={className}>
            <HeaderWithLine text="Domeko okna i drzwi" />
            <Container data-aos="fade-in" data-aos-anchor-placement="top-center">
                <TextSectionWrapper>
                    <StyledText>
                        Jesteśmy dynamiczną firmą, która oferuje kompleksowe usługi w dziedzinie doradztwa, transportu
                        oraz sprzedaży okien i drzwi. Nasza firma jest z dumna z bycia partnerem renomowanej marki Wood
                        Natural, co pozwala nam dostarczać najwyższej jakości produkty i usługi dla naszych klientów.
                        Jeśli potrzebujesz profesjonalnego wsparcia w wyborze okien i drzwi, skontaktuj się z nami.
                        Jesteśmy gotowi odpowiedzieć na Twoje pytania i zapewnić rozwiązania, które spełnią Twoje
                        oczekiwania. Wood Glass Team to pewność jakości i satysfakcji klienta.
                    </StyledText>
                </TextSectionWrapper>
                <Wrapper>
                    <StyledImg src={aboutUsPhoto} alt="logo" />
                </Wrapper>
            </Container>
        </div>
    );
};

const Memoized = memo(HomeInformation);
const Styled = styled(Memoized)`
    margin: auto;
    max-width: 1800px;
    padding-top: 5rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-top: 3rem;
        flex-direction: column;
        justify-content: center;
    }
`;

const Wrapper = styled.div`
    padding: 0 4rem 0 0;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding: 0;
        display: flex;
        justify-content: center;
    }
`;

const StyledImg = styled.img`
    width: 720px;

    @media (max-width: ${SCREEN_WIDTH.m}) {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const TextSectionWrapper = styled(Box)`
    flex-direction: column;
    padding: 0 6rem;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding: 0 3rem 2rem;
    }
`;

const StyledText = styled.p`
    font-weight: ${FONT_WEIGHT.medium};
    font-size: ${FONT_SIZE.m};
    line-height: ${LINE_HEIGHT.l};

    @media (max-width: ${SCREEN_WIDTH.lTop}) {
        font-size: ${FONT_SIZE.m};
        line-height: ${LINE_HEIGHT.m};
    }
`;
export default Styled;
