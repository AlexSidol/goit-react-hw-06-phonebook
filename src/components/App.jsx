import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from '../components/App.module.css';

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);

  const addContact = ({ name }) => {
    const isInContacts = contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInContacts) {
      toast.info(`${name} is already in contacts.`);
      return;
    }
  };

  return (
    <div className={css.phonebook__form}>
      <ToastContainer position="top-center" />
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <div>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <p>Please, add contact ☝️</p>
      )}
    </div>
  );
}

// contacts: [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
