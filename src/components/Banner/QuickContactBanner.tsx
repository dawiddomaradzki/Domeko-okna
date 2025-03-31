import { memo } from 'react';
import styled from 'styled-components';

import { COLOR } from '@/Global/globalStyles';

interface QuickContactBannerProps {
    className?: string;
}

const QuickContactBanner = ({ className }: QuickContactBannerProps) => {
    return (
        <div className={className}>
            <ContentContainer>
                <Header>Szybki kontakt</Header>
                <ContactInfo>
                    <ContactItem>Telefon: +48 123 456 789</ContactItem>
                    <ContactItem>Email: kontakt@example.com</ContactItem>
                </ContactInfo>
            </ContentContainer>
        </div>
    );
};

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    color: ${COLOR.ghostWhite};
    background-color: ${COLOR.midnightGreen};
`;

const Header = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

const ContactInfo = styled.div`
    display: flex;
    gap: 2rem;
`;

const ContactItem = styled.span`
    font-size: 1.2rem;
`;

const Memoized = memo(QuickContactBanner);
const Styled = styled(Memoized)`
    background-color: ${COLOR.midnightGreen};
`;
Styled.displayName = 'QuickContactBanner';
export default Styled;
