import { memo } from 'react';
import styled from 'styled-components';

import { Text } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
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
                        oraz sprzedaży okien i drzwi. Nasza firma jest dumna z bycia partnerem renomowanej marki Wood
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
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-top: 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding-top: 2rem;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-top: 3rem;
        flex-direction: column;
        justify-content: center;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding-top: 2rem;
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
    max-width: 50vw;
    width: clamp(18.75rem, 50vw, 46.875rem);

    @media (max-width: ${SCREEN_WIDTH.m}) {
        height: 100%;
        max-width: 100%;
        object-fit: cover;
    }
`;

const TextSectionWrapper = styled.div`
    flex-direction: column;
    display: flex;
    padding: 0 4rem 0 6rem;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding: 0 3rem 2rem;
    }
`;

const StyledText = styled(Text)`
    @media (max-width: ${SCREEN_WIDTH.m}) {
        line-height: ${LINE_HEIGHT.m};
    }
`;
export default Styled;
