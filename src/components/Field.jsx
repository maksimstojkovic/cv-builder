import "../styles/Field.scss";
import EditableInput from "./EditableInput";

function Field({ id, label, initialValue }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <EditableInput initialValue={initialValue} />
    </div>
  );
}

export default Field;
