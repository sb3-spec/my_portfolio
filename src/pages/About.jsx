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
                                I'm Robert Sheffield, a Fullstack Developer based out of Seattle, Washington.
                                In June of 2020, I graduated from the University of Washington with a
                                BS in Industrial and Systems Engineering. Due to Industrial Engineering being such a wide umbrella,
                                I had lots of freedom in the engineering electives I could choose; so I chose to focus mainly on software development.
                            </p>
                            <br />
                            <p>
                                Being classically trained, I have a solid understanding of algorithms and data structures--this foundation helped strengthen my
                                ability to adapt to different languages. I pride myself on my attention to detail, my willingness to persevere and learn,
                                and my commitment to building things that are cool.
                            </p>
                            <br />
                            <p>
                                I am constantly learning new things and challenging my understanding of fullstack development so
                                that I can grow as a developer. My determination and understanding of the core concepts of computer science
                                would surely be a boon to any environment I joined. In my free time, I enjoy playing video games
                                and spending time with my girlfriend and cat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
