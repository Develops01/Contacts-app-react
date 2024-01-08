import { useState } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const editContact = (index, updatedContact) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = updatedContact;
    setContacts(updatedContacts);
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <img
        className="absolute h-48 top-2 left-2 rounded-xl"
        src="./imgContact.jpg"
        alt=""
      />
      <ContactForm
        onAddContact={addContact}
        onEditContact={editContact}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
      <ContactList
        contacts={contacts}
        onEdit={(index) => {
          setEditIndex(index);
        }}
        onDelete={deleteContact}
      />
    </div>
  );
};
export default ContactApp;
