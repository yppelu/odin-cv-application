import './editor.css';

import ResumeControls from './resume-controls/ResumeControls.jsx';
import PersonalInfoEditor from './personal-info-editor/PersonalInfoEditor.jsx';
import AdditionalInfoEditor from './additional-info-editor/AdditionalInfoEditor.jsx';

function Editor({ setPerson }) {
  return (
    <div className="editor">
      <ResumeControls setPerson={setPerson} />
      <PersonalInfoEditor />
      <AdditionalInfoEditor />
      <AdditionalInfoEditor />
    </div>
  );
}

export default Editor;
