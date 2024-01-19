import './additional-info.css';
import InfoSection from './info-section/InfoSection';

function AdditionalInfo({ person }) {
  return (
    <div className="additional-info">
      <InfoSection person={person} section="education" />
      <InfoSection person={person} section="experience" />
    </div>
  );
}

export default AdditionalInfo;
