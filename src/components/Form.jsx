import React, { useState } from 'react';
import { Input } from 'semantic-ui-react'

const Form = (props) => {
    const [sleep, setSleep] = useState("")
    const [exercise, setExercise] = useState("")

    const postToAPI = async () => {
        const data = {
            "sleep": sleep,
            "exercise": exercise
        }

        await fetch("http://localhost:5000/v1/data/", {
            method: "POST",
            body: data,
        })
    }


    return (
        <div>
            <div>
                <Input focus placeholder='Sleep' onChange={(e) => setSleep(e.target.value) } />
            </div>

            <div>
                <Input focus placeholder='Happiness' onChange={(e) => setExercise(e.target.value) } />
            </div>

        </div>
    )
}

export default Form;
