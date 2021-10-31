import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react'

const Form = () => {
    // todo: make this only accessible if we've logged in
    const [sleep, setSleep] = useState("")
    const [exercise, setExercise] = useState("")

    const postToAPI = async () => {
        const data = {
            "sleep": sleep,
            "exercise": exercise
        }

        const r = await fetch("http://localhost:5000/v1/data/", {
            method: "POST",
            body: data,
        })
        console.log(r.json())
    }

    return (
        <div>
            <div>
                <Input focus placeholder='Sleep' onChange={(e) => setSleep(e.target.value) } />
            </div>

            <div>
                <Input focus placeholder='Happiness' onChange={(e) => setExercise(e.target.value) } />
            </div>
    
            <Button primary onClick={postToAPI}>Submit Form</Button>

        </div>
    )
}

export default Form;
