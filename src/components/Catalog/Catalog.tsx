import { memo } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';
import techCatalog from '@/resources/Images/techCatalog.webp';
import windowCatalog from '@/resources/Images/windowCatalog.webp';
import DownloadCatalog from '@/resources/Pdf/katalog.pdf';
import TechDownloadCatalog from '@/resources/Pdf/katalogTechniczny.pdf';

interface CatalogProps {
    className?: string;
}

const Catalog = ({ className }: CatalogProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Pobierz" />
            <Wrapper>
                <ImageWrapper>
                    <Image src={windowCatalog} alt="windowCatalog" />
                    <Header>Katalog okien drewnianych</Header>
                    <StyledButton variant="secondary" size="lg">
                        <a href={DownloadCatalog} download="katalog">
                            Pobierz
                        </a>
                    </StyledButton>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={techCatalog} alt="techCatalog" />
                    <Header>Katalog techniczny okien drewnianych</Header>
                    <StyledButton variant="secondary" size="lg">
                        <a href={TechDownloadCatalog} download="katalog-techniczny">
                            Pobierz
                        </a>
                    </StyledButton>
                </ImageWrapper>
            </Wrapper>
        </div>
    );
};

const Memoized = memo(Catalog);
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

const Image = styled.img`
    width: 250px;
`;

const StyledButton = styled(Button)`
    width: 250px;
    margin-top: 2.5rem;

    @media (max-width: ${SCREEN_WIDTH.large}) {
        margin-top: 1.5rem;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    bottom: 3rem;

    @media (max-width: ${SCREEN_WIDTH.large}) {
        margin-top: 3rem;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    background: linear-gradient(
        to top,
        ${COLOR.grey} 0%,
        ${COLOR.grey} 90%,
        ${COLOR.ghostWhite} 90%,
        ${COLOR.ghostWhite} 100%
    );

    @media (max-width: ${SCREEN_WIDTH.large}) {
        flex-direction: column;
    }
`;

const Header = styled.p`
    text-align: center;
    color: ${COLOR.ghostWhite};
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.medium};

    @media (max-width: ${SCREEN_WIDTH.large}) {
        font-size: ${FONT_SIZE.snormal};
    }
`;
export default Styled;
