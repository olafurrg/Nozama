import './Styling/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from "./Header";
import Login from "./Login";
import Home from './Home'
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">     
        <Switch>
          <Route path="/checkout" >
           <Header/>
            <Checkout />
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
