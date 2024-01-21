import './education-form-editor.css';

import EditField from '../edit-field/EditField.jsx';

function EducationFormEditor({ person, id, setPerson, setIsAddingNewData }) {
  let indexToChange;
  for (let i = 0; i < person.education.length; i++) {
    if (person.education[i].id === id) {
      indexToChange = i;
      break;
    }
  }

  function handleChangeEducation(value, propertyToChange) {
    const newPerson = JSON.parse(JSON.stringify(person));
    newPerson.education[indexToChange][propertyToChange] = value;
    setPerson(newPerson);
  }

  function handleDeleteItem() {
    const newPerson = JSON.parse(JSON.stringify(person));
    newPerson.education.splice(indexToChange, 1);
    setPerson(newPerson);
  }

  function handleSaveItem() {
    setIsAddingNewData(false);
  }

  return (
    <form className="education-form-editor">
      <EditField section={person.education[indexToChange]} fieldName="schoolName" changePerson={handleChangeEducation} />
      <EditField section={person.education[indexToChange]} fieldName="degree" changePerson={handleChangeEducation} />
      <EditField section={person.education[indexToChange]} fieldName="location" changePerson={handleChangeEducation} />
      <EditField section={person.education[indexToChange]} fieldName="startDate" changePerson={handleChangeEducation} />
      <EditField section={person.education[indexToChange]} fieldName="endDate" changePerson={handleChangeEducation} />
      <div className="education-form-editor__control-buttons">
        <button
          className="education-form-editor__delete-button"
          type="button"
          onClick={() => {
            setIsAddingNewData(false);
            handleDeleteItem();
          }
          }>
          <svg
            className="education-form-editor__delete-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--red-clr)"
          >
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
          Delete
        </button>
        <button
          className="education-form-editor__save-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSaveItem();
          }
          }
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EducationFormEditor;
