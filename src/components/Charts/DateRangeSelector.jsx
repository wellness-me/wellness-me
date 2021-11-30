import moment from 'moment';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DateRangeSelector = (props) => {

    const [fromDateIndex, setFromDateIndex] = useState(0)
    const [toDateIndex, setToDateIndex] = useState(-1)

    const sendUpRangeUpdate = (whichDropdown, eventKey) => {
        let newRange = props.currentDateRange
        if (whichDropdown === 'from') {
            newRange[0] = parseInt(eventKey);
            setFromDateIndex(parseInt(eventKey))
        }
        else {
            newRange[1] = parseInt(eventKey);
            setToDateIndex(parseInt(eventKey))
        }
        props.updateDateRange(newRange)
    }


    //compute from tags: 
    let fromTags = []
    let dateString = "Loading..."

    if (props.data) {
        fromTags = props.data.map((val, idx) => {
            let dateStr = new Date(val.createdAt).toString()
            dateStr = dateStr.substr(0, dateStr.indexOf(' GMT'))

            if (idx === 0) {
                dateString = "from "
                dateString += moment(props.data[fromDateIndex].createdAt).format('MMM D, YYYY')
                dateString += " to "
                if (toDateIndex === -1) {
                    dateString += moment(props.data[props.data.length - 1].createdAt).format('MMM D, YYYY')
                } else {
                    dateString += moment(props.data[toDateIndex].createdAt).format('MMM D, YYYY')
                }
            }

            return <Dropdown.Item key={idx} eventKey={idx} >{dateStr}</Dropdown.Item>

        })

    }




    return (
        <div className="date-range" style={{ display: "flex" }}>
            <Dropdown style={{ margin: "10px" }} onSelect={(e) => { sendUpRangeUpdate('from', e) }}>
                <Dropdown.Toggle size="sm" className="btn-custom" id="dropdown-basic">
                    Display from:
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {fromTags}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ margin: "10px" }} onSelect={(e) => { sendUpRangeUpdate('to', e) }}>
                <Dropdown.Toggle size="sm" className="btn-custom" id="dropdown-basic">
                    Display until:
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    {fromTags.filter((val, idx) => { return fromDateIndex < idx })}
                </Dropdown.Menu>
            </Dropdown>
            <p style={{ margin: "10px" }}>{dateString}</p>
        </div>
    )
}
export default DateRangeSelector;