import { memo } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '@/Global/globalStyles';
import techCatalog from '@/resources/Images/techCatalog.webp';
import windowCatalog from '@/resources/Images/windowCatalog.webp';
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
                        <a href={TechDownloadCatalog} download="katalog-techniczny">
                            Pobierz
                        </a>
                    </StyledButton>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={techCatalog} alt="techCatalog" />
                    <Header>Katalog techniczny okien drewnianych</Header>
                    <StyledButton variant="secondary" size="lg">
                        Pobierz
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
`;

const Image = styled.img`
    width: 250px;
`;

const StyledButton = styled(Button)`
    width: 250px;
    margin-top: 2.5rem;
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    bottom: 3rem;
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
`;

const Header = styled.p`
    color: ${COLOR.ghostWhite};
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.normal};
    line-height: ${LINE_HEIGHT.medium};
`;
export default Styled;
