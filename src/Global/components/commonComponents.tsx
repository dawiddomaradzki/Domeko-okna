import styled from 'styled-components';

import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';

export const Text = styled.p`
    font-weight: ${FONT_WEIGHT.medium};
    font-size: ${FONT_SIZE.m};
    line-height: ${LINE_HEIGHT.l};
`;

export const TextSpan = styled.span`
    font-weight: ${FONT_WEIGHT.medium};
    font-size: ${FONT_SIZE.m};
    line-height: ${LINE_HEIGHT.l};
`;

export const SmallSpan = styled.span`
    font-weight: ${FONT_WEIGHT.medium};
    font-size: ${FONT_SIZE.xs};
    line-height: ${LINE_HEIGHT.m};
`;

export const Header = styled.p`
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.l};
    line-height: ${LINE_HEIGHT.m};
`;

export const MainHeader = styled.p`
    text-align: center;
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.xl};
    line-height: ${LINE_HEIGHT.xl};

    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        font-size: ${FONT_SIZE.l};
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        font-size: ${FONT_SIZE.m};
        line-height: ${LINE_HEIGHT.m};
    }
`;
