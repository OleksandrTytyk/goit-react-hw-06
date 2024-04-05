import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
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
          handleDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
