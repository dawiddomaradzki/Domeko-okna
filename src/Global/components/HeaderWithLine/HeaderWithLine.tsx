import { memo } from 'react';
import styled from 'styled-components';

import { COLOR, SCREEN_WIDTH } from '@/Global/globalStyles';

import { MainHeader } from '../commonComponents';

interface HeaderWithLineProps {
    className?: string;
    text: string;
}

const HeaderWithLine = ({ className, text }: HeaderWithLineProps) => {
    return (
        <div className={className}>
            <Container>
                <MainHeader>{text}</MainHeader>
                <Line />
            </Container>
        </div>
    );
};

const Memoized = memo(HeaderWithLine);
const Styled = styled(Memoized)`
    display: flex;
    justify-content: center;
    padding-bottom: 4rem;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-bottom: 2rem;
    }
`;

const Container = styled.div`
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
`;

const Line = styled.div`
    margin-top: 1rem;
    border-bottom: 4px solid ${COLOR.deepCarrotOrange};
    width: 90%;
`;

export default Styled;
