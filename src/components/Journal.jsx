import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider.jsx';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Goals from './Goals.jsx'

class Journal extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Goals />
                    <Form.Control
                    as="textarea"
                    placeholder="Write any special reflections or happenings from today."
                    style={{ height: '200px' , marginTop: '25px'}}
                    />
                </Form.Group>
            </Form>
        );
        
    }
}
export default Journal;
