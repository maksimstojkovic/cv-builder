import { useState } from "react";
import "../styles/EditableInput.scss";

function EditableInput({ initialValue }) {
  const [editMode, setEditMode] = useState(false);
  const [prevValue, setPrevValue] = useState(null);
  const [value, setValue] = useState(initialValue);

  const startEdit = () => {
    setPrevValue(value);
    setEditMode(true);
  };

  const saveEdit = () => {
    setPrevValue(null);
    setEditMode(false);
  };

  const cancelEdit = () => {
    setValue(prevValue);
    saveEdit();
  };

  if (editMode) {
    return (
      <div className="editable-input">
        <input
          type="text"
          name={value}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") saveEdit();
          }}
        />
        <button type="button" className="save" onClick={saveEdit}>
          Save
        </button>
        <button type="button" className="cancel" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="editable-input" onClick={startEdit}>
      <div className="value">{value}</div>
    </div>
  );
}

export default EditableInput;
