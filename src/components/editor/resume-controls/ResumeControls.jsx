import exampleData from '../../../helpers/example-data.js';
import emptyData from '../../../helpers/empty-data.js';

import './resume-controls.css';

function ResumeControls({ setIsAddingNewData, setPerson }) {
  return (
    <div className="resume-controls">
      <button
        className="resume-controls__clear-button"
        type="button"
        onClick={() => {
          setIsAddingNewData({ isAddingToEducation: false, isAddingToExperience: false });
          setPerson(JSON.parse(JSON.stringify(emptyData)));
        }
        }
      >
        <svg
          className="resume-controls__clear-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="var(--red-clr)"
        >
          <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
        Clear Resume
      </button>
      <button
        className="resume-controls__load-example-button"
        type="button"
        onClick={() => {
          setIsAddingNewData({ isAddingToEducation: false, isAddingToExperience: false });
          setPerson(JSON.parse(JSON.stringify(exampleData)));
        }
        }
      >
        Load Example
      </button>
    </div>
  );
}

export default ResumeControls;
