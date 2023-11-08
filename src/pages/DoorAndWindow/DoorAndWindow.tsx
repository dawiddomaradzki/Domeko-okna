import { memo } from 'react';
import styled from 'styled-components';

import AboutUs from '@/components/AboutUs/AboutUs';
import AlSlidingWindow from '@/components/AlSlidingWindow/AlSlidingWindow';
import Catalog from '@/components/Catalog/Catalog';
import HomeInformation from '@/components/HomeInformation/HomeInformation';
import IconsSection from '@/components/IconsSection/IconsSection';
import MapFrame from '@/components/MapFrame/MapFrame';
import Pros from '@/components/Pros/Pros';
import Realizations from '@/components/Realizations/Realizations';
import SlidingWindow from '@/components/SlidingWindow/SlidingWindow';
import SlidingWindowInfo from '@/components/SlidingWindow/SlidingWindowInfo';
import Welcome from '@/components/Welcome/Welcome';
import WindowPartnersShop from '@/components/WindowPartnersShop/WindowPartnersShop';
import WoodWindow from '@/components/WoodWindow/WoodWindow';
import WoodWindowInfo from '@/components/WoodWindow/WoodWindowInfo';

interface DoorAndWindowProps {
    className?: string;
}

const DoorAndWindow = ({ className }: DoorAndWindowProps) => {
    return (
        <div className={className}>
            <Welcome />
            <HomeInformation />
            <AboutUs />
            <IconsSection />
            <Pros />
            <WoodWindow />
            <WoodWindowInfo />
            <SlidingWindow />
            <SlidingWindowInfo />
            <AlSlidingWindow />
            <Catalog />
            <WindowPartnersShop />
            <Realizations />
            <MapFrame />
        </div>
    );
};

const Memoized = memo(DoorAndWindow);
const Styled = styled(Memoized)``;
export default Styled;
