import React, { useState } from 'react'
import "./Project.css";
import ProjectModal from "./ProjectModal";

const Project = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className="card-item">
                <li>
                    <h3>{props.title}</h3>
                    <div className='card-wrapper'>
                        <div className="card-img-wrapper" onClick={() => {setIsOpen(true)}}>
                            <img src={props.src} alt={props.alt}
                            className='card_img'/>
                        </div>
                        <div className="card-text-wrapper">
                            <div className="text__inner">
                                <p className="text-blue">{props.skills}</p>
                            </div>
                        </div>
                        <br />
                    </div>
                </li>
            </div>
            <ProjectModal 
            isOpen={isOpen} closeModal={closeModal} 
            src={props.src} text1={props.text1} 
            text2={props.text2} title={props.title} 
            path={props.path} 
            live={props.live}
            gitPath={props.github}/>
            
        </>
    );
}

export default Project;
