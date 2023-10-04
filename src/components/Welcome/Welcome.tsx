import { memo } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

import carousel1 from '@/resources/Images/carousel1.jpeg';
import carousel2 from '@/resources/Images/carousel2.jpg';
import carousel3 from '@/resources/Images/carousel3.jpg';

interface WelcomeProps {
    className?: string;
}

const Welcome = ({ className }: WelcomeProps) => {
    return (
        <div className={className}>
            <Carousel fade data-bs-theme="dark" controls={false}>
                <Carousel.Item interval={40000}>
                    <StyledImg src={carousel1} alt="carousel1" />
                </Carousel.Item>
                <Carousel.Item interval={40000}>
                    <StyledImg src={carousel2} alt="carousel2" />
                </Carousel.Item>
                <Carousel.Item interval={40000}>
                    <StyledImg src={carousel3} alt="carousel3" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

const Memoized = memo(Welcome);
const Styled = styled(Memoized)``;

const StyledImg = styled.img`
    width: 100vw;
    height: 80vh;
    object-fit: cover;
`;

export default Styled;
