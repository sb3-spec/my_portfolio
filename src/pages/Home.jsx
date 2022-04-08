import './Home.css';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div className="overall-wrapper">
            <section id="home">
                <div className="title">
                    <h1>Robert Sheffield</h1>
                </div>
                <div className="title-2"> 
                    <h2>Fullstack Developer</h2>
                </div>
                <div className="neon-button">
                    <Link
                        activeClass="active"
                        to="stack"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    ><p>Explore</p></Link>
                </div>
            </section>
        </div>
    )
}

export default Home;
