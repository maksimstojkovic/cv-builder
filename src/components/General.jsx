import "../styles/General.scss";
import Field from "./Field";
import EditableInput from "./EditableInput";

function General() {
  return (
    <div className="general">
      {/* <Field id="name" label="Name" placeholder="test" />
      <Field id="location" label="Location" />
      <Field id="email" label="Email" />
      <Field id="phone" label="Phone" />
      <Field id="about" label="About" isTextArea="false" /> */}

      <EditableInput id="name" placeholder="Name" />
      <EditableInput id="location" placeholder="Location" />
      <EditableInput id="email" placeholder="Email" />
      <EditableInput id="phone" placeholder="Phone" />
      <EditableInput id="about" placeholder="NamAboute" />
    </div>
  );
}

export default General;
