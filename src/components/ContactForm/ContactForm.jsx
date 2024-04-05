import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const initialValues = {
  name: "",
  number: "",
};

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Contact name is required!"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Number is required!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameInputId = nanoid();
  const numberInpurId = nanoid();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameInputId}>
          <span className={css.labelText}>Name</span>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Oleksandr Somebody"
          />
          <span className={css.errorMsg}>
            <ErrorMessage name="name" as="span" />
          </span>
        </label>

        <label className={css.label} htmlFor={numberInpurId}>
          <span className={css.labelText}>Number</span>
          <Field
            className={css.field}
            type="text"
            name="number"
            placeholder="777-55-66"
            pattern="[0-9]*"
            title="Only digits are allowed"
          />
          <span className={css.errorMsg}>
            <ErrorMessage name="number" as="span" />
          </span>
        </label>

        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
