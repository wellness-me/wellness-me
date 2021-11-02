import React, { useState } from 'react';
import Journal from './Journal.jsx'
import Sleep from './Sleep.jsx'
import Slider from './Slider.jsx'
import Exercise from './Exercise.jsx';

const Form = () => {

    const [ exerciseSlider, setExerciseSlider ] = useState(30);
    const [ daySlider, setDaySlider ] = useState(50);
    const [ sleepSlider, setSleepSlider ] = useState(7);
    const [ journalText, setJournalText ] = useState("")
    console.log(exerciseSlider)
    console.log(sleepSlider)
    console.log(daySlider)
    console.log(journalText)
    // todo: make this only accessible if we've logged in

    const postToAPI = async () => {
        const data = {
            "sleep": sleepSlider,
            "exercise": exerciseSlider,
            "journal": journalText,
            "happiness": daySlider,
        }

        const r = await fetch("http://localhost:5000/v1/data/", {
            method: "POST",
            body: JSON.stringify(data),
        })
        console.log(r.json())
    }

    return (
        <div>
            <br/>
            <h3 className="greeting">Good afternoon, Eggert.</h3>
            <div className="happiness-slider">
                <h5>How was your day?</h5>
                <Slider value={daySlider} setValue={setDaySlider} />
                <div className="face-icons">
                    <div className="face-icon" id="sad-face">:(</div>
                    <div className="face-icon" id="happy-face">:)</div>
                </div>
            </div>

            <div className="input-form">
                <div className="column 1">
                    <Journal value={journalText} setValue={setJournalText} />
                </div>
                <div className="column 2">
                    <Sleep value={sleepSlider} setValue={setSleepSlider} />
                </div>
                <div className="column 3">
                    <Exercise value={exerciseSlider} setValue={setExerciseSlider} />
                </div>
            </div>

            <div id="submit-button">
                <button type="button" class="btn btn-primary" onClick={postToAPI}>Submit!</button>
            </div>
        </div>
    )
}

export default Form;
