import './additional-info.css';
import InfoSection from './info-section/InfoSection';

function AdditionalInfo({ info }) {
  return (
    <div className="additional-info">
      <InfoSection title="Education" data={info.education} />
      <InfoSection title="Professional Experience" data={info.experience} />
    </div>
  );
}

export default AdditionalInfo;
