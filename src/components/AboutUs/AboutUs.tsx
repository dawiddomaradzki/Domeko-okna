import { memo } from 'react';
import styled from 'styled-components';

import { Box } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import { ReactComponent as AGMPartnerLogoSVG } from '@/resources/Icons/AGMPartner.svg';
import { ReactComponent as DomekoLogoNoBackgroundSVG } from '@/resources/Icons/domekoLogoNoBackgroundBlack.svg';

interface AboutUsProps {
    className?: string;
}

const AboutUs = ({ className }: AboutUsProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Dlaczego my?" />
            <IconsContainer>
                <DomekoLogoNoBackgroundSVG />
                <AGMPartnerLogoSVG />
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
    @media (max-width: ${SCREEN_WIDTH.xlargeMax}) {
        padding-top: 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.small}) {
        padding-top: 2rem;
    }
`;

const IconsContainer = styled(Box)`
    justify-content: space-around;
    padding: 1rem 0 4rem 0;
    svg {
        width: 25rem;
        height: auto;
    }

    @media (max-width: ${SCREEN_WIDTH.xlargeMin}) {
        svg {
            width: 16rem;
        }
    }
    @media (max-width: ${SCREEN_WIDTH.small}) {
        flex-direction: column;
        align-items: center;
        svg {
            width: 16rem;
        }

        & svg:last-of-type {
            margin-top: 2rem;
        }
    }
`;

const DescriptionContainer = styled(Box)`
    background-color: ${COLOR.midnightGreen};
    padding: 4rem 6rem;

    @media (max-width: ${SCREEN_WIDTH.medium}) {
        padding: 2rem 3rem;
    }
`;

const StyledText = styled.p`
    font-weight: ${FONT_WEIGHT.normal};
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.xlarge};
    color: ${COLOR.white};
    @media (max-width: ${SCREEN_WIDTH.medium}) {
        font-size: ${FONT_SIZE.normal};
        line-height: ${LINE_HEIGHT.medium};
    }
`;

export default Styled;
