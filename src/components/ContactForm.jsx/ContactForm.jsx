import { useState } from 'react';
import css from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-slice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getFilteredContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(`User with name ${name} is alredy in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.nameLabel} htmlFor={'name'}>
          Name
        </label>
        <input
          className={css.input}
          id={'name'}
          type="text"
          name="name"
          pattern="[A-Z][a-z]+(([\`\s][A-Z][a-z]+)?){5}"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <label className={css.numberLabel} htmlFor={'number'}>
          Number
        </label>
        <input
          className={css.input}
          id={'number'}
          type="tel"
          name="number"
          pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
        <button className={css.btn}>Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
