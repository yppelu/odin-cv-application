import EditField from '../edit-field/EditField';

import './personal-info-editor.css';

function PersonalInfoEditor() {
  return (
    <div className="personal-info-editor">
      <h2 className="personal-info-editor__title">Personal Details</h2>
      <EditField />
      <EditField />
      <EditField />
      <EditField />
    </div>
  );
}

export default PersonalInfoEditor;
