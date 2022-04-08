import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Home</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="stack"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Stack</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Projects</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Info</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
