import './Styling/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from "./Header";
import Login from "./Login";
import Home from './Home'
import Checkout from './Checkout';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">     
        <Switch>
          <Route path="/checkout" >
           <Header/>
            <Checkout />
            <Footer/>
          </Route>
          <Route path="/login" >
            <Login />
            <Footer/>
          </Route>
          <Route path="/" >
            <Header />
            <Home />
            <Footer/>
          </Route>
          
        </Switch>
        
      </div>
    </Router>
    
    
  );
}

export default App;
