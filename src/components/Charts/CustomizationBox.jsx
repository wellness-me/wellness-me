import React from "react";


const CustomizationBox = (props) => {/* can be converted back into a functional component*/

    return (
        <div className="customization-box-wrapper">
            <div className="select-categories-div">
                <h4> Select what you would like the chart to display</h4>
                {
                    console.log('props', props)}{
                    Object.keys(props.selectableCategories).map((key, index) => {
                        return (
                            <div className="select-input-container">
                                <input onChange={props.handleCheckboxChange} class="form-check-input" type="checkbox" value={key} id="flexCheckDefault" />
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
                            props.data.map((element, index) => {
                                return <option key={element._id} id={element._id} value={element.createdAt} >{Date(element.createdAt)}</option>
                            })
                        }
                    </select>
                </div>
                <div className="range-start-div">
                    <h5>When does the range end?</h5>
                    <select name="time-from" id="">
                        {
                            props.data.map((element, index) => {
                                return <option key={element._id} id={element._id} value={element.createdAt} >{Date(element.createdAt)}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    )

}

export default CustomizationBox