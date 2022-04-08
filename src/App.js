import Main from './pages/Main'
import Resume from './pages/resume';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './styles/global.css'
import "./App.css";


const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="resume" element={<Resume />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
