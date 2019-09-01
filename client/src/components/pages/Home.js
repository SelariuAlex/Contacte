import React from 'react';
import Contats from '../contacts/Contacts';
import ContatForm from '../contacts/ContactForm';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContatForm />
      </div>
      <div>
        <Contats />
      </div>
    </div>
  );
};

export default Home;
