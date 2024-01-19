import './additional-info-editor__item-preview.css';

function ItemPreview({ id, topic, itemName, person, changePerson, editItem }) {
  function handleRemoveItem() {
    const newPerson = JSON.parse(JSON.stringify(person));
    for (let i = 0; i < newPerson[topic].length; i++) {
      if (newPerson[topic].id === id) {
        newPerson[topic].splice(i, 1);
      }
    }
    changePerson(newPerson);
  }

  return (
    <div className="additional-info-editor__item-preview">
      <h3 className="additional-info-editor__item-name" onClick={() => editItem(id)}>{itemName}</h3>
      <button
        className="additional-info-editor__remove-item-button"
        type="button"
        onClick={handleRemoveItem}
      >
        <svg
          className="additional-info-editor__remove-item-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="var(--red-clr)"
        >
          <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
      </button>
    </div>
  );
}

export default ItemPreview;
