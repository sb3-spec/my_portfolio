import "./Contact.css";

const Contact = () => {
    return (
        <div className="container">
            <section id="contact">
                <h2 className="text-large text-white">Important Info and Links</h2>
                <div className="contact-wrapper">
                    <div className="subtile">
                        <h3>Email</h3>
                        <h4>sheffira2@gmail.com</h4>
                    </div>
                    <div className="subtile">
                        <h3>Phone</h3>
                        <h4>714-381-5418</h4>
                    </div>
                    <div className="subtile">
                        <h3>LinkedIn</h3>
                        <a 
                            href="https://www.linkedin.com/in/robert-sheffield-a119a9140/" 
                            target="_blank" 
                            rel="noreferrer"
                        ><i className="fab fa-linkedin linked-in" /></a>
                    </div>
                    <div className="subtile">
                        <h3>Github</h3>
                        <a 
                            href="https://github.com/sb3-spec" 
                            target="_blank" 
                            rel="noreferrer"
                        ><i className="fab fa-github github" /></a>
                    </div>
                    <div className="subtile">
                        <h3>Resume</h3>
                        <h4><a 
                        href="https://drive.google.com/file/d/1kjG_SLSgtuZ3InZekR-hauwiaNc4wIwf/view?usp=sharing" 
                        target="_blank"
                        rel="noreferrer"
                        ><i class="far fa-file-pdf"></i></a></h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
