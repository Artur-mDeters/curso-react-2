import Data from "../components/Data";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>imagem no public</h1>
      <img src="/vite.svg" alt="alguma coisa" />
      <h1>imagem em assets</h1>
      <Data />
    </div>
  );
}

export default App;
