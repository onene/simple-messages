import React from 'react';
import List from './components/List/List'
import Input from './components/Input/Input'
// import Show from './components/Show/Show'
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: ['Привет, как дела?', 'Сообщение 2', 'Хорошо, а твои?', 'Сообщение 4', 'Мои отлично', 'Сообщение 6'],
      newMesage: '',
      showMessage: ''
    }
  }
  addMessage = (text) => {
    let arr = this.state.messages
    arr.push(text)
    this.setState({ messages: arr })
  }
  deleteMessage = (index) => {
    let updatedMessages = this.state.messages;
    updatedMessages.splice(index, 1);
    console.log(updatedMessages);
    this.setState({ messages: updatedMessages })
  }


  componentDidMount() {
    this.change = setInterval(() => {
      let elem = this.state.messages.splice(0, 1)
      let arr = this.state.messages.slice()
      arr.push(elem)
      this.setState({
        showMessage: elem,
        messages: arr
      })


    }, 3000)
    console.log(this.state);
  }

  render() {

    return (
      <div className="App">
        <div className="show">{this.state.showMessage}</div>
        <List messages={this.state.messages} deleteMessage={this.deleteMessage} />
        <Input addMessage={this.addMessage} />
      </div>
    );
  }


}

export default App;

