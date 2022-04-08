import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Stack from './pages/Stack';

import './styles/global.css'
import "./App.css";


const App = () => {
    return (
        <div className="master-wrapper">
            <Navbar />
            <Home />
            <Stack />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default App;
