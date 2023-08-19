import  ContactForm  from './ContactForm/ContactForm';
import  Filter  from './Filter/Filter';
import  ContactList  from './ContactList/ContactList';
import  {useSelector,useDispatch}  from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

const App = () =>
{
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <div
        style={{
          height: '100vh',
          fontSize: 20,
          color: '#010101',
          padding:'16px',
        }}
      >
       <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length !== 0 && <h2>Contacts</h2>}
      {contacts.length !== 0 && <Filter />}
      {contacts.length !== 0 && <ContactList />}
      </div>
    );
}

export default App;
