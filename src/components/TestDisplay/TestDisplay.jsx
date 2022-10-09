import React from 'react';
import './TestDisplay.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TestDisplay() {
    return (
        <div className="body-section">     
            <Card style={{flex: 1}}>
                <Card.Img variant="top" src="myImages/javascript.jpg"  alt="javascript" style={{height: '100%', width: '100%', opacity: 0.8}}/>
                <Card.Body>
                    <Card.Title>JavaScript 101</Card.Title>
                    <Card.Text>
                        Take this assessment to test your JavaScript knowledge (10 multiple choice questions)
                    </Card.Text>
                    <Link to={"./testone"}>
                        <Button variant="primary">Begin Test</Button>
                    </Link>        
                </Card.Body>
            </Card>

            <br /><br />
            <Card style={{ flex: 1}}>
                <Card.Img variant="top" src="myImages/python.jpg" alt="python" style={{height: '75%', width: '100%', opacity: 0.8}}/>
                <Card.Body>
                    <Card.Title>Python 101</Card.Title>
                    <Card.Text>
                        Take this assessment to test your Python knowledge (10 multiple choice questions)
                    </Card.Text>
                    <Link to={"./testtwo"}>
                        <Button variant="primary">Begin Test</Button>
                    </Link>      
                </Card.Body>
            </Card>   
        </div>
    );
  }

export default TestDisplay;