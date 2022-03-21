import React from 'react';
import './ModalStyles.css';
import ReactDom from 'react-dom';

const ProjectModal = ({ projectId, isOpen, closeModal, text1, text2, src, alt, title, path, live, github }) => {

    if(!isOpen) return null;

    return ReactDom.createPortal(
        <>
            <div className="modal-container active">
                <div className="modal-header" id={projectId}>
                    <div className="title">
                        {title}
                    </div>
                    <button className="close-button" onClick={closeModal}>&times;</button>
                </div>
                <div className="modal-body">
                    <div className="modal-body__img">
                        <img src={src} alt={alt} className='position-left'/> 
                    </div>
                    <div className="modal-body__text">
                        <div className="paragraph">
                            {text1}
                        </div>
                        <div className="paragraph">
                            {text2}
                        </div>
                        <div className="link__container">
                            {live ? <a target="_blank" rel="noreferrer" href={path}>Visit Site</a> : <a target="_blank" rel="noreferrer" href={path}>Github Repository</a>}
                            {live && github && <a target="_blank" rel="noreferrer" href={github}>Visit Github Repo</a>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay active" onClick={closeModal}></div>  
        </>,
        document.getElementById("portal")
    )
}

export default ProjectModal;
