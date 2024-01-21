import './edit-field.css';

function EditField({ section, fieldName, changePerson }) {
  const labelTitle = turnFieldNameIntoTitle(fieldName);

  return (
    <label className="edit-field">
      {labelTitle}
      <input
        className="edit-field__input"
        type="text"
        value={section[fieldName]}
        onChange={(e) => changePerson(e.target.value, fieldName)}
      />
    </label>
  );
}

export default EditField;

function turnFieldNameIntoTitle(fieldName) {
  let title = fieldName.slice(0, 1).toUpperCase();

  for (let i = 1; i < fieldName.length; i++) {
    if (fieldName[i] === fieldName[i].toUpperCase()) title += ' ';
    title += fieldName[i];
  }

  return title;
}
