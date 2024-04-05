import { useEffect, useState } from "react";
import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const contactsList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("savedContacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return contactsList;
  });
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevState) => [...prevState, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const filtredContactList = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  });

  return (
    <>
      <div className={css.container}>
        <h1 className={css.headerText}>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList
          contacts={filtredContactList}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
