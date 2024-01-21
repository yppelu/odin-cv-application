import { useState } from 'react';

import './editor.css';

import ResumeControls from './resume-controls/ResumeControls.jsx';
import PersonalInfoEditor from './personal-info-editor/PersonalInfoEditor.jsx';
import AdditionalInfoEditor from './additional-info-editor/AdditionalInfoEditor.jsx';

function Editor({ person, setPerson }) {
  const [{ isAddingToEducation, isAddingToExperience }, setIsAddingNewData] = useState({ isAddingToEducation: false, isAddingToExperience: false });
  const handleChangeIsAddingToEducation = (bool) => setIsAddingNewData({ isAddingToEducation: bool, isAddingToExperience: isAddingToExperience });
  const handleChangeIsAddingToExperience = (bool) => setIsAddingNewData({ isAddingToEducation: isAddingToEducation, isAddingToExperience: bool });

  return (
    <div className="editor">
      <ResumeControls setIsAddingNewData={setIsAddingNewData} setPerson={setPerson} />
      <PersonalInfoEditor person={person} setPerson={setPerson} />
      <AdditionalInfoEditor isAddingNewData={isAddingToEducation} setIsAddingNewData={handleChangeIsAddingToEducation} person={person} setPerson={setPerson} section="education" />
      <AdditionalInfoEditor isAddingNewData={isAddingToExperience} setIsAddingNewData={handleChangeIsAddingToExperience} person={person} setPerson={setPerson} section="experience" />
    </div>
  );
}

export default Editor;
