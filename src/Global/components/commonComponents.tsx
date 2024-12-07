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

export const TarasolaText = styled.p`
    font-weight: ${FONT_WEIGHT.medium};
    font-size: ${FONT_RESPONSIVE_SIZE.description};
    line-height: ${LINE_HEIGHT.l};
    text-align: center;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        line-height: ${LINE_HEIGHT.m};
    }
    @media (max-width: ${SCREEN_WIDTH.m}) {
        line-height: ${LINE_HEIGHT.s};
    }
`;

export const TarasolaImage = styled.img`
    max-height: 400px;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        max-height: 350px;
    }
    @media (max-width: ${SCREEN_WIDTH.m}) {
        max-height: 300px;
    }
    @media (max-width: ${SCREEN_WIDTH.s}) {
        max-height: 200px;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        max-height: 120px;
    }
`;

export const TextSpan = styled.span`
    font-weight: ${FONT_WEIGHT.normal};
    font-size: ${FONT_RESPONSIVE_SIZE.paragraph};
    line-height: ${LINE_HEIGHT.l};
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        line-height: ${LINE_HEIGHT.m};
    }
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
