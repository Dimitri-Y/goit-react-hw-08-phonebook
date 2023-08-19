import  ContactForm  from 'components/ContactForm/ContactForm';
import  Filter  from 'components/Filter/Filter';
import  ContactList  from "../components/ContactList/ContactList";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { useAuth } from 'hooks/useAuth';
import { Container } from './Pages.styled';

export default function Contacts() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length !== 0 && isLoggedIn && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
}