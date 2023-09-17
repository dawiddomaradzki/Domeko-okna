import { memo } from 'react';
import styled from 'styled-components';

import DomekoLogoSVG from '@/resources/Icons/domeko-logo.svg';

interface NavigationProps {
    className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
    return (
        <div className={className}>
            <img src={DomekoLogoSVG} className="App-logo" alt="logo" />
        </div>
    );
};

const Memoized = memo(Navigation);
const Styled = styled(Memoized)``;
export default Styled;
