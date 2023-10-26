import styled from 'styled-components';

import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '@/Global/globalStyles';

export const Box = styled.div`
    display: flex;
`;

enum TextColor {
    primary = 'PRIMARY',
    secondary = 'SECONDARY',
}

export const Text = styled.p<{ color: string }>`
    color: ${props => (props.color === TextColor.primary ? `${COLOR.ghostWhite}` : `${COLOR.black}`)};

    font-weight: ${FONT_WEIGHT.medium};
    font-size: ${FONT_SIZE.m};
    line-height: ${LINE_HEIGHT.m};
`;
