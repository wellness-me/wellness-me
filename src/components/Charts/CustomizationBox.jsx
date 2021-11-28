import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const UNSELECTABLE_PROPS = ['__v', '_id', 'createdAt', 'updatedAt', 'userID', "journal"]

const CustomizationBox = (props) => {
    const [startDateIndex, setStartDateIndex] = useState(0)

    const handleChangeDropdown = (e, {value}) => {
        props.updateSelectedCategories([value])
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

        const options = []

        selectableKeys.map((value, idx) => {
            options.push({
                key: idx + 1,
                text: value,
                value: value
            })
        })

        return (
            <div className="customization-box-wrapper">
                <div className="select-categories-div">
                    <h4> Select what you would like the chart to display</h4>
                    <Dropdown clearable options={options} selection onChange={handleChangeDropdown}/> 
                </div>
            </div>
        )
    }
}

export default CustomizationBox;
