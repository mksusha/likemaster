
import './App.css';
import Header from './components/Header';
import HeroSection from "./components/HeroSection.tsx";
import SanitaryBlock from './components/SanitaryBlock.tsx';
import Services from "./components/Services.tsx";
import {Stats} from './components/Stats.tsx';
import ElectricianBlock from "./components/ElectricianBlock.tsx";
import HandymanBlock from "./components/HandymanBlock.tsx";
import ApplianceRepairBlock from "./components/ApplianceRepairBlock.tsx";
import FinishingBlock from "./components/FinishingBlock.tsx";
import FAQ from "./components/FAQ.tsx";

function App() {

    return (
        <>
            <Header />
            <div className="max-w-[1400px] w-full mx-auto px-4">
                <HeroSection></HeroSection>
                <Stats></Stats>
                <Services></Services>
<SanitaryBlock></SanitaryBlock>
                <ElectricianBlock></ElectricianBlock>
                <HandymanBlock></HandymanBlock>
                <ApplianceRepairBlock></ApplianceRepairBlock>
                <FinishingBlock></FinishingBlock>
                <FAQ></FAQ>

            </div>
        </>
    );
}

export default App;
