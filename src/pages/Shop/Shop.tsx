import { memo } from 'react';
import styled from 'styled-components';

interface ShopProps {
    className?: string;
}

const Shop = ({ className }: ShopProps) => {
    return (
        <div className={className}>
            <h1>Shooooop</h1>
            <p>dupaaaaa</p>
        </div>
    );
};

const Memoized = memo(Shop);
const Styled = styled(Memoized)``;
export default Styled;
