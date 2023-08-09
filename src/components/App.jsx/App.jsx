import ContactForm from '../ContactForm.jsx/ContactForm';
import ContactList from '../ContactList.jsx/ContactList';
import FilterContact from '../FilterContact.jsx/FilterContact';
import css from './app.module.css';

export const App = () => {
  return (
    <div>
      <div className={css.formContainer}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.contactContainer}>
        <h2>Contacts</h2>
        <FilterContact />
        <ContactList />
      </div>
    </div>
  );
};
