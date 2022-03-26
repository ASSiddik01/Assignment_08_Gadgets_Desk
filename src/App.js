import logo from "./Logo.png";
import "./App.css";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      {/* Site Header */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-4">
            <img width={150} src={logo} alt="" />
          </div>
        </div>
      </div>
      {/* main */}
      <div className="container-fluid">
          <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
