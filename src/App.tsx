import AOS from 'aos';

import AboutUs from './components/AboutUs/AboutUs';
import AlSlidingWindow from './components/AlSlidingWindow/AlSlidingWindow';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import HomeInformation from './components/HomeInformation/HomeInformation';
import IconsSection from './components/IconsSection/IconsSection';
import MapFrame from './components/MapFrame/MapFrame';
import Navigation from './components/Navigation/Navigation';
import Pros from './components/Pros/Pros';
import Realizations from './components/Realizations/Realizations';
import SlidingWindow from './components/SlidingWindow/SlidingWindow';
import SlidingWindowInfo from './components/SlidingWindow/SlidingWindowInfo';
import Welcome from './components/Welcome/Welcome';
import WoodWindow from './components/WoodWindow/WoodWindow';
import WoodWindowInfo from './components/WoodWindow/WoodWindowInfo';

const App = () => {
    AOS.init({ once: true });
    return (
        <div>
            <Navigation />
            <Welcome />
            <HomeInformation />
            <AboutUs />
            <IconsSection />
            <Pros />
            <WoodWindow />
            <WoodWindowInfo />
            <SlidingWindow />l
            <SlidingWindowInfo />
            <AlSlidingWindow />
            <Catalog />
            <Realizations />
            <MapFrame />
            <Footer />
        </div>
    );
};

export default App;
