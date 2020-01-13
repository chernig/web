import React from 'react';
import './skill_popup.css'

function SkillPopup(props) {
    return (
        <div className='skill-popup' style={{visibility: props.visible ? 'visible':'hidden'}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita tenetur a laudantium quasi, numquam commodi dolore, facilis tempore mollitia voluptas aliquam corporis obcaecati ab repudiandae, aspernatur rerum nisi. In?</p>
        </div>
      );
}
        
export default SkillPopup;