import { memo } from 'react';
import styled from 'styled-components';

import { Text } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
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

const IconsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem 0 4rem 0;
    svg {
        width: 25rem;
        height: auto;
    }

    @media (max-width: ${SCREEN_WIDTH.lTop}) {
        svg {
            width: 16rem;
        }
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
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
        font-size: ${FONT_SIZE.m};
        line-height: ${LINE_HEIGHT.m};
    }
`;

export default Styled;
