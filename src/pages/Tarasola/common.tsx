import styled, { css } from 'styled-components';

export const ImageContainer = styled.div<{ $alignRight?: boolean }>`
    ${props =>
        props?.$alignRight &&
        css`
            display: flex;
            justify-content: flex-end;
        `}
`;
