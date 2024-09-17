import { memo } from 'react';
import styled from 'styled-components';

import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';

interface NavAndFooterProps {
    className?: string;
    children: JSX.Element;
}

const NavAndFooter = ({ className, children }: NavAndFooterProps) => {
    return (
        <div className={className}>
            <Navigation />
            <Banner />
            {children}
            <Footer />
        </div>
    );
};

const Memoized = memo(NavAndFooter);
const Styled = styled(Memoized)``;
export default Styled;
