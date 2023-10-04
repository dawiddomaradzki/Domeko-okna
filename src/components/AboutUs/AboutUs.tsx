import { memo } from 'react';
import styled from 'styled-components';

import { Box } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '@/Global/globalStyles';
import AGMPartnerLogoSVG from '@/resources/Icons/AGMPartner.svg';
import DomekoLogoNoBackgroundSVG from '@/resources/Icons/domekoLogoNoBackgroundBlack.svg';

interface AboutUsProps {
    className?: string;
}

const AboutUs = ({ className }: AboutUsProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Dlaczego my?" />
            <IconsContainer>
                <StyledImg src={DomekoLogoNoBackgroundSVG} alt="domeko" />
                <StyledImg src={AGMPartnerLogoSVG} alt="AgmPartner" />
            </IconsContainer>
            <DescriptionContainer>
                <StyledText>
                    Jesteśmy partnerem oznaczonym logo AGM - Autoryzowane Grupy Montażowe. Jest to gwarancja doskonałej
                    usługi montażu okien i drzwi Wood Natural System. Certyfikowane szkolenia dla naszych Partnerów
                    pozwalają uzyskać najwyższe kwalifikacje, wyjątkowe warunki oraz dają możliwość zapoznania się z
                    najnowszymi technologiami.
                </StyledText>
            </DescriptionContainer>
        </div>
    );
};

const Memoized = memo(AboutUs);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    padding-top: 8rem;
`;

const IconsContainer = styled(Box)`
    justify-content: space-around;
    padding: 1rem 0 4rem 0;
`;

const DescriptionContainer = styled(Box)`
    background-color: ${COLOR.midnightGreen};
    padding: 4rem 6rem;
`;

const StyledText = styled.p`
    color: ${COLOR.white};
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.xlarge};
    font-weight: ${FONT_WEIGHT.normal};
`;

const StyledImg = styled.img`
    width: 25rem;
`;
export default Styled;
