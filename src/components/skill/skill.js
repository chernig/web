import React, {useState} from 'react';
import './skill.css'
import SkillPopup from '../skill_popup/skill_popup'
// import Responsive from 'react-responsive-decorator'

function Skill(props) {
    const [popup, setPopup] = useState(false)
    return (
        <div className={`skill ${props.id}`} style={{width: props.size}}>
            <div className='pentagon' style={{width: props.size, height:props.size, 
            transform: props.rotate ? `rotate(${props.rotate}deg)`: ''}}
            onMouseEnter={() => setPopup(true)} onMouseOut={() => setPopup(false)}>
            <p>{props.text}</p>
            </div>
            {/* <SkillPopup visible={popup} /> */}
        </div>
      );
}
        
export default Skill;