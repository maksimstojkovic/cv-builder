import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditableInput from "./EditableInput";

function Skills() {
  const [items, setItems] = useState([]);

  const createItem = () => {
    const id = uuidv4();
    const newItem = (
      <>
        <EditableInput
          key={`type-${id}`}
          id={`type-${id}`}
          placeholder="Type"
        />
        <EditableInput
          key={`description-${id}`}
          id={`description-${id}`}
          placeholder="Description"
        />
        <button type="button" className="delete" onClick={() => deleteItem(id)}>
          Delete
        </button>
      </>
    );

    setItems([...items, { id: id, elements: newItem }]);
  };

  const deleteItem = (id) => {
    const newList = items.filter((item) => item.id !== id);

    setItems(newList);
  };

  return (
    <section className="skills">
      <h1>Skills</h1>

      {items.map((item) => {
        return item.elements;
      })}

      <button type="button" onClick={() => createItem()}>
        +
      </button>
    </section>
  );
}

export default Skills;
