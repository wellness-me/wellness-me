import React from 'react'

function InputField(props) {
    return (
        <div className="input-field-container">
            <h3 className="input-field-name">{props.name}</h3>
            <input type={props.type} />
        </div>
    );
}

export default InputField;