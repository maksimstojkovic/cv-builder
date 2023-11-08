import EditableInput from "./EditableInput";

function Field({
  id,
  label = null,
  initialValue = "",
  isTextArea = false,
  placeholder = "",
}) {
  if (label === null) label = id;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <EditableInput
        id={id}
        initialValue={initialValue}
        placeholder={placeholder}
        isTextArea={isTextArea}
      />
    </div>
  );
}

export default Field;
