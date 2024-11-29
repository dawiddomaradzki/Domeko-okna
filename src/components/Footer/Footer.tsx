import { memo } from 'react';
import styled from 'styled-components';

import { FooterText } from '@/Global/components/commonComponents';
import { COLOR, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import call from '@/resources/Icons/call.svg';
import email from '@/resources/Icons/email.svg';
import facebook from '@/resources/Icons/facebook.svg';
import instagram from '@/resources/Icons/instagram.svg';
import location from '@/resources/Icons/location.svg';

interface FooterProps {
    className?: string;
}

const Footer = ({ className }: FooterProps) => {
    return (
        <div id="contact" className={className}>
            <Container>
                <ColumnWrapper>
                    <StyledHeader>KONTAKT</StyledHeader>
                    <ColumnWrapper2>
                        <img src={call} alt="call" />
                        <StyledText>
                            <a href="tel:+41 394 58 47">+41 394 58 47</a>
                        </StyledText>
                        <img src={email} alt="email" />
                        <StyledText>
                            <a href="mailto:info@domeko.eu" rel="nofollow noreferrer">
                                info@domeko.eu
                            </a>
                        </StyledText>
                        <img src={facebook} alt="facebook" />
                        <StyledText>
                            <a
                                href="https://www.facebook.com/Domeko-W%C5%82oszczowa-564951136912778/"
                                target="blank"
                                rel="nofollow noreferrer"
                            >
                                facebook
                            </a>
                        </StyledText>
                        <img src={instagram} alt="instagram" />
                        <StyledText>
                            <a
                                href="https://www.instagram.com/domekowloszczowa/"
                                target="blank"
                                rel="nofollow noreferrer"
                            >
                                instagram
                            </a>
                        </StyledText>
                    </ColumnWrapper2>
                </ColumnWrapper>
                <ColumnWrapper>
                    <StyledHeader>GODZINY PRACY</StyledHeader>
                    <ColumnWrapper2>
                        <img src={location} alt="logo" />
                        <StyledText>pn-pt: 08:00 - 17:00</StyledText>
                        <div />
                        <StyledText>sb: 08:00 - 14:00</StyledText>
                        <div />
                        <StyledText>nd: nieczynne</StyledText>
                    </ColumnWrapper2>
                </ColumnWrapper>
                <ColumnWrapper>
                    <StyledHeader>LOKALIZACJA</StyledHeader>
                    <ColumnWrapper2>
                        <img src={location} alt="location" />
                        <StyledText>
                            <a href="https://goo.gl/maps/fjd2s9bmYHuYsVnN9" target="blank" rel="nofollow noreferrer">
                                ul. Przedborska 45
                            </a>
                        </StyledText>
                        <div />
                        <StyledText>
                            <a href="https://goo.gl/maps/fjd2s9bmYHuYsVnN9" target="blank" rel="nofollow noreferrer">
                                29-100 Włoszczowa
                            </a>
                        </StyledText>
                    </ColumnWrapper2>
                </ColumnWrapper>
            </Container>
        </div>
    );
};

const Memoized = memo(Footer);
const Styled = styled(Memoized)`
    background-color: ${COLOR.midnightGreen};
    color: ${COLOR.ghostWhite};
    padding: 4rem 1.5rem;
    margin-top: 5rem;

    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding: 2rem 1.5rem 2rem;
    }
`;
const Container = styled.div`
    max-width: 1800px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ColumnWrapper = styled.div`
    @media (max-width: ${SCREEN_WIDTH.m}) {
        margin-bottom: 4rem;
    }
`;

const ColumnWrapper2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-row-gap: 2rem;
`;

const StyledText = styled(FooterText)`
    padding-left: 1rem;

    @media (max-width: ${SCREEN_WIDTH.m}) {
    }
`;

const StyledHeader = styled(FooterText)`
    padding-bottom: 3rem;
    line-height: ${LINE_HEIGHT.m};
`;
export default Styled;
