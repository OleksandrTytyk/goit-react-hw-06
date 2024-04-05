import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={css.contactListContainer}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
