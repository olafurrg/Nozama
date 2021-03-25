import './Styling/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useStateValue} from './StateProvider';
import Header from "./Header";
import Login from "./Login";
import Home from './Home'
import Checkout from './Checkout';
import Footer from './Footer';
import Sell from './Sell';
import { auth } from './firebase';
import {useEffect} from 'react';

function App() {

  const[{loggedinuser}, dispatch] = useStateValue();

  useEffect(()=>
  {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if(userauth){
        dispatch({
          type: 'SET_LOGIN',
          user: userauth
        })
      }else{
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })
    return () => {
      unsubscribe();
    }
  },[])

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
          <Route path="/sell" >
            <Header />
            <Sell />
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
