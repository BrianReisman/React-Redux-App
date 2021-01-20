import "./App.css";
import PictureDisplay from "./components/PictureDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ready to see me asynchronously pull a picture out of the internet in a completely non-random way?</h1>
        <PictureDisplay />
      </header>
    </div>
  );
}

export default App;
