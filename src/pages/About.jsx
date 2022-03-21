import './About.css';

const About = () => {
    return (
        <div className="container">
            <section id="about">
                
                <div className="content-wrapper">
                    <div className="tile-1">
                        <img src="../assets/me_n_ron.jpg" alt="boy and cat" />
                    </div>
                    <div className="tile-2">
                        <div className="body-wrapper">
                            <h3>About me...</h3>
                            <p>
                                I'm Robert, and I am a Fullstack Developer based out of Seattle, Washington.
                                In June of 2020, I graduated from the University of Washington with a
                                BS in Industrial and Systems Engineering with an emphasis in software development.
                            </p>
                            <br />
                            <p>
                                I have been developing software for 5 years now, with the last year focused on Fullstack development.
                                My first four years were spent learning not only programming, but the fundamentals of computer science, data structures,
                                and algorithms. At the moment, my strongest frameworks at the moment are the Django Rest Framework, React and Node. 
                                I pride myself on my attention to detail, my willingness to struggle and learn, and my commitment to building things that are cool.
                            </p>
                            <br />
                            <p>
                                I am constantly learning new things and challenging my understanding of fullstack development so
                                that I can grow as a developer. In my free time, I enjoy cooking, chess, and playing video games.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
