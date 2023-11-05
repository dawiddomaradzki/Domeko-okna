import { memo } from 'react';
import styled from 'styled-components';

import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { SCREEN_WIDTH } from '@/Global/globalStyles';

interface VirtualWalkProps {
    className?: string;
}

const VirtualWalk = ({ className }: VirtualWalkProps) => {
    return (
        <div className={className}>
            <HeaderWithLine text="Wirtualny spacer" />
            <iframe
                src="https://www.google.com/maps/embed?pb=!4v1620040265795!6m8!1m7!1sCAoSLEFGMVFpcE00bmpURnMtZldWMmExS3A3SU9PZzlZbmlaRUJPZzNPM2ExR3l4!2m2!1d50.85807401677135!2d19.96952223984931!3f317.84689402229503!4f-14.190888564753095!5f0.7820865974627469"
                width="100%"
                height="600"
                loading="lazy"
                title="walk"
            />
        </div>
    );
};

const Memoized = memo(VirtualWalk);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    padding-top: 6rem;
    @media (max-width: ${SCREEN_WIDTH.lBottom}) {
        padding-top: 3rem;
    }
    @media (max-width: ${SCREEN_WIDTH.xs}) {
        padding-top: 2rem;
    }
`;
export default Styled;
