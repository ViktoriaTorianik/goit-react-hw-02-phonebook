import { Component } from 'react';
import React from 'react';
import shortid from 'shortid';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contacts from './Contact/Contact';
import initialContacts from './contactes.json';
class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = data => {
    const contact = {
      id: shortid.generate(),
      name: '',
      number: '',
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(data);
  };
  formSubmitHendler = data => {
    console.log(data);
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <Form
            onSubmit={this.formSubmitHendler}
            addContact={this.addContact}
          />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter></Filter>
          <Contacts
            contacts={contacts}
            onDeleteContact={this.deleteContact}
          ></Contacts>
        </div>
      </div>
    );
  }
}
export default App;
