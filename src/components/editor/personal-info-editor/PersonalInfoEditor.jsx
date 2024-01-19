import './personal-info-editor.css';

import EditField from '../edit-field/EditField.jsx';

function PersonalInfoEditor({ person, changePerson }) {
  function handlePersonalInfoChange(event, propertyToChange) {
    const newPerson = JSON.parse(JSON.stringify(person));
    newPerson.personalInfo[propertyToChange] = event.target.value;
    changePerson(newPerson);
  }

  return (
    <div className="personal-info-editor">
      <h2 className="personal-info-editor__title">Personal Details</h2>
      <EditField
        changePerson={handlePersonalInfoChange}
        propertyToChange="fullName"
        value={person.personalInfo.fullName}
        label="Full Name"
      />
      <EditField
        changePerson={handlePersonalInfoChange}
        propertyToChange="email"
        value={person.personalInfo.email}
        label="Email"
      />
      <EditField
        changePerson={handlePersonalInfoChange}
        propertyToChange="phoneNumber"
        value={person.personalInfo.phoneNumber}
        label="Phone Number"
      />
      <EditField
        changePerson={handlePersonalInfoChange}
        propertyToChange="address"
        value={person.personalInfo.address}
        label="Address"
      />
    </div>
  );
}

export default PersonalInfoEditor;
