import './edit-field.css';


const placeholders = {
  fullName: 'First and last name',
  email: 'Enter email',
  phoneNumber: 'Enter phone number',
  address: 'City, country',
  schoolName: 'Enter school / university',
  degree: 'Enter degree / field of study',
  startDate: 'Enter start date',
  endDate: 'Enter end date',
  location: 'Enter location',
  companyName: 'Enter company name',
  positionTitle: 'Enter position title',
  description: 'Enter description'
};

function EditField({ section, fieldName, changePerson }) {
  const labelTitle = turnFieldNameIntoTitle(fieldName);

  return (
    <label className="edit-field">
      {labelTitle}
      <input
        className="edit-field__input"
        type="text"
        placeholder={placeholders[fieldName]}
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
