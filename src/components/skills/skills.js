import React from 'react';
import './skills.css'
import Skill from '../skill/skill'
// const ham = document.querySelector('.hamburger')
// const nav = document.querySelector('.nav-links')
// const links = document.querySelectorAll('.nav-links li')

// ham.addEventListener('click', ()=> {
//     nav.classList.toggle('open')
// })

function Skills(props) {
        let screen_width = window.screen.width
        
        // const handleResize = () => {
        //     screen_width = window.screen.width
        //     console.log(screen_width)
        // }
        // window.addEventListener('resize', handleResize)
        return (
            <div className='skills'>
                {console.log(window.screen.width)}
                <Skill id='css' text='C S S' size='5.55vw' rotate={180}/>
                <Skill id='html' text='H T M L' size='7.57vw' rotate={25}/>
                <Skill id='python' text='Python' size='7.57vw' rotate={-25}/>
                <Skill id='react' text='React'size='7.57vw' rotate={-10}/>
                <Skill id='js' text='JavaScript' size='10.1vw' rotate={-20}/>
                <Skill id='django' text='Django' size='7.57vw' rotate={10}/>
                <Skill id='data' text='Data Science'size='10.1vw' rotate={20}/>
                <Skill id='sql' text='S Q L' size='6.06vw' rotate={-30}/>
                <Skill id='git' text='G I T' size='6.06vw' rotate={30}/>
                <Skill id='soft' text='Soft skills' size='9.09vw' rotate={-10}/>
                <Skill id='test' text='Business Analysis' size='9.09vw' rotate={10}/>
            </div>
          );
    }

export default Skills;