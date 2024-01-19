import { v4 as uuidv4 } from 'uuid';

import './edit-education-form.css';

import EditField from '../../edit-field/EditField.jsx';

function EditEducationForm({ id, setEducation, person }) {
  let dataToChangeIndex = 0;
  if (id !== null) {
    for (let i = 0; i < person.education.length; i++) {
      if (person.education.id === id) {
        dataToChangeIndex = i;
        break;
      }
    }
  }

  function changeEducation(e, propertyToChange) {
    let newData;
    if (id === null) {
      newData = {
        degree: '',
        schoolName: '',
        location: '',
        startDate: '',
        endDate: '',
        id: uuidv4(),
      };
    } else {
      newData = JSON.parse(JSON.stringify(person.education[dataToChangeIndex]));
    }
    const id = newData.id;
    newData[propertyToChange] = e.target.value;
    newData.id = id;
    setEducation(id, newData);
  }

  return (
    <form className="edit-education-for">
      <EditField changePerson={changeEducation} propertyToChange="schoolName" value={person.education[dataToChangeIndex].schoolName} label="School" />
    </form>
  );
}

export default EditEducationForm;
