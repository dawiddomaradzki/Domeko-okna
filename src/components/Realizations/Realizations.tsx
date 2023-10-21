import 'react-image-gallery/styles/css/image-gallery.css';

import { memo } from 'react';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';

import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, SCREEN_WIDTH } from '@/Global/globalStyles';
import picture1 from '@/resources/Images/Realizations/1.png';
import picture2 from '@/resources/Images/Realizations/2.png';
import picture3 from '@/resources/Images/Realizations/3.png';
import picture4 from '@/resources/Images/Realizations/4.png';
import picture5 from '@/resources/Images/Realizations/5.png';
import picture6 from '@/resources/Images/Realizations/6.png';
import picture8 from '@/resources/Images/Realizations/8.png';
import picture9 from '@/resources/Images/Realizations/9.png';
import picture10 from '@/resources/Images/Realizations/10.png';
import picture11 from '@/resources/Images/Realizations/11.png';
import picture12 from '@/resources/Images/Realizations/12.png';
import picture13 from '@/resources/Images/Realizations/13.png';
import picture14 from '@/resources/Images/Realizations/14.png';
import picture15 from '@/resources/Images/Realizations/15.png';
import picture16 from '@/resources/Images/Realizations/16.png';

interface RealizationsProps {
    className?: string;
}

const images = [
    {
        original: picture5,
        thumbnail: picture5,
    },
    {
        original: picture2,
        thumbnail: picture2,
    },
    {
        original: picture3,
        thumbnail: picture3,
    },
    {
        original: picture1,
        thumbnail: picture1,
    },
    {
        original: picture4,
        thumbnail: picture4,
    },
    {
        original: picture6,
        thumbnail: picture6,
    },

    {
        original: picture8,
        thumbnail: picture8,
    },
    {
        original: picture9,
        thumbnail: picture9,
    },
    {
        original: picture10,
        thumbnail: picture10,
    },
    {
        original: picture11,
        thumbnail: picture11,
    },
    {
        original: picture12,
        thumbnail: picture12,
    },
    {
        original: picture13,
        thumbnail: picture13,
    },
    {
        original: picture14,
        thumbnail: picture14,
    },
    {
        original: picture15,
        thumbnail: picture15,
    },
    {
        original: picture16,
        thumbnail: picture16,
    },
];

const Realizations = ({ className }: RealizationsProps) => {
    return (
        <div id="realization" className={className}>
            <HeaderWithLine text="Nasze realizacje" />
            <ImageGalleryWrapper>
                <ImageGallery items={images} showPlayButton={false} showIndex={true} />
            </ImageGalleryWrapper>
        </div>
    );
};

const Memoized = memo(Realizations);
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

const ImageGalleryWrapper = styled.div`
    background-color: ${COLOR.grey};
`;
export default Styled;
