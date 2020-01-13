import React from 'react';
import './general.css'
// const ham = document.querySelector('.hamburger')
// const nav = document.querySelector('.nav-links')
// const links = document.querySelectorAll('.nav-links li')

// ham.addEventListener('click', ()=> {
//     nav.classList.toggle('open')
// })

class General extends React.Component {

    render() {
        return (
            <div className='general'>
                <h1 id='name'>Roman Chernobay</h1>
                <hr id='line'/>
                <h2 id='position'>Software developer</h2>
            </div>
          );
    }
  
}

export default General;