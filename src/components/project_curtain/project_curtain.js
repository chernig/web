import React, {useState} from 'react';
import './project_curtain.css'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import GitHubIcon from '@material-ui/icons/GitHub';
import Gallery from '../gallery/gallery'
// Bug: visible triggeres for 2 projects after rush close
// Bug: empty line between curtains in mobile view
// Implement: image gallery, text
// TODO : responsive through react
function ProjectCurtain(props) {
    const project_description = {
        snake: {title : 'AI Snake',
                description: '#python #evolutionary algorithm #pygame',
                link: 'https://github.com/chernig?tab=repositories',
                full: `This project was created to test how evolution algorithm can handle a basic snake game. The game was made using popular
                       Python library called pygame.`},
        website: {title: 'Portfolio website', description: '#HTML #CSS #JavaScript #React', link: 'https://github.com/chernig?tab=repositories',
                full: 'This very website :)'},
        finance: {title: 'Trading bot', description: '#python #ForexAPI #pyqt', link: 'https://github.com/chernig?tab=repositories',
                full: `This project is Autotrading app that serves as automated service for FXCM trading platform. It assumes
                 utilization of multiple FXCM API functions as well as internal trading strategies to act as automated
                  trading agent. Application's primary modules are: FXCM API implementation part, SQlite database, GUI,
                   strategy & streaming modules.`},
        deep: {title: 'Deep learning model', description: '#python #tensorflow-gpu #ssd_mobilenet_v2_coco', link: 'https://github.com/chernig?tab=repositories', 
                full: `This project was designed to create an AI that can indentify empty cans or bottles in public places such as parks or streets.
                        To do so, a specific model had to be trained that can analyze an input image and identify the required objects. SSD_mobilenet model
                         was selected as a model template due to its high training speed and high accuracy. However, due to lack of data for model training,
                         this model's accuracy wasn't high.`}
    }

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        props.onClick()
        setOpen(true);
      }
    
    const handleClose = () => {
        props.onClick()
        setOpen(false)
        
      }

    
    return (
        <div className='curtain' style={{visibility: props.visible ? 'visible':'hidden'}}>
            <div className='upper' >
                <h1>{project_description[props.name].title}</h1>
                <p>{project_description[props.name].description}</p>
            </div>
            <div className='lower'>
                <button onClick={handleClickOpen}>LEARN MORE</button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth='md'
                // onEnter={props.onClick()}
            >
            <DialogTitle id="alert-dialog-title" onClose={handleClose}>
                <a className='gitIcon' href={project_description[props.name].link} target='_blank' rel="noopener noreferrer"><GitHubIcon/>Github</a>
                <CloseIcon className='closeButton' onClick={handleClose}/>
                
            </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontSize: `1em`}} id="alert-dialog-description">
                        <Gallery name={props.name}/>
                        <br className='block-line'/>
                        {project_description[props.name].full}

                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
      );
}   
export default ProjectCurtain;