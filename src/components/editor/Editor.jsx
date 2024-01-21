import './editor.css';

import ResumeControls from './resume-controls/ResumeControls.jsx';
import PersonalInfoEditor from './personal-info-editor/PersonalInfoEditor.jsx';
import AdditionalInfoEditor from './additional-info-editor/AdditionalInfoEditor.jsx';

function Editor({ person, setPerson }) {
  return (
    <div className="editor">
      <ResumeControls setPerson={setPerson} />
      <PersonalInfoEditor person={person} setPerson={setPerson} />
      <AdditionalInfoEditor person={person} setPerson={setPerson} section="education" />
      <AdditionalInfoEditor person={person} setPerson={setPerson} section="experience" />
    </div>
  );
}

export default Editor;
