import React from 'react';
import classes from './Item.module.css';



class MessageItem extends React.Component {

    deleteMessage() {
        this.props.deleteMessage(this.props.index)
    }

    render() {


        return (


            <button onClick={() => { this.deleteMessage() }} className={classes.button}>delete</button>


        );
    }


}

export default MessageItem;

