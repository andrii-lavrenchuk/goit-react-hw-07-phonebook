import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import Title from './Components/Title/Title';
import Container from './Components/Container/Container';
import contactsOperations from './redux/contacts/contacts-operations';

export default function App() {
  const dispatch = useDispatch();
  const fetchContacts = () => dispatch(contactsOperations.fetchContacts());

  useEffect(() => {
    fetchContacts();
  });

  return (
    <Container>
      <ToastContainer autoClose={3000} />
      <Title title="Phonebook" />
      <Form />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </Container>
  );
}
