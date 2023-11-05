import { useState } from "react";

function Navbar() {
  const sections = ["General", "Education", "Experience"];

  return (
    <div className="navbar">
      {sections.map((section) => {
        return (
          <div key={section} className="navbar-item">
            {section}
          </div>
        );
      })}
    </div>
  );
}

function EditableInput() {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Blank");

  if (editMode) {
    return (
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyUp={(event) => {
          if (event.key === "Enter") setEditMode(false);
        }}
      />
    );
  }

  return (
    <>
      <div
        className="field"
        onClick={() => {
          setEditMode(true);
        }}
      >
        {value}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <EditableInput />
    </>
  );
}

export default App;
