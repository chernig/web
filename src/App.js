import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar'
import General from './components/general/general'
import Skills from './components/skills/skills'
import ReactFullpage from "@fullpage/react-fullpage";
import Projects from './components/projects/projects';
import Education from './components/education/education'
import Contacts from './components/contacts/contacts'



// class App extends React.Component {
  
//   render() {
//     return (
//       <div className="App">
//       <Navbar />
//       <General />
//       <Skills id='skills'/>
//     </div>
//     )
//   }
// }


class App extends React.Component {
  
  
  render() {
    return (
  <div className='App'>
    <Navbar />
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000}
    navigation = {true}
    menu = {'#menu'}
    dragAndMove = {'fingersonly'}
    anchors = {['main', 'skill_view', 'projects', 'education', 'contact']}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <General />
          </div>
          <div className="section">
            <Skills id='skills'/>
          </div>
          <div className='section'>
            <Projects />
          </div>
          < div className='section'>
            <Education />
          </div>
          < div className='section'>
            <Contacts />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}/>
    </div>)
  }
  }




export default App;
