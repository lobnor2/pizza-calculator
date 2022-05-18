import pizzaimage from "./pizza.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-image">
          <img src={pizzaimage} alt="#" />
          <h1>Pizza Calculator App</h1>
        </div>
        <div className="container-inputs">
          <h1>1 pizza needed</h1>
          <label>Number of People</label>
          <input
            type="number"
            min="1"
            max="50"
            placeholder="Number of people"
          />
          <label>Slices Per Person</label>
          <input
            type="number"
            min="1"
            max="50"
            placeholder="Slices Per Person"
          />
          <label>Total Slices of Pizza</label>
          <input
            type="number"
            min="1"
            max="50"
            placeholder="Total Slices of Pizza"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
