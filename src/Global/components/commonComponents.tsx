import styled from 'styled-components';

import { FONT_RESPONSIVE_SIZE, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SCREEN_WIDTH } from '@/Global/globalStyles';

export const Text = styled.p`
    font-weight: ${FONT_WEIGHT.medium};
    font-size: ${FONT_RESPONSIVE_SIZE.description};
    line-height: ${LINE_HEIGHT.l};
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        line-height: ${LINE_HEIGHT.m};
    }
`;

export const TextSpan = styled.span`
    font-weight: ${FONT_WEIGHT.medium};
    font-size: ${FONT_RESPONSIVE_SIZE.paragraph};
    line-height: ${LINE_HEIGHT.l};
`;

export const SmallSpan = styled.span`
    font-weight: ${FONT_WEIGHT.medium};
    font-size: ${FONT_SIZE.xs};
    line-height: ${LINE_HEIGHT.m};
`;

export const Header = styled.p`
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_RESPONSIVE_SIZE.mainHeader};
    line-height: ${LINE_HEIGHT.m};
`;
export const FooterText = styled.p`
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_RESPONSIVE_SIZE.footer};
    line-height: ${LINE_HEIGHT.m};
`;

export const MainHeader = styled.p`
    text-align: center;
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_RESPONSIVE_SIZE.mainHeader};
    line-height: ${LINE_HEIGHT.xl};

    @media (max-width: ${SCREEN_WIDTH.xs}) {
        line-height: ${LINE_HEIGHT.m};
    }
`;
