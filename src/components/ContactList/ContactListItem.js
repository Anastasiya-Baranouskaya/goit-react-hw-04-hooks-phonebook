import s from './ContactList.module.css';
export default function ContactListItem({ name, number, id, onDeleteContact }) {
  return (
    <li className={s.listItem}>
      <span className={s.span}>{name}:</span>
      <span className={s.span}>{number}:</span>
      <button
        className={s.button}
        type="button"
        id={id}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}
