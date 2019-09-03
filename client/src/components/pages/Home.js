import React from 'react';
import Contats from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContatFilter from '../contacts/ContactFilter';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContatFilter />
        <Contats />
      </div>
    </div>
  );
};

export default Home;
