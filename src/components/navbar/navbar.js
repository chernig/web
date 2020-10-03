import React from 'react';
import './navbar.css'
import logo from './images/logo1.png'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleView= this.toggleView.bind(this);
        this.state = {
            active: false,
        };
    }
    toggleView() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <div className='navigation'>
                <a data-menuanchor='main' href="#main"><img className='logo' src={logo} alt="logo"/></a>
            <nav className='navbar'>
                <div className="hamburger" onClick={this.toggleView}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div class="line"></div>
                </div>
                <div id='menu' className={`nav-links ${this.state.active ? 'open':null}`}>
                    <a data-menuanchor='skill_view' className='link' href="#skill_view">skills</a>
                    <a data-menuanchor='projects' className='link' href="#projects">projects</a>
                    <a data-menuanchor='education' className='link' href="#education">education</a>
                    <a data-menuanchor='contact' className='link' href="#contact">contact me</a>
                    {/* <li className='nav-link' data-menuanchor='skill_view'><a className="link" href="#skill_view">skills</a></li>
                    <li className='nav-link' data-menuanchor='projects'><a className="link" href="#m">projects</a></li>
                    <li className='nav-link' data-menuanchor='education'><a className="link" href="#m">education</a></li>
                    <li className='nav-link' data-menuanchor='about me'><a className="link" href="#m">about me</a></li> */}
                    
                    
                </div>
            </nav>
            </div>
          );
    }
  
}

export default Navbar;
