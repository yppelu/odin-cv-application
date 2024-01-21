import EditField from '../edit-field/EditField';

import './personal-info-editor.css';

function PersonalInfoEditor({ person }) {
  return (
    <div className="personal-info-editor">
      <h2 className="personal-info-editor__title">Personal Details</h2>
      <EditField section={person.personalInfo} fieldName="fullName" />
      <EditField section={person.personalInfo} fieldName="email" />
      <EditField section={person.personalInfo} fieldName="phoneNumber" />
      <EditField section={person.personalInfo} fieldName="address" />
    </div>
  );
}

export default PersonalInfoEditor;
