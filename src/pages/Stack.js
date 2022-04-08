import { frontEnd, backEnd } from '../utility/techNodes'

function Stack() {
    
    return (
        <div className="stack__outer" id="stack">
            <div className="stack__inner">
                <h1 className="stack-title">Here's what I work with:</h1>
                <div className="stack-container">
                    <div className="front-container">
                        <h1 className="stack-sub-header">Frontend</h1>
                        <div className="sub-container blue">
                            <TechSlice slice={frontEnd} className='front' alt=""/>
                        </div>
                    </div>
                    <div className="back-container">
                        <h1>Backend</h1>
                        <div className="sub-container">
                            <TechSlice slice={backEnd} className='back height-standard' alt={'height-standard'}/>
                        </div>
                    </div>
            
                </div>
            
            </div>
        </div>  
    )
}

function TechSlice({slice, className, alt}) {
    console.log(slice)

    return (
        <div className={'tech-slice ' + alt}>
            <ul className={"tech-slice-list " + className}>
                {slice.map((tech, idx) => <li key={idx}><TechnologyNode tech={tech} key={idx}/></li>)}
            </ul>
        </div>
    )
}

function TechnologyNode({tech}) {
    
    return (
        <div>
            {/* {tech.name} */}
            <img src={tech.icon} alt={`${tech.name} icon`} className='tech-icon-img' />
        </div>
    )
}

export default Stack