import './info-section.css';

function InfoSection({ person, section }) {
  const sectionTitle = section.slice(0, 1).toUpperCase() + section.slice(1);
  const sectionArray = person[section];

  if (sectionArray.length) {
    return (
      <div className="info-section">
        <h2 className="info-section__title">{sectionTitle}</h2>
        {sectionArray.map(item =>
          <div key={item.id} className="info-section__item">
            <div className="info-section__item-date-place">
              <p>{item.startDate} — {item.endDate}</p>
              <p>{item.location}</p>
            </div>
            <div className="info-section__item-body">
              <h3 className="info-section__item-title">
                {item.schoolName || item.companyName}
              </h3>
              {
                item.positionTitle
                  ? <p className="info-section__item-job-position">{item.positionTitle}</p>
                  : null
              }
              <p className="info-section__item-description">
                {item.degree || item.description}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default InfoSection;
