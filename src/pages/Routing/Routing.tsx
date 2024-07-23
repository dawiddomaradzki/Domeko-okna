import AOS from 'aos';
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import DoorAndWindow from '../DoorAndWindow/DoorAndWindow';
import Gallery from '../Gallery/Gallery';
import Shop from '../Shop/Shop';
import NavAndFooter from './NavAndFooter/NavAndFooter';

interface RoutingProps {
    className?: string;
}

const Routing = ({ className }: RoutingProps) => {
    AOS.init({ once: true });
    return (
        <div className={className}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <NavAndFooter>
                            <DoorAndWindow />
                        </NavAndFooter>
                    }
                />
                <Route
                    path="shop"
                    element={
                        <NavAndFooter>
                            <Shop />
                        </NavAndFooter>
                    }
                />
                <Route
                    path="gallery"
                    element={
                        <NavAndFooter>
                            <Gallery />
                        </NavAndFooter>
                    }
                />
            </Routes>
        </div>
    );
};

const Memoized = memo(Routing);
const Styled = styled(Memoized)``;
export default Styled;
