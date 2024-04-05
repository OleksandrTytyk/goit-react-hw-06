import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  const nameFilterSelector = useSelector((state) => state.filter.name);
  const filtredContactList = selectContacts.filter((contact) => {
    if (nameFilterSelector) {
      return contact.name
        .toLowerCase()
        .trim()
        .includes(nameFilterSelector.toLowerCase().trim());
    } else {
      return contact;
    }
  });

  return (
    <div className={css.contactListContainer}>
      {filtredContactList.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
