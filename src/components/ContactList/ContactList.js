import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';
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
