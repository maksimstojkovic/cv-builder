import "../styles/General.scss";
import Field from "./Field";

function General() {
  return (
    <div className="general">
      <Field id="name" label="Name" initialValue="" />
    </div>
  );
}

export default General;
