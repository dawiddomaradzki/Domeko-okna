import { memo } from 'react';
import styled from 'styled-components';

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
            {children}
            <Footer />
        </div>
    );
};

const Memoized = memo(NavAndFooter);
const Styled = styled(Memoized)``;
export default Styled;
