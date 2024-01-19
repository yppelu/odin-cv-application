import './editor.css';

import ResumeControls from './resume-controls/ResumeControls.jsx';
import PersonalInfoEditor from './personal-info-editor/PersonalInfoEditor.jsx';
import AdditionalInfoEditor from './additional-info-editor/AdditionalInfoEditor.jsx';

function Editor({ person, changePerson }) {
  return (
    <div className="editor">
      <ResumeControls person={person} changePerson={changePerson} />
      <PersonalInfoEditor person={person} changePerson={changePerson} />
      <AdditionalInfoEditor person={person} changePerson={changePerson} iconName="education" title="Education" />
      <AdditionalInfoEditor person={person} changePerson={changePerson} iconName="experience" title="Experience" />
    </div>
  );
}

export default Editor;
