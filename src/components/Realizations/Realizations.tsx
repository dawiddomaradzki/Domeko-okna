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
import picture17 from '@/resources/Images/Realizations/17.jpg';
import picture18 from '@/resources/Images/Realizations/18.jpg';
import picture19 from '@/resources/Images/Realizations/19.jpg';
import picture20 from '@/resources/Images/Realizations/20.jpg';
import picture21 from '@/resources/Images/Realizations/21.jpg';
import picture22 from '@/resources/Images/Realizations/22.jpg';
import picture23 from '@/resources/Images/Realizations/23.jpg';
import picture24 from '@/resources/Images/Realizations/24.jpg';
import picture25 from '@/resources/Images/Realizations/25.jpg';
import picture26 from '@/resources/Images/Realizations/26.jpg';
import picture27 from '@/resources/Images/Realizations/27.jpg';
import picture28 from '@/resources/Images/Realizations/28.jpg';
import picture29 from '@/resources/Images/Realizations/29.jpg';
import picture30 from '@/resources/Images/Realizations/30.jpg';
import picture31 from '@/resources/Images/Realizations/31.jpg';
import picture32 from '@/resources/Images/Realizations/32.jpg';
import picture33 from '@/resources/Images/Realizations/33.jpg';
import picture34 from '@/resources/Images/Realizations/34.jpg';
import picture35 from '@/resources/Images/Realizations/35.jpg';
import picture36 from '@/resources/Images/Realizations/36.jpg';
import picture37 from '@/resources/Images/Realizations/37.jpg';
import picture38 from '@/resources/Images/Realizations/38.jpg';

interface RealizationsProps {
    className?: string;
}

const images = [
    {
        original: picture17,
        thumbnail: picture17,
    },
    {
        original: picture18,
        thumbnail: picture18,
    },
    {
        original: picture19,
        thumbnail: picture19,
    },
    {
        original: picture20,
        thumbnail: picture20,
    },
    {
        original: picture21,
        thumbnail: picture21,
    },
    {
        original: picture22,
        thumbnail: picture22,
    },
    {
        original: picture23,
        thumbnail: picture23,
    },
    {
        original: picture24,
        thumbnail: picture24,
    },
    {
        original: picture25,
        thumbnail: picture25,
    },
    {
        original: picture26,
        thumbnail: picture26,
    },
    {
        original: picture27,
        thumbnail: picture27,
    },
    {
        original: picture28,
        thumbnail: picture28,
    },
    {
        original: picture29,
        thumbnail: picture29,
    },
    {
        original: picture30,
        thumbnail: picture30,
    },
    {
        original: picture31,
        thumbnail: picture31,
    },
    {
        original: picture32,
        thumbnail: picture32,
    },
    {
        original: picture33,
        thumbnail: picture33,
    },
    {
        original: picture34,
        thumbnail: picture34,
    },
    {
        original: picture35,
        thumbnail: picture35,
    },
    {
        original: picture36,
        thumbnail: picture36,
    },
    {
        original: picture37,
        thumbnail: picture37,
    },
    {
        original: picture38,
        thumbnail: picture38,
    },
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
    padding-top: 10rem;

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-top: 8rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding-top: 7rem;
    }
`;

const ImageGalleryWrapper = styled.div`
    background-color: ${COLOR.grey};
    padding-top: 1rem;

    & button {
        color: ${COLOR.ghostWhite};
    }
    & button:hover {
        border-color: ${COLOR.deepCarrotOrange};
        transition: all 300ms ease-out;
        color: ${COLOR.deepCarrotOrange};
    }
`;
export default Styled;
