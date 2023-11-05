import Navbar from "./components/Navbar";
import Field from "./components/Field";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <section className="general">
          <Field id={"full-name"} label={"Full Name"} initialValue={""} />
        </section>
      </div>
    </>
  );
}

export default App;
