import { useState } from "react";

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
      <div className="Field">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") saveEdit();
          }}
        />
        <button type="button" className="save-edit" onClick={saveEdit}>
          Save
        </button>
        <button type="button" className="cancel-edit" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="field" onClick={startEdit}>
      {value}
    </div>
  );
}

export default EditableInput;
