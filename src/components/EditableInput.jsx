import "../styles/EditableInput.scss";
import { useState } from "react";

function EditableInput({
  id,
  initialValue = "",
  placeholder = "",
  isTextArea = false,
}) {
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

  const cls = `editable-input ${id} ${editMode ? "edit" : "value"} ${
    isTextArea ? "textarea" : ""
  } ${value === "" ? "placeholder" : ""}`;

  if (editMode) {
    if (isTextArea) {
      return (
        <div className={cls}>
          <textarea
            name={id}
            value={value}
            placeholder={placeholder}
            onChange={(event) => setValue(event.target.value)}
            onBlur={(event) => {
              if (
                !event.relatedTarget ||
                event.relatedTarget.nodeName !== "BUTTON"
              ) {
                cancelEdit();
              }
            }}
            autoFocus
          />
          <button type="button" className="save" onClick={saveEdit}>
            Save
          </button>
          <button type="button" className="cancel" onClick={cancelEdit}>
            Cancel
          </button>
        </div>
      );
    } else {
      return (
        <div className={cls}>
          <input
            type="text"
            name={id}
            value={value}
            placeholder={placeholder}
            onChange={(event) => setValue(event.target.value)}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                setValue;
                saveEdit();
              }
            }}
            onBlur={(event) => {
              if (
                !event.relatedTarget ||
                event.relatedTarget.nodeName !== "BUTTON"
              ) {
                cancelEdit();
              }
            }}
            autoFocus
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
  }

  return (
    <div className={cls} onClick={startEdit}>
      <p>{value === "" ? placeholder : value}</p>
    </div>
  );
}

export default EditableInput;
