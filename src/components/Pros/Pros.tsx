import { memo } from 'react';
import styled from 'styled-components';

import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
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
                <PictureSection data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <StyledImg src={workers} alt="workers" />
                </PictureSection>
                <InfoSection data-aos="fade-in" data-aos-anchor-placement="center-bottom">
                    <PlugSvg />
                    <Header>ENERGOOSZCZĘDNOŚĆ</Header>
                    <Text>
                        Okna drewniane WOOD GLASS TEAM są wyjątkowo szczelne i ciepłe. Dzięki znakomitym parametrom
                        zapewnią komfortową temperaturę w domu oraz zmniejszą zużycie energii. Pozwala to na
                        oszczędności związane z ogrzewaniem domu.
                    </Text>
                </InfoSection>
                <PictureSection data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <StyledImg src={womenBlanket} alt="womenBlanket" />
                </PictureSection>
                <InfoSection data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <HammerSvg />
                    <Header>TRWAŁOŚĆ</Header>
                    <Text>
                        Nasze okna są stworzone z wyselekcjonowanego drewna, przez co są bardzo trwałe, wykazują dużą
                        odporność na czynniki atmosferyczne. Nawet po wielu latach będą Cię zachwycać swoją estetyką i
                        komfortem użytkowania.
                    </Text>
                </InfoSection>
                <PictureSection data-aos="fade-in" data-aos-anchor-placement="center-bottom">
                    <StyledImg src={greenView} alt="greenView" />
                </PictureSection>
                <InfoSection data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <LeafSvg />
                    <Header>EKOLOGIA</Header>
                    <Text>Drewno jest zasobem odnawialnym. Wybierając okna drewniane dbasz o ekologię.</Text>
                </InfoSection>
                <PictureSection data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <StyledImg src={chairsView} alt="chairsView" />
                </PictureSection>
                <InfoSection data-aos="fade-in" data-aos-anchor-placement="center-bottom">
                    <PanoramaSvg />
                    <Header>PIĘKNO</Header>
                    <Text>
                        Drewniane okna WOOD GLASS TEAM zachwycą Cię swym ponadczasowym pięknem. Ramy okien z niezwykle
                        szlachetnego materiału jakim jest drewno, nadadzą Twoim wnętrzom wdzięku i niepowtarzalnej
                        atmosfery.
                    </Text>
                </InfoSection>
                <PictureSection data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <StyledImg src={brownView} alt="brownView" />
                </PictureSection>
            </Container>
        </div>
    );
};

const Memoized = memo(Pros);
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

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    @media (max-width: ${SCREEN_WIDTH.xlargeMax}) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
`;
const InfoSection = styled.div`
    background-color: ${COLOR.midnightGreen};
    padding: 4rem 2.5rem;
    display: flex;
    flex-direction: column;
    & svg {
        height: 10rem;
        fill: ${COLOR.deepCarrotOrange};
        margin-bottom: 6rem;
    }
    @media (max-width: ${SCREEN_WIDTH.small}) {
        padding: 4rem 1rem;
    }

    @media (max-width: ${SCREEN_WIDTH.small}) {
        & svg {
            margin-bottom: 4rem;
        }
    }
`;

const PictureSection = styled.div`
    background-color: ${COLOR.deepCarrotOrange};
`;

const StyledImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media (max-width: ${SCREEN_WIDTH.xlargeMax}) {
        height: 600px;
    }
`;

const Header = styled.p`
    color: ${COLOR.white};
    font-size: ${FONT_SIZE.medium};
    font-weight: ${FONT_WEIGHT.medium};
    text-align: center;
    margin-bottom: 3rem;
`;
const Text = styled.p`
    text-align: center;
    color: ${COLOR.white};
    font-size: ${FONT_SIZE.medium};
    @media (max-width: ${SCREEN_WIDTH.medium}) {
        font-size: ${FONT_SIZE.normal};
        line-height: ${LINE_HEIGHT.medium};
    }
`;
export default Styled;
