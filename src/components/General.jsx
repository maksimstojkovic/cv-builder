import "../styles/General.scss";
import Field from "./Field";

function General() {
  return (
    <div className="general">
      <Field id="name" label="Name" />
      <Field id="location" label="Location" />
      <Field id="email" label="Email" />
      <Field id="phone" label="Phone" />
      <Field id="about" label="About" isTextArea="false" />
    </div>
  );
}

export default General;
