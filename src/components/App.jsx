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

  chengeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
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

          <Filter value={filter} onChange={this.chengeFilter}></Filter>

          <Contacts
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          ></Contacts>
        </div>
      </div>
    );
  }
}
export default App;
