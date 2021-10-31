import React from 'react'
import { Input } from 'semantic-ui-react'

class InputField extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <div className="input-field-container">
                <h3 className="input-field-name">{this.props.name}</h3>
                <Input
                    type={this.props.type}
                    onChange={(event) => this.setState({ value: event.target.value })} />
                {/*<button
                    className="submit-input-field-butt"
                    onClick={() => {
                        /*actually send data to server
                    console.log('sent data for component number', props.index, 'to server');
                    }}
                >Submit</button>*/}
            </div>
        );
    }

    getValue() {
        return this.state.value
    }

}


export default InputField;