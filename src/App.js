import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import "./App.css";


const App = () => {
    return (
        <div className="master-wrapper">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default App;
