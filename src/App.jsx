import Navbar from "./components/Navbar";
import EditableField from "./components/EditableField";

function App() {
  return (
    <>
      <Navbar />
      <EditableField initialValue={"blank"} />
    </>
  );
}

export default App;
