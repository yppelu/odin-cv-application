import './personal-info.css';

import Contact from './__contact/Contact.jsx';

function PersonalInfo({ person }) {
  return (
    <div className="personal-info">
      <h1 className="personal-info__name">
        {person.personalInfo.fullName}
      </h1>
      <div className="personal-info__contacts">
        <Contact iconName="email" data={person.personalInfo.email} />
        <Contact iconName="phoneNumber" data={person.personalInfo.phoneNumber} />
        <Contact iconName="address" data={person.personalInfo.address} />
      </div>
    </div>
  );
}

export default PersonalInfo;
