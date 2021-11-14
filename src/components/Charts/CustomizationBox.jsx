import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const allNonDataInputValues = ['_id', 'createdAt', 'userID', '__v', 'updatedAt']

class CustomizationBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectableCategories: {}
        }
        /*
        get all the properties from data that we set which are actual inputs and set them as possibleValues the chart can 
        have 
        */
        if (this.props.data.length > 0) {
            //alert("the props arte", props.data[this.props.data.length - 1]);
            const possibleValues = Object.keys(props.data[this.props.data.length - 1]).filter((item) => {
                return allNonDataInputValues.indexOf(item) === -1;
            })
            for (let i = 0; i < possibleValues.length; i++) {
                console.log(possibleValues[i]);
                this.state.selectableCategories[possibleValues[i]] = false;
            }
        }

        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this); //for the checboxes, got from react website tutprials
    }

    handleChangeCheckbox(event) {
        alert("handleChange is called")
        const selectableCategoriesDummy = { ...this.state.selectableCategories }
        selectableCategoriesDummy[event.target.value] = !selectableCategoriesDummy[event.target.value];
        this.setState({ selectableCategoriesDummy })
    }

    render() {
        return (
            <div className="customization-box-wrapper">
                <h1>sleep is {this.state.selectableCategories.Excerisce ? "true" : "false"}</h1>
                <div className="sleect-categories-div">
                    <h4>Select what you would like the chart to display</h4>
                    {console.log(this.state)}
                    {Object.keys(this.state.selectableCategories).map((key, index) => {
                        return (
                            <div className="select-input-container">
                                <input onChange={this.handleChangeCheckbox} class="form-check-input" type="checkbox" value={key} id="flexCheckDefault" />
                                <label>{key}</label>
                            </div>
                        )
                    })}
                </div>
                <div className="select-timerange-div">
                    <div className="range-start-div">
                        <h5>When does the range start?</h5>
                        <select name="time-from" id="">
                            {
                                this.props.data.map((element, index) => {
                                    return <option key={element._id} id={element._id} value={element.createdAt} >{Date(element.createdAt)}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="range-start-div">
                        <h5>When does the range end?</h5>
                        <select name="time-from" id="">
                            {
                                this.props.data.map((element, index) => {
                                    return <option key={element._id} id={element._id} value={element.createdAt} >{Date(element.createdAt)}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomizationBox