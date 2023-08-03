import { ContactList, ContactTitle, Button, Paragraf } from './Contact.styled';
const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => (
        <ContactTitle key={id}>
          <Paragraf>{name}</Paragraf>
          <Paragraf>{number}</Paragraf>
          <Button onClick={() => onDeleteContact(id)}>delete</Button>
        </ContactTitle>
      ))}
    </ContactList>
  );
};
export default Contacts;
