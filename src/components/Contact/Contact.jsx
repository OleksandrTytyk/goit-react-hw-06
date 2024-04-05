import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";

const Contact = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <div className={css.contactItem}>
          <FaUser />
          <p>{name}</p>
        </div>

        <div className={css.contactItem}>
          <FcPhoneAndroid />
          <p>{number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
