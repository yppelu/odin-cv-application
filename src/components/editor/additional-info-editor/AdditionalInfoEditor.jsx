import './additional-info-editor.css';

import ItemPreview from './__item-preview/ItemPreview.jsx';

const icons = {
  education: <svg className="additional-info-editor__header-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--black-clr)"><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg>,
  experience: <svg className="additional-info-editor__header-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--black-clr)"><path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" /></svg>
};

const collapseIcons = {
  open: <svg className="additional-info-editor__collapse-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" /></svg>,
  close: <svg className="additional-info-editor__collapse-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M17,14L12,9L7,14H17Z" /></svg>
};

function AdditionalInfoEditor() {
  return (
    <div className="additional-info-editor">
      <div className="additional-info-editor__header">
        <h2 className="additional-info-editor__title">
          {icons.education}
          Education
        </h2>
        <button
          className="additional-info-editor__collapse-button"
          type="button"
        >
          {collapseIcons.open}
        </button>
      </div>
      <ItemPreview />
      <ItemPreview />
      <ItemPreview />
      <button className="additional-info-editor__add-info-button" type="button">
        + Education
      </button>
    </div>
  );
}

export default AdditionalInfoEditor;
