import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Adam Boettcher</h2>
        <a
          className="App-link"
          href="https://mister-bee.github.io/memorygame/"
          target="_blank"
          rel="noopener noreferrer">
          Haga Spooky Click
        </a>
        <a
          className="App-link"
          href="https://kansha.app"
          target="_blank"
          rel="noopener noreferrer">
          Kansha
        </a>
      </header>
      <body>
        <h1>This is where something unexpected might or might not happen.</h1>
      </body>
    </div>
  );
}

export default App;
