import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contact.context';
import contactReducer from './contact.reducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Marina',
        email: 'Marina@yahoo.com',
        phone: '1111-111-111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Adriana',
        email: 'Adriana@yahoo.com',
        phone: '1111-111-121',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Flavius',
        email: 'Flavius@yahoo.com',
        phone: '1221-111-111',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
