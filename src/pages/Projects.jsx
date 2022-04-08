import Project from '../components/Project';
import './Projects.css';


const Projects = () => {
    return (
        <div className="projects">
            <section id="projects">
                <div className='header'>
                    <h2>Projects</h2>
                </div>
                <div className="project__container">
                    <ul>
                    <Project
                            title="Twitter Clone"
                            src='../assets/twitter_clone.jpg'
                            alt="overview of my 2d python game"
                            skills="React, Django Rest Framework, HTTP, postgreSQl, APIs, Fullstack Development, Git, Continuous Deployment"
                            github="https://github.com/sb3-spec"
                            path="https://dreamy-aryabhata-f7d882.netlify.app/"
                            text1="The culmination of months of work, my twitter clone, cleverly dubbed 'Worse Twitter,'
                            utilizes many modern technologies to deliver a robust social media site. On the backend I used the Django
                            Rest Framework(DRF) with postgreSQL as my database. One of my biggest take aways was the versatility of the DRF; 
                            once I got a basic understanding of the layout and syntax, developing api endpoints became a breeze. This was all 
                            served via React." 
                            text2="While I grew as a dev in almost every way, the biggests leap was the understanding
                            of backend architecture and the HTTP request lifecycle. This project is a great example of my enthusiasm to learn
                            and hone new technologies."
                            live={true}
                        />
                    <Project
                            title="Discord Clone"
                            src='../assets/robcord.png'
                            alt="overview of my discord like chat app, Robcord"
                            skills="Backend Development, Socket.io, Node.js, React, API Consumption, Git"
                            path="https://614a3d05fc8eb2155960f269--blissful-lumiere-c2b648.netlify.app/"
                            text1="My most ambitious project yet, Robcord, is a clone of the popular chat app Discord.
                            Using the StreamChat API, I was able to create a modern chat site with all the functionality
                            a user expects in 2021. Members are able to create and edit chat rooms, start direct messages, 
                            reply to specific messages, add reactions, and more. Client-server connections were done with Socket.io, 
                            and the backend was done using Node.js and Express."
                            text2="The hardest part of the endeavour was getting familiar 
                            with the chat API I was using; this being said, my growth from this project heavily outweighed its challenges. 
                            I found that I was much more comfortable with Socket.io, Node.js, and server side code in general after finishing up. 
                            Additionally, my ability to create custom React Components has significantly broadened, and I 
                            feel a lot more confident in my abilites in both front and backend development."
                            live={true}
                        />
                        <Project
                            title="Tutoring Landing Site"
                            src='../assets/tutoring_screenshot.png'
                            alt="overview of tutoring website"
                            skills="React, HTML, CSS, JavaScript, Node.js, Git"
                            path="https://rsheffieldtutoring.com/"
                            text1="For some context, I am a self employed software tutor. 
                            My tutoring website was my first real foray into React and React Routing. 
                            It's pretty simple, a static website with multiple pages meant to explain 
                            my services, display my contact info, let potential clients get to know me a bit."
                            text2="While simple, this project really challenged me when it came to mobile responsiveness. 
                            I found myself struggling to manipluate the CSS in a way that would make things look readable, let alone
                            attractive. It turns out, I had not set up my styles in a way that allowed for flexibility. In the end, 
                            I started from the ground up with a focus on responsiveness, and was able to build something I am proud of."
                            live={true}
                        />
                        <Project
                            title="Mock eCommerce Site"
                            src='../assets/eCommerce_screenshot.png'
                            alt="overview of eCommerce website"
                            skills="React, JavaScript, Commerce.js,
                            RESTful API Consumption, Material UI, Node.js, Git"
                            path="https://www.shoprobert.com/"
                            text1="Robert's Shop, my very own mock online retailer, was my first project to consume an API 
                            (Commerce.js and Stripe). Much like any other online retail site, users browse products, 
                            can edit their cart, and will even  receive a confirmation email once their transactin has been processed.
                            To clarify, I'm not really selling anything; the user will not be charged for ordering anything."
                            text2="Since this was my first API consuming project, I stumbled a few times during production. 
                            I oftentimes found myself overwhelmed by the sheer number of components that would have to work together. 
                            However, I succeeded in the end and found that not only had I gotten better at working with React in general, but I was 
                            better at sifting through an API's documentation to find the information I was looking for."
                            live={true}
                        />
                        <Project
                            title="Google Docs Document Clone"
                            src='../assets/gdocs_2.png'
                            alt="overview of google docs clone document"
                            skills="MongoDB, Socket.io, React, HTML, CSS, JavaScript,
                            RESTful API Consumption, Node.js, Git"
                            path="https://github.com/sb3-spec/google-docs-clone"
                            text1="In Google Drive, a user is able to create a 
                            document which will be stored in the cloud; any 
                            edits the user makes to the document will be saved immediately. This project
                            is capable of creating a doucment with its own unique URL, storing the documents in
                            a non-relational database (MongoDB), and tracking changes within seconds of the user making them."
                            text2="I was having a hard time understanding socket to socket connections, 
                            as well as the pattern of listening for requests and sending out requests. With confusion comes growth, and I was able 
                            to get a firmer understanding of not only Socket.io, but MongoDB as well."
                            live={false}
                        />
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Projects;

