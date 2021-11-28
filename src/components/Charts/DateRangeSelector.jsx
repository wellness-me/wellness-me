import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DateRangeSelector = (props) => {
    return (
        <div className="date-range" style={{display: "flex"}}>
                        <Dropdown style={{margin: "10px"}}>
                            <Dropdown.Toggle size="sm" className="btn-custom" id="dropdown-basic">
                                Display from:
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>A earlier date</Dropdown.Item>
                                <Dropdown.Item>Another date</Dropdown.Item>
                                <Dropdown.Item>A later date</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown style={{margin: "10px"}}>
                            <Dropdown.Toggle size="sm" className="btn-custom" id="dropdown-basic">
                                Display until:
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>A earlier date</Dropdown.Item>
                                <Dropdown.Item>Another date</Dropdown.Item>
                                <Dropdown.Item >A later date</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p style={{margin: "10px"}}>MM/DD/YY to MM/DD/YY</p>
                    </div>
    )
}
export default DateRangeSelector;