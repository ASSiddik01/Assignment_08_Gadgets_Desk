import logo from "./Logo.png";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Question from "./components/Question/Question";

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
        <Question></Question>
      </div>
    </div>
  );
}

export default App;
