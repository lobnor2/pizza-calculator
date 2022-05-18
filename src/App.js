import { useReducer, useMemo } from "react";
import pizzaimage from "./pizza.png";
import "./App.css";

const initialState = {
  numberOfPeople: 0,
  slicesPerPerson: 0,
  slicesPerPizza: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NUMBER_OF_PEOPLE_CHANGE":
      return {
        ...state,
        numberOfPeople: action.payload,
      };
    case "SLICES_PER_PERSON_CHANGE":
      return {
        ...state,
        slicesPerPerson: action.payload,
      };
    case "SLICES_PER_PIZZA_CHANGE":
      return {
        ...state,
        slicesPerPizza: action.payload,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const calculateResult = useMemo(() => {
    const result =
      Math.floor(state.numberOfPeople * state.slicesPerPerson) /
      state.slicesPerPizza;
    if (isNaN(result) || result === Infinity) {
      return "";
    }
    return result;
  }, [state.numberOfPeople, state.slicesPerPerson, state.slicesPerPizza]);

  return (
    <div className="App">
      <h1 className="h1class">Pizza Calculator App</h1>

      <div className="container">
        <div className="container-image">
          <img src={pizzaimage} alt="#" />
        </div>
        <div className="container-inputs">
          <h1>{Math.floor(`${calculateResult}`)} Pizza needed</h1>
          <label>Number of People</label>
          
          <input
            type="number"
            min="1"
            max="50"
            placeholder="Number of people"
            value={state.numberOfPeople || 0}
            onChange={(e) =>
              dispatch({
                type: "NUMBER_OF_PEOPLE_CHANGE",
                payload: +e.target.value,
              })
            }
          />
          <label>Slices Per Person</label>
          <input
            type="number"
            min="1"
            max="50"
            placeholder="Slices Per Person"
            value={state.slicesPerPerson || 0}
            onChange={(e) =>
              dispatch({
                type: "SLICES_PER_PERSON_CHANGE",
                payload: +e.target.value,
              })
            }
          />
          <label>Total Slices of Pizza</label>
          <input
            type="number"
            min="1"
            max="50"
            placeholder="Total Slices of Pizza"
            value={state.slicesPerPizza || 0}
            onChange={(e) =>
              dispatch({
                type: "SLICES_PER_PIZZA_CHANGE",
                payload: +e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
