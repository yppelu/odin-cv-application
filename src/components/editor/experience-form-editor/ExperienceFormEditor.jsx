import './experience-form-editor.css';

import EditField from '../edit-field/EditField.jsx';

function ExperienceInfoEditor({ person, id, setPerson, setIsAddingNewData }) {
  let indexToChange;
  for (let i = 0; i < person.experience.length; i++) {
    if (person.experience[i].id === id) {
      indexToChange = i;
      break;
    }
  }

  function handleChangeExperience(value, propertyToChange) {
    const newPerson = JSON.parse(JSON.stringify(person));
    newPerson.experience[indexToChange][propertyToChange] = value;
    setPerson(newPerson);
  }

  function handleDeleteItem() {
    const newPerson = JSON.parse(JSON.stringify(person));
    newPerson.experience.splice(indexToChange, 1);
    setPerson(newPerson);
  }

  function handleSaveItem() {
    setIsAddingNewData(false);
  }

  return (
    <form className="experience-form-editor">
      <EditField section={person.experience[indexToChange]} fieldName="companyName" changePerson={handleChangeExperience} />
      <EditField section={person.experience[indexToChange]} fieldName="positionTitle" changePerson={handleChangeExperience} />
      <EditField section={person.experience[indexToChange]} fieldName="location" changePerson={handleChangeExperience} />
      <EditField section={person.experience[indexToChange]} fieldName="description" changePerson={handleChangeExperience} />
      <EditField section={person.experience[indexToChange]} fieldName="startDate" changePerson={handleChangeExperience} />
      <EditField section={person.experience[indexToChange]} fieldName="endDate" changePerson={handleChangeExperience} />
      <div className="experience-form-editor__control-buttons">
        <button
          className="experience-form-editor__delete-button"
          type="button"
          onClick={() => {
            setIsAddingNewData(false);
            handleDeleteItem();
          }
          }>
          <svg
            className="experience-form-editor__delete-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--red-clr)"
          >
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
          Delete
        </button>
        <button
          className="experience-form-editor__save-button"
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

export default ExperienceInfoEditor;
