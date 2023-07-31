import { Component } from 'react';
import React from 'react';
import Form from './Form/Form.styled';
class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitHendler = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitHendler} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li> Rosie Simpson </li>
            <li> Hermione Kline</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
