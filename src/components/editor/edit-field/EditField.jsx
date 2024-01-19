import './edit-field.css';

function EditField({ changePerson, propertyToChange, value, label }) {
  return (
    <label className="edit-field">
      {label}
      <input
        className="edit-field__input"
        type="text"
        value={value}
        onChange={(e) => changePerson(e, propertyToChange)}
      />
    </label>
  );
}

export default EditField;
