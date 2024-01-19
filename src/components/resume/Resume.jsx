import './resume.css';

import PersonalInfo from './personal-info/PersonalInfo.jsx';
import AdditionalInfo from './additional-info/AdditionalInfo.jsx';

function Resume({ personalInfo, education, experience }) {
  return (
    <div className="resume">
      <PersonalInfo info={personalInfo} />
      <AdditionalInfo info={{ education, experience }} />
    </div>
  );
}

export default Resume;
