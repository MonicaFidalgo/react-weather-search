import logo from './logo.svg';
import './App.css';
import SearchEngine from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchEngine />
      </header>
     
    </div>
  );
}

export default App;
