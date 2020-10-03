import React, {useState} from 'react';
import { Container, CardDeck, Card } from 'react-bootstrap'
import './education.css'

function Education(props) {
    return(
        <div className='education'>
        <Container>
           <CardDeck>
                <Card>
                    <Card.Img variant='top' src='https://doklad-diploma.ru/wp-content/uploads/2017/10/pkjt.jpg'/>
                    <Card.Body>
                    <Card.Title>Network Technician professional diploma</Card.Title>
                    <Card.Text>
                        <b>University</b>: Petrozavodsk College of Railway Transport
                        <br />
                        <b>Graduation year</b>: 2014
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><a href="https://www.pgups.ru/struct/petrozavodskiy_kolledzh/">Website</a></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant='top' src='data:image/png;base64,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' />
                    <Card.Body>
                    <Card.Title>Bachelor of Business Administration</Card.Title>
                    <Card.Text>
                        <b>University</b>: Mikkeli University of Applied Sciences
                        <br />
                        <b>Graduation year</b>: 2017
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><a href="https://www.xamk.fi/en/frontpage/">Website</a></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant='top' src='https://www.newcastle.edu.au/__data/assets/image/0011/246881/uon-logo-square.png' />
                    <Card.Body>
                    <Card.Title>Master of Information Technology</Card.Title>
                    <Card.Text>
                        <b>University</b>: University of Newcastle
                        <br />
                        <b>Graduation year</b>: 2019
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><a href="https://www.newcastle.edu.au/">Website</a></small>
                    </Card.Footer>
                </Card>
            </CardDeck> 
        </Container>
        </div>
    )
}

export default Education;