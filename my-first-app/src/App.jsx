import "./App.css";
import logo from "./assets/logo.png"
import icon01 from "./assets/icon01.png"
import icon02 from "./assets/icon02.png"
import icon03 from "./assets/icon03.png"
import icon04 from "./assets/icon04.png"
import menu from "./assets/iconNav.png"

// Image paths are going to be resolved by the browser making a request for each image
// And the webpack server serving each image from the "public" folder
// Therefore we specify them as endpoints (not as the paths in our system)

function App() {
  return (
    <div className="App">
      <main>
        <nav>
          <img src={logo} alt="logo" />
          <img src={menu} className="toggle" alt="menu" />
        </nav>

        <section className="content">
          <div>
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become a
              Ninja Developer.
            </p>
            <button>Awesome!</button>
          </div>
        </section>
      </main>

      <section className="card-panel">
        <div className="card">
          {/* OR <img src="/images/icon1.png" alt="" /> */}
          <img src={icon01} alt="illustration" />
          <h4 className="card-title">Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="card">
          {/* OR <img src="/images/icon2.png" alt="" /> */}
          <img src={icon02} alt="illustration" />
          <h4 className="card-title">Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="card">
          {/* OR <img src="/images/icon3.png" alt="" /> */}
          <img src={icon03} alt="illustration" />
          <h4 className="card-title">Single-Way</h4>
          <p>A set of immutable values are passed to the components.</p>
        </div>

        <div className="card">
          {/* OR <img src="/images/icon4.png" alt="" /> */}
          <img src={icon04} alt="illustration" />
          <h4 className="card-title">JSX</h4>
          <p>Statically-typed, design to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

// Export the component using the ES6 export syntax
export default App;
