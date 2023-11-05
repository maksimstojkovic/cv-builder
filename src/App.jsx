import Navbar from "./components/Navbar";
import EditableInput from "./components/EditableField";

function App() {
  return (
    <>
      <Navbar />
      <EditableInput initialValue={"blank"} />
    </>
  );
}

export default App;
