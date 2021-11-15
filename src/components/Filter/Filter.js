import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.css';
export default function Filter({ value, onChange }) {
  return (
    <div className={s.div}>
      <label htmlFor={uuidv4()} className={s.label}>
        Find contacts by name:
      </label>
      <input type="text" value={value} id={uuidv4()} onChange={onChange} />
    </div>
  );
}
