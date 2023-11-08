import { useState, Fragment } from "react";
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
        <button
          key={`delete-${id}`}
          type="button"
          className="delete"
          onClick={() =>
            setItems((items) => items.filter((item) => item.id !== id))
          }
        >
          Delete
        </button>
      </>
    );

    setItems([...items, { id: id, elements: newItem }]);
  };

  return (
    <section className={`skills ${items.length ? "" : "empty"}`}>
      <h1>Skills</h1>

      {items.map((item) => {
        return <Fragment key={item.id}>{item.elements}</Fragment>;
      })}

      <button type="button" onClick={() => createItem()}>
        +
      </button>
    </section>
  );
}

export default Skills;
