import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from '../components/App.module.css';

export default function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.phonebook__form}>
      <ToastContainer position="top-center" />
      <h1>Phonebook</h1>
      <ContactForm />

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
