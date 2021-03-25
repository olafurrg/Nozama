import './App.css';
import Header from "./Header";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <h1>Hello world, Welcome to Nozama</h1>
      </div>
    </Router>
    
  );
}

export default App;
