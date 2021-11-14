import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Goals = () => {
    return (
        <div 
            className="daily-goals"
            style={{marginTop: '20px', marginBottom:'20px'}}
        >
            <label>Three goals for today:</label>
            <div 
                style={{margin: '20px', marginTop: '10px'}}
            >
                <div class="form-check" id="goal-1">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label contentEditable="true">
                    Click to edit..
                    </label>
                </div>
                <div class="form-check" id="goal-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label contentEditable="true">
                        Anothe' one..
                    </label>
                </div>
                <div class="form-check" id="goal-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label contentEditable="true">
                        One more..
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Goals;
