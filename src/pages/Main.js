import Navbar from '../components/Navbar';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Stack from '../pages/Stack';


export default function Main() {
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