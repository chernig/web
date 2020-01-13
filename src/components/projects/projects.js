import React from 'react';
import './projects.css'
import Project from '../project/project'

class Projects extends React.Component {
    render() {
        return (
            <div className='projects'>
                <div className='p-view'>
                    <Project image='snake' name='snake' />
                    <Project image='deep' name='deep'/>
                    <Project image='finance' name='finance'/>
                    <Project image='website' name='website'/>
                </div>
            </div>
          );
    }
  
}

export default Projects;