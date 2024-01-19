import './personal-info.css';

import Contact from './__contact/Contact.jsx';

function PersonalInfo({ info }) {
  return (
    <div className="personal-info">
      <h1 className="personal-info__name">{info.fullName}</h1>
      <div className="personal-info__contacts">
        <Contact data={info.email} icon="email" />
        <Contact data={info.phoneNumber} icon="phone" />
        <Contact data={info.address} icon="address" />
      </div>
    </div>
  );
}

export default PersonalInfo;
