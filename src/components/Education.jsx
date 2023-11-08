import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditableInput from "./EditableInput";

function Education() {
  const [items, setItems] = useState([]);

  const createItem = () => {
    const id = uuidv4();
    const newItem = (
      <div key={id} className="education-item column">
        <div className="row">
          <EditableInput
            id={`school-${id}`}
            placeholder="School / University"
          />
          <EditableInput id={`location-${id}`} placeholder="Location" />
        </div>
        <div className="row">
          <EditableInput
            id={`award-${id}`}
            placeholder="Degree / Certificate"
          />
          <div className="dates">
            <EditableInput id={`start-${id}`} placeholder="Start Date" />
            <p>-</p>
            <EditableInput id={`end-${id}`} placeholder="End Date" />
          </div>
        </div>
        <div className="row">
          <EditableInput
            id={`description-${id}`}
            placeholder="Description"
            isTextArea={true}
          />
        </div>
        <button type="button" className="delete" onClick={() => deleteItem(id)}>
          Delete
        </button>
      </div>
    );

    setItems([...items, { id: id, elements: newItem }]);
  };

  const deleteItem = (id) => {
    const newList = items.filter((item) => item.id !== id);

    setItems(newList);
  };

  return (
    <section className="education">
      <h1>Education</h1>

      {items.map((item) => {
        return item.elements;
      })}

      <button type="button" onClick={() => createItem()}>
        +
      </button>
    </section>
  );
}

export default Education;
