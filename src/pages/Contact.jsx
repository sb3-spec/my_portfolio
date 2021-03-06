import React, { useState } from 'react'
import "./Contact.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Popup from "../components/Popup";

const Contact = () => {
    const [emailCopied, setEmailCopied] = useState(false);
    const [phoneCopied, setPhoneCopied] = useState(false);

    const handleCopy = () => {
        setEmailCopied(true);
        setTimeout(() => {
            setEmailCopied(false);
        }, 1500);
    }

    const handlePhoneCopy = () => {
        setPhoneCopied(true);
        setTimeout(() => {
            setPhoneCopied(false);
        }, 1500);
    }
    


    return (
        <div className="container nav-container">
            <section id="contact" className="contact-section">
                <div className="contact-header">
                    <h2 className="text-large text-white">Contact & Links</h2> 
                </div>
                <div className="contact-wrapper">
                    <ul className="contact-list">
                        <li className="contact-item border-radius-upper-left">
                            <div className="subtile">
                                <h3>Email</h3>
                                <div className="copy_container">
                                    <CopyToClipboard
                                        text="sheffira2@gmail.com"
                                        onCopy={handleCopy}
                                    >
                                        <h4 className="info_text">sheffira2@gmail.com</h4>
                                    </CopyToClipboard>
                                    {emailCopied && <Popup text="Copied to clipboard!"/>}
                                </div>
                            </div>
                        </li>
                        <li className="contact-item border-radius-upper-right">
                            <div className="subtile">
                                <h3>Phone</h3>
                                <div className="copy_container">
                                    <CopyToClipboard
                                        text="sheffira2@gmail.com"
                                        onCopy={handlePhoneCopy}
                                    >
                                        <h4 className="info_text">714-381-5418</h4>
                                    </CopyToClipboard>
                                    {phoneCopied && <Popup text="Copied to clipboard!"/>}
                                </div>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="subtile">
                                <h3>LinkedIn</h3>
                                <a
                                    href="https://www.linkedin.com/in/robert-sheffield-a119a9140/"
                                    target="_blank"
                                    rel="noreferrer"
                                ><i className="fab fa-linkedin linked-in" /></a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="subtile">
                                <h3>Github</h3>
                                <a
                                    href="https://github.com/sb3-spec"
                                    target="_blank"
                                    rel="noreferrer"
                                ><i className="fab fa-github github" /></a>
                            </div>
                        </li>
                        <li className="contact-item border-radius-lower-left">
                            <div className="subtile">
                                <h3>Resume</h3>
                                <h4><a href="https://pdf.ac/dpfLJ" target="_blank" rel="noreferrer"><i className="far fa-file-pdf"></i></a></h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Contact;
