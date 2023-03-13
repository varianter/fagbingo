import "./styles.css";
import BingoSquare from "./components/BingoSquare";
import BingoPrize from "./components/BingoPrize";
import inputValues from "./Data/inputValues.json";
import prizeValues from "./Data/prizeValues.json";

function App() {
  return (
    <div className="App">
      <section>
        <h1>Fagbingo #1</h1>
        <p>Desember - Mars 2023</p>
      </section>

      <section className="container">
        {inputValues.map((value) => (
          <BingoSquare task={value} key={value} />
        ))}
      </section>
    </div>
  );
}

export default App;
