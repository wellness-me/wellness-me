import React, { useState } from 'react';
import Cookies from 'universal-cookie';

import Journal from './Journal.jsx'
import Sleep from './Sleep.jsx'
import Slider from './Slider.jsx'
import Exercise from './Exercise.jsx';
import { useHistory } from 'react-router-dom';

const Form = () => {

    const [exerciseSlider, setExerciseSlider] = useState(30);
    const [daySlider, setDaySlider] = useState(50);
    const [sleepSlider, setSleepSlider] = useState(7);
    const [journalText, setJournalText] = useState("")
    //console.log(exerciseSlider)
    //console.log(sleepSlider)
    //console.log(daySlider)
    //console.log(journalText)

    const cookies = new Cookies();
    const username = cookies.get("username")
    const userID = cookies.get("userid")
    const token = cookies.get("token")
    const history = useHistory()

    const postToAPI = async () => {
        const data = {
            "userID": userID,
            "sleep": sleepSlider,
            "exercise": exerciseSlider,
            "journal": journalText,
            "happiness": daySlider,
        }

        const r = await fetch("/v1/data/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(data),
        })
        if (r.status === 401) {
            history.push("/")
        }
        //console.log(await r.json())
    }

    return (
        <div>
            <br />
            <h3 className="greeting">Good day, {username}.</h3>
            <div className="happiness-slider">
                <h5>How was your day?</h5>
                <Slider value={daySlider} setValue={setDaySlider} />
                <div className="face-icons">
                    <div className="face-icon" id="sad-face">😓</div>
                    <div className="face-icon" id="happy-face">😊</div>
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
                <button type="button" class="btn btn-primary" onClick={() => { postToAPI(); alert("submitted succesfully!"); }}>Submit!</button>
            </div>
        </div>
    )
}

export default Form;
