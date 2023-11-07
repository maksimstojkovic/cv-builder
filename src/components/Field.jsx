import "../styles/Field.scss";
import EditableInput from "./EditableInput";

function Field({ id, label = null, initialValue = "", isTextArea = false }) {
  if (label === null) label = id;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <EditableInput
        id={id}
        initialValue={initialValue}
        isTextArea={isTextArea}
      />
    </div>
  );
}

export default Field;
