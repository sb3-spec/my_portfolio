import Project from '../components/Project';
import './Projects.css';


const Projects = () => {
    return (
        <div className="projects">
            <section id="projects">
                <div className='header'>
                    <h2>Projects</h2>
                </div>
                <ul>
                    <Project 
                        title="Tutoring Landing Site"
                        src='../assets/tutoring_screenshot.png'
                        alt="overview of tutoring website"
                        description="Created custom components to build a 
                        landing page for a private tutoring site using CSS Flexbox,
                        and the React framework."
                        skills="React, HTML, CSS, JavaScript, Node.js, Git"
                        path="https://rsheffieldtutoring.com/"
                    />
                    <Project 
                        title="Mock eCommerce Site"
                        src='../assets/eCommerce_screenshot.png'
                        alt="overview of eCommerce website"
                        description="Developed a modern, fully functional
                        eCommerce website. The user is able to go through the entire purchasing
                        process, from adding to their cart, to entering their payment info."
                        skills="React, HTML, CSS, JavaScript, Commerce.js, 
                        RESTful API Consumption, Material UI, Node.js, Git"
                        path="https://www.shoprobert.com/"
                    />
                    <Project 
                        title="Google Docs Clone"
                        src='../assets/gdocs_2.png'
                        alt="overview of google docs clone document"
                        description="Built a working clone of a Google Docs document that is fully functional. Using socket.io
                        and Node.js, the page is able to be worked on b multiple users and is saved every 2 seconds into 
                        a MongoDB database. Furthermore, changes will be reflected across multiple instances 
                        of the page."
                        skills="MongoDB, Socket.io, React, HTML, CSS, JavaScript, 
                        RESTful API Consumption, Node.js, Git"
                        path="https://github.com/sb3-spec/google-docs-clone"
                    />
                </ul>
            </section>
        </div>
    );
}

export default Projects;

