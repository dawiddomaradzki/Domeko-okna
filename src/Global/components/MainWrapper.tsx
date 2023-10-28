import styled from 'styled-components';

import { SCREEN_WIDTH } from '@/Global/globalStyles';

export const MainWrapper = styled.div`
    max-width: 1800px;
    margin: auto;
    padding-top: 8rem;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-top: 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding-top: 2rem;
    }
`;
