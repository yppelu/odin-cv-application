import './resume.css';

import PersonalInfo from './personal-info/PersonalInfo.jsx';
import AdditionalInfo from './additional-info/AdditionalInfo.jsx';

function Resume({ person }) {
  return (
    <div className="resume">
      <PersonalInfo person={person} />
      <AdditionalInfo person={person} />
    </div>
  );
}

export default Resume;
