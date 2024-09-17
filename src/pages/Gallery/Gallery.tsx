import { memo } from 'react';
import styled from 'styled-components';

import GalleryShop from '@/components/GalleryShop/GalleryShop';
import Realizations from '@/components/Realizations/Realizations';

interface GalleryProps {
    className?: string;
}

const Gallery = ({ className }: GalleryProps) => {
    return (
        <div className={className}>
            <Realizations />
            <GalleryShop />
        </div>
    );
};

const Memoized = memo(Gallery);
const Styled = styled(Memoized)``;
export default Styled;
