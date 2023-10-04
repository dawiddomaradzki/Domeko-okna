import { memo } from 'react';
import styled from 'styled-components';

import { Box } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '@/Global/globalStyles';
import aboutUsPhoto from '@/resources/Images/aboutUsPhoto.jpg';

interface HomeInformationProps {
    className?: string;
}

const HomeInformation = ({ className }: HomeInformationProps) => {
    return (
        <div id="about" className={className}>
            <TextSectionWrapper>
                <HeaderWithLine text="Domeko okna i drzwi" />
                <StyledText>
                    Jesteśmy dynamiczną firmą, która oferuje kompleksowe usługi w dziedzinie doradztwa, transportu oraz
                    sprzedaży okien i drzwi. Nasza firma jest z dumą partnerem renomowanej marki Wood Natural, co
                    pozwala nam dostarczać najwyższej jakości produkty i usługi dla naszych klientów. Jeśli potrzebujesz
                    profesjonalnego wsparcia w wyborze okien i drzwi, skontaktuj się z nami. Jesteśmy gotowi
                    odpowiedzieć na Twoje pytania i zapewnić rozwiązania, które spełnią Twoje oczekiwania. Wood Glass
                    Team to pewność jakości i satysfakcji klienta.
                </StyledText>
            </TextSectionWrapper>
            <Wrapper>
                <StyledImg src={aboutUsPhoto} alt="logo" />
            </Wrapper>
        </div>
    );
};

const Memoized = memo(HomeInformation);
const Styled = styled(Memoized)`
    margin: auto;
    display: flex;
    justify-content: space-around;
    max-width: 1800px;
    padding-top: 8rem;
`;

const Wrapper = styled.div`
    padding: 0 4rem 0 0;
`;

const StyledImg = styled.img`
    width: 720px;
`;

const TextSectionWrapper = styled(Box)`
    flex-direction: column;
    padding: 0 6rem;
`;

const StyledText = styled.p`
    font-weight: ${FONT_WEIGHT.normal};
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.xlarge};
`;
export default Styled;
