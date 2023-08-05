import { Component } from 'react';
import React from 'react';
import shortid from 'shortid';
import { Title, Container } from './components/App/App.styled';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contact/Contact';
import initialContacts from './contactes.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    let isAdded = false;
    this.state.contacts.forEach(el => {
      if (el.name.toLowerCase() === normalizedName) {
        alert(`${name}: is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  chengeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
    if (this.state.contacts !== prevState.contacts) {
      console.log('оновилось');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  render() {
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} />

        <Title>Contacts</Title>

        <Filter value={filter} onChange={this.chengeFilter}></Filter>

        <Contacts
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
export default App;
