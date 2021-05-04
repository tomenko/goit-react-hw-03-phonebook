import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate(prevProps, prevState ) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
  };

  formSubmitHandler = ({name, number}) => {
    const { contacts } = this.state;
    const entry = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} already in the contacts.`);
      return;
    }

    this.setState(prevState => ({
      ...prevState,
      contacts: [entry, ...prevState.contacts],
    }));
  };

  hendleInputFilter = (event) => {
    const {value, name} = event.currentTarget;
    this.setState({[name]: value})
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  getCurrentContacts = () => {
    const { filter, contacts } = this.state;
    const regExp = new RegExp(filter, 'gi');

    if (filter) {
      return contacts.filter(contact => regExp.test(contact.name));
    }
    return contacts;
  };

  render() {
    const onSubmitForm = this.formSubmitHandler;
    const id = shortid.generate;
    const hendleInputFilter = this.hendleInputFilter;
    const contacts = this.getCurrentContacts;
    const onDeleteContact = this.deleteContact;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmitForm={onSubmitForm}
        />
        <h2>Contacts</h2>
        <Filter
          id={id()}
          hendleInputFilter={hendleInputFilter}
        />
        <ContactList
          contacts={contacts()}
          onDeleteContact={onDeleteContact}
        />
      </>
    )
  }
}

export default App;
