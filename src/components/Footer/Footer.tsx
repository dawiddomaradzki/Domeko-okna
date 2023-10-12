import { memo } from 'react';
import styled from 'styled-components';

import { COLOR, FONT_SIZE, LINE_HEIGHT } from '@/Global/globalStyles';
import call from '@/resources/Icons/call.svg';
import email from '@/resources/Icons/email.svg';
import facebook from '@/resources/Icons/facebook.svg';
import location from '@/resources/Icons/location.svg';

interface FooterProps {
    className?: string;
}

const Footer = ({ className }: FooterProps) => {
    return (
        <div id="contact" className={className}>
            <Container>
                <div>
                    <Header>KONTAKT</Header>
                    <ColumnWrapper2>
                        <img src={call} alt="call" />
                        <Text>
                            <a href="tel:+41 394 58 47">+41 394 58 47</a>
                        </Text>
                        <img src={email} alt="email" />
                        <Text>
                            <a href="mailto:info@domeko.eu" rel="nofollow noreferrer">
                                info@domeko.eu
                            </a>
                        </Text>
                        <img src={facebook} alt="facebook" />
                        <Text>
                            <a
                                href="https://www.facebook.com/Domeko-W%C5%82oszczowa-564951136912778/"
                                target="blank"
                                rel="nofollow noreferrer"
                            >
                                facebook
                            </a>
                        </Text>
                    </ColumnWrapper2>
                </div>
                <div>
                    <Header>GODZINY PRACY</Header>
                    <ColumnWrapper2>
                        <img src={location} alt="logo" />
                        <Text>pn-pt: 08:00 - 17:00</Text>
                        <div />
                        <Text>sb: 08:00 - 14:00</Text>
                        <div />
                        <Text>nd: nieczynne</Text>
                    </ColumnWrapper2>
                </div>
                <div>
                    <Header>LOKALIZACJA</Header>
                    <ColumnWrapper2>
                        <img src={location} alt="location" />
                        <Text>
                            <a href="https://goo.gl/maps/fjd2s9bmYHuYsVnN9" target="blank" rel="nofollow noreferrer">
                                ul. Przedborska 45
                            </a>
                        </Text>
                        <div />
                        <Text>
                            <a href="https://goo.gl/maps/fjd2s9bmYHuYsVnN9" target="blank" rel="nofollow noreferrer">
                                29-100 Włoszczowa
                            </a>
                        </Text>
                    </ColumnWrapper2>
                </div>
            </Container>
        </div>
    );
};

const Memoized = memo(Footer);
const Styled = styled(Memoized)`
    background-color: ${COLOR.midnightGreen};
    color: ${COLOR.ghostWhite};
    padding: 4rem 0;
    margin-top: 8rem;
`;
const Container = styled.div`
    max-width: 1800px;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

const ColumnWrapper2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-row-gap: 2rem;
`;

const Text = styled.p`
    font-size: ${FONT_SIZE.medium};
    line-height: ${LINE_HEIGHT.medium};
`;

const Header = styled.p`
    font-size: ${FONT_SIZE.medium};
    line-height: ${LINE_HEIGHT.medium};
    padding-bottom: 3rem;
`;
export default Styled;
