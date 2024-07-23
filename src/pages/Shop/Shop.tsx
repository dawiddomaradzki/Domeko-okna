import { memo } from 'react';
import styled from 'styled-components';

import LogosShop from '@/components/LogosShop/LogosShop';
import OfferShop from '@/components/OfferShop/OfferShop';
import VirtualWalk from '@/components/VirtualWalk/VirtualWalk';
import WelcomeShop from '@/components/WelcomeShop/WelcomeShop';

interface ShopProps {
    className?: string;
}

const Shop = ({ className }: ShopProps) => {
    return (
        <div className={className}>
            <WelcomeShop />
            <OfferShop />
            <VirtualWalk />
            <LogosShop />
        </div>
    );
};

const Memoized = memo(Shop);
const Styled = styled(Memoized)``;
export default Styled;
