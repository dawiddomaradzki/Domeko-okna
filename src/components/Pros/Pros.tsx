import { memo } from 'react';
import styled from 'styled-components';

import { Header, Text } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, SCREEN_WIDTH } from '@/Global/globalStyles';
import { ReactComponent as HammerSvg } from '@/resources/Icons/hammer.svg';
import { ReactComponent as LeafSvg } from '@/resources/Icons/leaf.svg';
import { ReactComponent as PanoramaSvg } from '@/resources/Icons/panorama.svg';
import { ReactComponent as PlugSvg } from '@/resources/Icons/plug.svg';
import brownView from '@/resources/Images/brownView.jpg';
import chairsView from '@/resources/Images/chairsView.png';
import greenView from '@/resources/Images/greenView.png';
import womenBlanket from '@/resources/Images/womenBlanket.png';
import workers from '@/resources/Images/workers.png';

interface ProsProps {
    className?: string;
}

const Pros = ({ className }: ProsProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Właściwości i zalety naszych okien" />
            <Container>
                <div data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <StyledImg src={workers} alt="workers" />
                </div>
                <InfoSection data-aos="fade-in" data-aos-anchor-placement="center-bottom">
                    <PlugSvg />
                    <StyledHeader>ENERGOOSZCZĘDNOŚĆ</StyledHeader>
                    <StyledText>
                        Okna drewniane WOOD GLASS TEAM są wyjątkowo szczelne i ciepłe. Dzięki znakomitym parametrom
                        zapewnią komfortową temperaturę w domu oraz zmniejszą zużycie energii. Pozwala to na
                        oszczędności związane z ogrzewaniem domu.
                    </StyledText>
                </InfoSection>
                <div data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <StyledImg src={womenBlanket} alt="womenBlanket" />
                </div>
                <InfoSection data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <HammerSvg />
                    <StyledHeader>TRWAŁOŚĆ</StyledHeader>
                    <StyledText>
                        Nasze okna są stworzone z wyselekcjonowanego drewna, przez co są bardzo trwałe, wykazują dużą
                        odporność na czynniki atmosferyczne. Nawet po wielu latach będą Cię zachwycać swoją estetyką i
                        komfortem użytkowania.
                    </StyledText>
                </InfoSection>
                <div data-aos="fade-in" data-aos-anchor-placement="center-bottom">
                    <StyledImg src={greenView} alt="greenView" />
                </div>
                <InfoSection data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <LeafSvg />
                    <StyledHeader>EKOLOGIA</StyledHeader>
                    <StyledText>
                        Drewno jest zasobem odnawialnym. Wybierając okna drewniane dbasz o ekologię.
                    </StyledText>
                </InfoSection>
                <div data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <StyledImg src={chairsView} alt="chairsView" />
                </div>
                <InfoSection data-aos="fade-in" data-aos-anchor-placement="center-bottom">
                    <PanoramaSvg />
                    <StyledHeader>PIĘKNO</StyledHeader>
                    <StyledText>
                        Drewniane okna WOOD GLASS TEAM zachwycą Cię swym ponadczasowym pięknem. Ramy okien z niezwykle
                        szlachetnego materiału jakim jest drewno, nadadzą Twoim wnętrzom wdzięku i niepowtarzalnej
                        atmosfery.
                    </StyledText>
                </InfoSection>
                <div data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <StyledImg src={brownView} alt="brownView" />
                </div>
            </Container>
        </div>
    );
};

const Memoized = memo(Pros);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: 0 2rem;
    padding-top: 5rem;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-top: 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding-top: 2rem;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 0.5rem;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
`;
const InfoSection = styled.div`
    background-color: ${COLOR.midnightGreen};
    padding: 4rem 2.5rem 1rem 2.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    & svg {
        height: 10rem;
        fill: ${COLOR.deepCarrotOrange};
        margin-bottom: 6rem;
    }
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding: 4rem 2rem;
        & svg {
            height: 8rem;
            margin-bottom: 2rem;
        }
    }
    @media (max-width: ${SCREEN_WIDTH.s}) {
        & svg {
            height: 6rem;
        }
    }
`;

const StyledImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        height: 500px;
    }
`;

const StyledHeader = styled(Header)`
    color: ${COLOR.white};
    text-align: center;
    margin-bottom: 3rem;
`;

const StyledText = styled(Text)`
    text-align: center;
    color: ${COLOR.white};
`;
export default Styled;
