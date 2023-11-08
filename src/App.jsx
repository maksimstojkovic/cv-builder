import General from "./components/General";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Activities from "./components/Activities";
import Skills from "./components/Skills";

import { flushSync } from "react-dom";

function App() {
  return (
    <>
      <header>
        <h2>CV Builder</h2>
        <div className="controls">
          <button
            type="button"
            onClick={() => {
              // Force react to render DOM
              flushSync(() => {
                document
                  .querySelectorAll("button.save")
                  .forEach((button) => button.click());
              });

              window.print();
            }}
          >
            Print
          </button>
        </div>
      </header>

      <div className="content">
        <div className="wrapper">
          <General />
          <Experience />
          <Education />
          <Activities />
          <Skills />
        </div>
      </div>

      <footer>
        &copy; Copyright {new Date().getFullYear()}, Maksim Stojkovic
      </footer>
    </>
  );
}

export default App;
