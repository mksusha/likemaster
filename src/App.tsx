
import './App.css';
import Header from './components/Header';
import HeroSection from "./components/HeroSection.tsx";
import Services from "./components/Services.tsx";
import {Stats} from './components/Stats.tsx';

function App() {

    return (
        <>
            <Header />
            <div className="max-w-[1400px] w-full mx-auto px-4">
                <HeroSection></HeroSection>
                <Stats></Stats>
                <Services></Services>


            </div>
        </>
    );
}

export default App;
