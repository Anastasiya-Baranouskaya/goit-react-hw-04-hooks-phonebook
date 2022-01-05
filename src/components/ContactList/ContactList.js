import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ list, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {list.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
