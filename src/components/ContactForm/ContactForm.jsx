
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactThunk
} from 'redux/contacts/contactsOperations';
import {
  selectUserContacts,
} from 'redux/contacts/selectorContacts';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
const ContactForm = () => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');



  const handleSumbmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;
    if (contacts.some(contact => contact.name === name)){
        return alert('Contact with this name is already created');
    }else{
        dispatch(addContactThunk({ name, number }));
        setContactName('')
        setContactNumber('')
    }
  };

    return (
    <form onSubmit={handleSumbmit}>
      <label>
        <TextField
             type="text"
              margin="normal"
              required minLength={3}
              id="name"
              label="Name"
              name="contactName"
              fullWidth
              autoFocus
              onChange={event => setContactName(event.target.value)} value={contactName}
            />
      </label>
      <br />
      <label>
        <TextField
              type="text"
              margin="normal"
              required
              id="number"
              label="Number"
              name="contactNumber"
              fullWidth
              autoFocus
              onChange={event => setContactName(event.target.value)} value={contactNumber}
            />
        {/* <input onChange={event => setContactNumber(event.target.value)} value={contactNumber} name="contactNumber" type="text" required /> */}
      </label>
      <br />
      <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Contact
        </Button>
    </form>
  );
};
export default ContactForm;