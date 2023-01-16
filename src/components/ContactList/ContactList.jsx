import React from 'react';

import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filters);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();
  return (
    <ul className={css.contacts}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contact__list} key={id}>
          <span className={css.contact__item}>{name}: </span>
          <span className="contact__item">{number} </span>
          <button
            className={css.contacts__button}
            type="button"
            onClick={() => {
              const action = deleteContact(id);
              dispatch(action);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
