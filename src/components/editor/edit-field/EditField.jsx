import './edit-field.css';

function EditField() {
  return (
    <label className="edit-field">
      Full Name
      <input className="edit-field__input" type="text" value="Josephine Meyers" />
    </label>
  );
}

export default EditField;
