import logo from './logo.svg';
import './App.css';
import MiModulo from './MiModulo'

function App() {

  return (
    <div className="App">
      <MiModulo />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo Coders!
        </p>
        <h3>REACT JS CODERHOUSE</h3>
      </header>
    </div>
  );
}

export default App;
