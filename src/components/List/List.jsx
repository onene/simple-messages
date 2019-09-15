import React from 'react';
import MessageItem from './MessageItem'
import classes from './Item.module.css';

class List extends React.Component {



    render() {
        let messages = this.props.messages.map((message, index) => {
            return <li key={index}><MessageItem index={index} deleteMessage={this.props.deleteMessage} /><p className={classes.text}>{message}</p></li>
        })

        return (
            <div className={classes.list}>
                <ul>
                    {messages}
                </ul>

            </div>
        );
    }


}

export default List;

