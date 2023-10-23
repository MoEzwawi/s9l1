import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent mySrc="http://picsum.photos/220" myAlt="A random picture" />
        <ImageComponent mySrc="http://picsum.photos/400/200" myAlt="A random picture" />
        {/* <ButtonComponent buttonText="Ciao" /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent buttonText="Forza Juve" />
      </header>
    </div>
  );
}

export default App;
