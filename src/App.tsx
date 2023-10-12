import { useMedia } from 'react-media';
import styled from 'styled-components';

import { ReactComponent as DomekoLogoNoBackgroundSVG } from '@/resources/Icons/domekoLogoNoBackgroundWhite.svg';

import AboutUs from './components/AboutUs/AboutUs';
import AlSlidingWindow from './components/AlSlidingWindow/AlSlidingWindow';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import HomeInformation from './components/HomeInformation/HomeInformation';
import IconsSection from './components/IconsSection/IconsSection';
import MapFrame from './components/MapFrame/MapFrame';
import Navigation from './components/Navigation/Navigation';
import Realizations from './components/Realizations/Realizations';
import SlidingWindow from './components/SlidingWindow/SlidingWindow';
import SlidingWindowInfo from './components/SlidingWindow/SlidingWindowInfo';
import Welcome from './components/Welcome/Welcome';
import WoodWindow from './components/WoodWindow/WoodWindow';
import WoodWindowInfo from './components/WoodWindow/WoodWindowInfo';
import { COLOR, FONT_SIZE, FONT_WEIGHT } from './Global/globalStyles';

const App = () => {
    const GLOBAL_MEDIA_QUERIES = {
        medium: '(min-width: 0px) and (max-width: 1199px)',
    };
    const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
    const showMask = matches.medium;
    return (
        <div>
            {showMask ? (
                <NoResolution>
                    <DomekoLogoNoBackgroundSVG />
                    <StyledText>Strona w tej rozdzielczości jest w trakcie produkcji.</StyledText>
                </NoResolution>
            ) : (
                <>
                    <Navigation />
                    <Welcome />
                    <HomeInformation />
                    <AboutUs />
                    <IconsSection />
                    <WoodWindow />
                    <WoodWindowInfo />
                    <SlidingWindow />
                    <SlidingWindowInfo />
                    <AlSlidingWindow />
                    <Catalog />
                    <Realizations />
                    <MapFrame />
                    <Footer />
                </>
            )}
        </div>
    );
};

const NoResolution = styled.div`
    height: 100vh;
    margin: auto;
    background-color: ${COLOR.midnightGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 3rem;
`;
const StyledText = styled.p`
    padding-top: 2rem;
    text-align: center;
    color: ${COLOR.deepCarrotOrange};
    font-size: ${FONT_SIZE.medium};
    font-weight: ${FONT_WEIGHT.lite};
`;

export default App;
