import EditableInput from "./EditableInput";

function General() {
  return (
    <section className="general">
      <div className="column">
        <div className="row">
          <EditableInput id="name" placeholder="Name" />
        </div>
        <div className="row">
          <EditableInput id="location" placeholder="Location" />
          <EditableInput id="email" placeholder="Email" />
          <EditableInput id="phone" placeholder="Phone" />
        </div>
        <div className="row">
          <EditableInput id="about" placeholder="About" isTextArea={true} />
        </div>
      </div>
    </section>
  );
}

export default General;
