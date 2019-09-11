import React, { useContext, useEffect } from 'react';
import Contats from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContatFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/auth.context';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
