import { memo } from 'react';
import styled from 'styled-components';

import { Text } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
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
                <div data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <DomekoLogoNoBackgroundSVG />
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <AGMPartnerLogoSVG />
                </div>
            </IconsContainer>
            <DescriptionContainer>
                <StyledText>
                    Jesteśmy partnerem oznaczonym logo AGM - Autoryzowane Grupy Montażowe. Jest to gwarancja doskonałej
                    usługi montażu okien i drzwi Wood Natural System. Certyfikowane szkolenia pozwalają nam uzyskać
                    najwyższe kwalifikacje, aby sprostać oczekiwaniom naszych klientów.
                </StyledText>
            </DescriptionContainer>
        </div>
    );
};

const Memoized = memo(AboutUs);
const Styled = styled(Memoized)`
    max-width: 1600px;
    margin: auto;
    padding-top: 5rem;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-top: 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding-top: 2rem;
    }
`;

const IconsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    padding: 1rem 0 4rem 0;
    svg {
        width: 20rem;
        height: auto;
    }

    @media (max-width: ${SCREEN_WIDTH.lTop}) {
        svg {
            width: 16rem;
        }
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        grid-template-columns: 1fr;
        svg {
            width: 16rem;
        }

        & svg:last-of-type {
            margin-top: 2rem;
        }
    }
`;

const DescriptionContainer = styled.div`
    display: flex;
    background-color: ${COLOR.midnightGreen};
    padding: 4rem 6rem;

    @media (max-width: ${SCREEN_WIDTH.s}) {
        padding: 2rem 3rem;
    }
`;

const StyledText = styled(Text)`
    color: ${COLOR.white};
    @media (max-width: ${SCREEN_WIDTH.s}) {
        line-height: ${LINE_HEIGHT.m};
    }
`;

export default Styled;
