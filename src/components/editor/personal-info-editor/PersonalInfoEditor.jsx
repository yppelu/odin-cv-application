import EditField from '../edit-field/EditField';

import './personal-info-editor.css';

function PersonalInfoEditor({ person, setPerson }) {
  function handlePersonalInfoChange(value, propertyToChange) {
    const newPerson = JSON.parse(JSON.stringify(person));
    newPerson.personalInfo[propertyToChange] = value;
    setPerson(newPerson);
  }

  return (
    <div className="personal-info-editor">
      <h2 className="personal-info-editor__title">Personal Details</h2>
      <EditField section={person.personalInfo} fieldName="fullName" changePerson={handlePersonalInfoChange} />
      <EditField section={person.personalInfo} fieldName="email" changePerson={handlePersonalInfoChange} />
      <EditField section={person.personalInfo} fieldName="phoneNumber" changePerson={handlePersonalInfoChange} />
      <EditField section={person.personalInfo} fieldName="address" changePerson={handlePersonalInfoChange} />
    </div>
  );
}

export default PersonalInfoEditor;
