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
                full: `This project was created to test <a href=#>Evolutionary alrorigthm</a>`},
        website: {title: 'Portfolio website', description: '#HTML #CSS #JavaScript #React', link: 'https://github.com/chernig?tab=repositories',
                full: ''},
        finance: {title: 'Trading bot', description: '#python #ForexAPI #pyqt', link: 'https://github.com/chernig?tab=repositories',
                full: ''},
        deep: {title: 'Deep learning model', description: '#python #tensorflow-gpu #ssd_mobilenet_v2_coco', link: 'https://github.com/chernig?tab=repositories', 
                full: `The next step was to prepare the data for training.
                     First things first, to make training faster, the original size of every data frame has been changed. 
                     Despite the default image size for the selected model (300 x 300), the data has been resized into 512 x 384
                      as many items would be barely noticeable with lower resolution (that will lead to complicated labelling
                         and less accuracy). To do so, labelImg by Tzutalin has been used (https://github.com/tzutalin/labelImg).
                          Within the process, every single data frame received additional .xml file (annotations), where rectangles
                           defined object to be detected (Figure 1).`}
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
                {project_description[props.name].title}
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