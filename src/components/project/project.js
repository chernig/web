import React, {useState} from 'react';
import './project.css'
import ProjectCurtain from '../project_curtain/project_curtain'
// TODO : responsive through react
//  <div className={`project ${props.name}`} style={{backgroundImage: `url(${require(`./images/${props.image}.jpg`)})`}}> - works
function Project(props) {
    const [curtain, setCurtain] = useState(false)
    return (
        <div className={`project ${props.name}`} onMouseEnter={()=> setCurtain(true)} onMouseLeave={()=> setCurtain(false)}>
            <img src={require(`./images/${props.image}.jpg`)}   alt='text'/>
            {/* <div className='upper' style={{visibility: curtain ? 'visible':'hidden'}}></div>
            <div className='lower' style={{visibility: curtain ? 'visible':'hidden'}}></div> */}
            <ProjectCurtain visible = {curtain} name={props.name} onClick={()=> setCurtain(false)}/>
        </div>
      );
}   
export default Project;