import { memo } from 'react';
import styled from 'styled-components';

import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';

interface HeaderWithLineProps {
    className?: string;
    text: string;
}

const HeaderWithLine = ({ className, text }: HeaderWithLineProps) => {
    return (
        <div className={className}>
            <Container>
                <StyledHeader>{text}</StyledHeader>
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

const StyledHeader = styled.p`
    text-align: center;
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.xl};
    line-height: ${LINE_HEIGHT.l};
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        font-size: ${FONT_SIZE.l};
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        font-size: ${FONT_SIZE.m};
        line-height: ${LINE_HEIGHT.m};
    }
`;
export default Styled;
