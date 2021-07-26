import "./Project.css";

const Project = (props) => {
    return (
        <div className="card-item">
            <li>
                <h3>{props.title}</h3>
                <div className='card-wrapper'>
                    <div className="card-img-wrapper">
                        <img src={props.src} alt={props.alt}
                        className='card_img'/>
                    </div>
                    <div className="card-text-wrapper">
                        <p className="text-white">{props.description}</p>
                        <p className="text-blue">{props.skills}</p>
                    </div>
                    <br />
                    <div className="neon-button">
                        <a rel="noreferrer" href={props.path} target="_blank">Check it out!</a>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default Project;
