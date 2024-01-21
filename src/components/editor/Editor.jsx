import './editor.css';

import ResumeControls from './resume-controls/ResumeControls.jsx';
import PersonalInfoEditor from './personal-info-editor/PersonalInfoEditor.jsx';
import AdditionalInfoEditor from './additional-info-editor/AdditionalInfoEditor.jsx';

function Editor({ person, setPerson }) {
  return (
    <div className="editor">
      <ResumeControls setPerson={setPerson} />
      <PersonalInfoEditor person={person} />
      <AdditionalInfoEditor person={person} section="education" />
      <AdditionalInfoEditor person={person} section="experience" />
    </div>
  );
}

export default Editor;
