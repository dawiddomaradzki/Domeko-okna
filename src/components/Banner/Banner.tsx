import { memo } from 'react';
import styled from 'styled-components';

import { COLOR, FONT_RESPONSIVE_SIZE, FONT_WEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import tarasolaWordLogo from '@/resources/Images/Tarasola/tarasolaWordLogo.png';

interface BannerProps {
    className?: string;
}

const Banner = ({ className }: BannerProps) => {
    return (
        <div className={className}>
            <TarasolaWrapper>
                <SectionWrapper>
                    <StyledText>Partner premium</StyledText>
                    <ImageContainer>
                        <Image src={tarasolaWordLogo} alt="tarasola logo" />
                    </ImageContainer>
                </SectionWrapper>
                <SectionWrapper>
                    <StyledAnchor href="https://tarasola.pl/" target="blank">
                        Dowiedz się więcej
                    </StyledAnchor>
                </SectionWrapper>
            </TarasolaWrapper>
            <ContentContainer>
                <SectionWrapper>
                    <StyledText>Szybki kontakt:</StyledText>
                </SectionWrapper>
                <ContactInfo>
                    <StyledText>
                        Tel: <a href="tel:+48570385833">+48 570 385 833</a>
                    </StyledText>
                    <StyledText>
                        Email: <a href="mailto:Dawid@domeko.eu">Dawid@domeko.eu</a>
                    </StyledText>
                </ContactInfo>
            </ContentContainer>
        </div>
    );
};

const Memoized = memo(Banner);
const Styled = styled(Memoized)`
    width: 100vw;
    position: fixed;
    z-index: 100;
    top: 6rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: ${SCREEN_WIDTH.m}) {
        flex-direction: column;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        top: 4rem;
    }
`;

const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const TarasolaWrapper = styled.div`
    padding: 0.2rem 0;
    background-color: ${COLOR.deepCarrotOrange};
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.25rem;
    padding-bottom: 0.25rem;
    height: 0;
    @media (max-width: ${SCREEN_WIDTH.m}) {
        margin-right: 0;
    }
`;

const Image = styled.img`
    width: 120px;
    @media (max-width: ${SCREEN_WIDTH.m}) {
        width: 100px;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        width: 80px;
    }
`;

const StyledText = styled.span`
    font-weight: ${FONT_WEIGHT.medium};
    text-align: center;
    color: ${COLOR.ghostWhite};
    letter-spacing: 0.1rem;
    font-size: ${FONT_RESPONSIVE_SIZE.paragraph};

    @media (max-width: ${SCREEN_WIDTH.xs}) {
        letter-spacing: 0;
    }
`;

const StyledAnchor = styled.a`
    letter-spacing: 0.1rem;
    text-align: center;
    color: ${COLOR.ghostWhite};
    font-size: ${FONT_RESPONSIVE_SIZE.paragraph};
    font-weight: ${FONT_WEIGHT.medium};
    cursor: pointer;

    @media (max-width: ${SCREEN_WIDTH.xs}) {
        letter-spacing: 0;
    }

    &:hover {
        color: ${COLOR.black};
    }
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
    padding: 0.2rem 1rem;
    color: ${COLOR.ghostWhite};
    background-color: ${COLOR.midnightGreenRGB};

    @media (max-width: ${SCREEN_WIDTH.xs}) {
        flex-direction: column;
        gap: 0.2rem;
    }
`;

const ContactInfo = styled.div`
    display: flex;
    text-align: center;
    gap: 2rem;
`;

export default Styled;
