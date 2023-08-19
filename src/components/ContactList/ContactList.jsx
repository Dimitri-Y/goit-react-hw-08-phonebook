import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={css['group']}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css['list']}>
          <p className={css['p']}>
            {contact.name} : {contact.number}
          </p>
          <button
            className={css['button']}
            id={contact.id}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
