import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Goals extends React.Component {
    render() {
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
                            Another one..
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
}
export default Goals;
