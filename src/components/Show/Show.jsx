import React from 'react';
import classes from './Show.module.css';


class Show extends React.Component {
    constructor(props) {
        super()
        this.state = {
            showMessage: ''
        }
    }




    render() {


        return (
            <div className={classes.show}>

                {this.state.showMessage}
            </div>
        );
    }


}

export default Show;

