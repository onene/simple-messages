import React from 'react';
import classes from './Input.module.css'

class Input extends React.Component {
    constructor(props) {
        super()
        this.state = {
            inputText: ''
        }
    }
    handleInput = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }
    addMessage = () => {
        if (this.state.inputText !== '') {
            this.props.addMessage(this.state.inputText)

        }
        this.setState({
            inputText: ''
        })
        document.getElementById('inp').value = ''
    }
    render() {

        return (
            <div className={classes.input}>
                <input type="text" onChange={this.handleInput} id="inp" placeholder="Enter your message" />
                <button onClick={this.addMessage} className={classes.button}>Add task</button>
            </div>
        );
    }


}

export default Input;

