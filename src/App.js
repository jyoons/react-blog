// import logo from './logo.svg';
import './App.css';
import Header from './inc/Header';
import Router from './Router';
// import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='contents'>
        <Router/>
      </div>
     
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;