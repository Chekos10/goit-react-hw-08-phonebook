import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import css from '../ContactsList/contactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contactsOperations';
import { selectUserContacts } from 'redux/contacts/selectorContacts';
import { selectFilter } from 'redux/filter/filterSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectUserContacts);

  const filterContacts = () => {
    if (!contacts) return [];
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = filterContacts();
  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  return (
    
      <ul className={css.contacList}>
        {filteredContacts.map(contact => {
          return (
            <li className={css.listItem} key={contact.id}>
              <div className={css.contactInfo}>
                <h3 className={css.listName}>Name: {contact.name}</h3>
                <p className={css.listNumber}>Number: {contact.number}</p>
              </div>
              <Button onClick={()=>handleDeleteContact(contact.id)} type='button' variant="outlined" startIcon={<DeleteIcon/>}>
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    
  );
};
export default ContactList;
