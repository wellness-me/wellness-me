import React from "react";
// import { Form, Col, Row } from "react-bootstrap";
import ExerciseSlider from "./ExerciseSlider";

const Exercise = (props) => {
    return (

        <div className="daily-goals" style={{marginTop: '20px', marginBottom:'20px'}} >
            <label>How much did you exercise?</label>
            <br/>
            <small class="text-muted">Click and drag the slider to match the minutes of exercise you did today.</small>
            <br/><br/>
            <ExerciseSlider value={props.value} setValue={props.setValue} />
            {/* <Form>
                <Form.Group as={Row}>
                    <Col xs="8">
                        <ExerciseSlider value={props.value} setValue={props.setValue} />
                    </Col>
                    <Col xs="3">
                        <Form.Control value={props.value} />
                    </Col>
                </Form.Group>
            </Form> */}
        </div>

    );
};
export default Exercise;