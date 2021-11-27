import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const UNSELECTABLE_PROPS = ['__v', '_id', 'createdAt', 'updatedAt', 'userID', "journal"]

const CustomizationBox = (props) => {/* can be converted back into a functional component*/


    const [selectedCategories, setSelectedCategories] = useState([]);
    const [startDateIndex, setStartDateIndex] = useState(0)
    const [endDateIndex, setEndDateIndex] = useState(props.data.length)

    const handleSelectBoxChangeFrom = (e) => {
        props.updateTimeRange(parseInt(e.target.value), endDateIndex)
        setStartDateIndex(parseInt(e.target.value))
    }
    const handleSelectBoxChangeTo = (e) => {
        props.updateTimeRange(startDateIndex, parseInt(e.target.value))
        setEndDateIndex(parseInt(e.target.value))
    }


    const internallyHandleCheckboxChange = (e) => {
        let newSelectedCategories = [];
        if (selectedCategories.includes(e.target.value)) {
            newSelectedCategories = selectedCategories.filter(value => value !== e.target.value)
        } else if (selectedCategories.length == 2) {
            alert('must de-select a data field before adding a new one')
            e.target.checked = !e.target.checked
            return;
        } else {
            newSelectedCategories = [...selectedCategories, e.target.value];
        }

        props.updateSelectedCategories(newSelectedCategories)
        setSelectedCategories(newSelectedCategories)
    }


    if (props.data.length < 1) {
        return (<h5>Please input some data before you can select it</h5>)
    } else {
        const x = props.data[props.data.length - 1]
        const selectableKeys = Object.keys(x).filter((value) => { return !UNSELECTABLE_PROPS.includes(value) })

        let toOutputLabels;
        if (startDateIndex < 0) {
            toOutputLabels = <option key={-1} id={0} value={-1} >Please select the start index first -- the entire range is defualt </option>
        }
        else if (startDateIndex === props.data.length - 1) {
            toOutputLabels = <option key={props.data.length} id={0} value={7} >You have picked the last charted date -- please select a lower date</option>
        }
        else {
            toOutputLabels = props.data.map((element, index) => {
                return <option key={element._id} id={element._id} value={index} >{Date(element.createdAt)}</option>
            }).filter((value, index) => { return index > startDateIndex })
        }


        return (
            <div className="customization-box-wrapper">
                <div className="select-categories-div">
                    <h4> Select what you would like the chart to display</h4>
                    {
                        selectableKeys.map((value) => {
                            return (
                                <div className="select-input-container">
                                    <Button primary onClick={internallyHandleCheckboxChange} key={value} value={value}>{value}</Button>
                                    {/* <input onChange={internallyHandleCheckboxChange} class="form-check-input" type="checkbox" key={value} value={value} className="flexCheckDefault" />
                                    <label>{value}</label> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default CustomizationBox;
