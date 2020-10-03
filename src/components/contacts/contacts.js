import React, {useState} from 'react';
import { Container, Accordion, Card, Button, Image } from 'react-bootstrap'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './contacts.css'
import FileSaver from 'file-saver';

const saveFile = () => {
    FileSaver.saveAs(
        process.env.PUBLIC_URL + "/resource/Roman_Chernobay_CV.pdf",
        "Roman_Chernobay_CV.pdf");
}

const styles = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };

function Contacts(props) {
    return(
        <div className='contacts'>
        <Container className='center'>
            <Accordion className='accordItem'>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h2 className='title'>SOCIAL LINKS</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div className='mx-auto images'>
                            <a href='https://www.linkedin.com/in/roman-chernobay-902a68149/' target='_blank' rel="noopener noreferrer"><GitHubIcon style={{ fontSize: '10vh', color: 'black' }}/></a>
                            <a href='https://github.com/chernig/' target='_blank' rel="noopener noreferrer"><LinkedInIcon style={{ fontSize: '10vh', color: 'black' }}/></a>
                        </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h2 className='title'>PERSONAL CONTACTS</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <b>Email: </b>myemail@gmail.com
                        <br />
                        <b>Phone: </b>555-555-555
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    <h2 className='title'>MY CV</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body id='download-button'>
                        <Button variant="dark" onClick={saveFile}>Download CV</Button>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
        </div>
    )
}

export default Contacts;