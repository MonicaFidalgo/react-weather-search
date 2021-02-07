import logo from './logo.svg';
import './App.css';
import SearchEngine from "./Search";

function App() {
  return (
    <div className="App">
      <main className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchEngine />  
      </main>
      <footer> <p>Check my project at <a href="https://github.com/MonicaFidalgo/react-weather-search" className="App-link">Github</a></p></footer>
    </div>
  );
}

export default App;
