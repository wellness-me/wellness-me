import React from "react"
import {Form, FormControl, FormGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Goals from './Goals.jsx'

const Journal = (props) => {
 
    return (
        <Form>
            <FormGroup className="mb-3" controlId="formBasicEmail">
                <Goals />
                <FormControl
                    type="journal"
                    value={props.value}
                    as="textarea"
                    onChange={(e) => {props.setValue(e.target.value)}}
                    placeholder="Write any special reflections or happenings from today."
                    style={{ height: '200px' , marginTop: '25px'}}
                />
            </FormGroup>
        </Form>
    );
}

export default Journal;
