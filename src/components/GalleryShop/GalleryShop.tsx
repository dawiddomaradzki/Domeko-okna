import { memo, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';

import { Text } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, SCREEN_WIDTH } from '@/Global/globalStyles';
import assortmentPictures from '@/resources/Images/Assortment';
import visualisationPictures from '@/resources/Images/Visualisation';

interface GalleryShopProps {
    className?: string;
}

const GalleryShop = ({ className }: GalleryShopProps) => {
    const [tab, setTab] = useState<string>('assortment');

    return (
        <div className={className}>
            <HeaderWithLine text="Galeria" />
            <Wrapper>
                <Tabs fill activeKey={tab} onSelect={tabName => setTab(tabName ?? 'assortment')}>
                    <Tab eventKey="assortment" title={<Text>Asortyment</Text>}>
                        <ImageGalleryWrapper>
                            <ImageGallery items={assortmentPictures} showPlayButton={false} showIndex={true} />
                        </ImageGalleryWrapper>
                    </Tab>
                    <Tab eventKey="visualisations" title={<Text>Wizualizacje</Text>}>
                        <ImageGalleryWrapper>
                            <ImageGallery items={visualisationPictures} showPlayButton={false} showIndex={true} />
                        </ImageGalleryWrapper>
                    </Tab>
                    <Tab eventKey="doors" title={<Text>Drzwi</Text>}>
                        <ImageGalleryWrapper>
                            <ImageGallery items={assortmentPictures} showPlayButton={false} showIndex={true} />
                        </ImageGalleryWrapper>
                    </Tab>
                </Tabs>
            </Wrapper>
        </div>
    );
};

const Memoized = memo(GalleryShop);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    padding-top: 6rem;
    margin: 0 1rem;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-top: 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding-top: 2rem;
    }
`;

const ImageGalleryWrapper = styled.div`
    background-color: ${COLOR.midnightGreen};
    padding-top: 1rem;
`;

const Wrapper = styled.div`
    & button:hover {
        border-color: ${COLOR.deepCarrotOrange};
        transition: all 300ms ease-out;
        color: ${COLOR.deepCarrotOrange};
    }
    & button.nav-link.active {
        background-color: ${COLOR.midnightGreen};
        color: ${COLOR.ghostWhite};
    }
    & button.nav-link:hover {
        transition: all 300ms ease-out;
        border-color: ${COLOR.deepCarrotOrange};
    }
    & button {
        color: ${COLOR.black};
    }
`;
export default Styled;