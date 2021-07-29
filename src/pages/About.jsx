import './About.css';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div className="container">
            <section id="about">
                
                <div className="content-wrapper">
                    <div className="tile-1">
                        <img src="../assets/robert_ron.jpg" alt="boy and cat" />
                    </div>
                    <div className="tile-2">
                        <div className="body-wrapper">
                            <h3>About me...</h3>
                            <p>
                                I'm Robert, and I am a web developer based out of Seattle, Washington.
                                    In June of 2020. I graduated from the University of Washington with a
                                    bachelors in Industrial and Systems Engineering. While I did major in engineering,
                                    we could choose other fields to focus, so I
                                    chose software engineering.
                            </p>
                            <br />
                            <p>
                                Currently, I am more practiced with Front-end development; however, I am ultimately more
                                interested in back end programming, and seek to expand my understanding of the subject. I regularly use React,
                                JavScript, CSS, HTML and python. Recently, i was able to build a fully functional online store using the Commerce.js
                                API.
                            </p>
                            <br />
                            <p>
                                I am constantly learning new things and challenging my understanding of web development so
                                that I might grow as a developer. In my free time, I enjoy cooking, chess and playing video games.
                            </p>
                        </div>
                        <br />
                        <div className="neon-button button-pink">
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    ><p>Next</p></Link>
                </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
