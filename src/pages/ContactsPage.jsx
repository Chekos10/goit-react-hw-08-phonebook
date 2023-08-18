import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm'
import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authen/selectors';
import {  requestContactsThunk } from 'redux/contacts/contactsOperations';
import { selectContactsError } from 'redux/contacts/selectorContacts';
import ContactList from 'components/ContactsList/ContactsList';

const ContactsPage = () => {

  const authentificated = useSelector(selectAuthentificated);
  const isLoading = useSelector(selectContactsError)
  const error = useSelector(selectContactsError)
  const dispatch = useDispatch()


  useEffect(()=>{
    if(!authentificated) return;

    dispatch(requestContactsThunk())
  },[authentificated,dispatch])

  


 /*  const showContacts = Array.isArray(contacts) && contacts.length >0 */
  return (
    <section>
    <ContactForm/>
    <Filter/>
    <div>
      {!isLoading && <Loader/>}
      {!error && <p>Ooops, something going wrong {error}</p>}
      <ContactList/>
    </div>
    </section>
  )
}

export default ContactsPage;
