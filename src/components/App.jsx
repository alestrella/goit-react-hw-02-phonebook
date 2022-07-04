import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Box from './Box';
import { Heading, MainHeading } from './Headings/Headings.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = contact => {
    this.addContact(contact);
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      // { contacts } - destructurization of prevState
      return { contacts: [...contacts, newContact] };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== id) };
    });
  };

  checkDuplicateContactName = name => {
    const { contacts } = this.state;
    const allNames = contacts.map(contact => contact.name);

    if (allNames.includes(name)) {
      alert(`${name} is already in contacts.`);
      return true;
    }
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <Box height="100vh" pt={4} fontFamily="body" as="main">
        <MainHeading>Phonebook</MainHeading>
        <Box
          maxWidth="600px"
          my={0}
          mx="auto"
          px={4}
          minHeight="400px"
          borderRadius="middle"
        >
          <Box
            px={4}
            py={4}
            mb={4}
            boxShadow="card"
            borderRadius="normal"
            bg="white"
          >
            <Heading>Add new contact</Heading>
            <ContactForm
              onSubmit={this.handleFormSubmit}
              checkDuplicates={this.checkDuplicateContactName}
            />
          </Box>

          <Box px={5} py={4} borderRadius="normal" bg="white">
            <Heading>Contacts</Heading>
            <Filter value={filter} onChange={this.handleFilter} />
            <ContactList
              values={filteredContacts}
              handleDelete={this.deleteContact}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}
