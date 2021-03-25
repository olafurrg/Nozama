import './Styling/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from "./Header";
import Login from "./Login";
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="App">     
        <Switch>
          <Route path="/checkout" >
           <Header/>
            <h1>This is checkout</h1>
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/" >
            <Header />
            <Home />
          </Route>
          
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
