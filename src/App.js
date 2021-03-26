import './Styling/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useStateValue} from './StateProvider';
import Header from "./Components/Header";
import Login from "./Components/Login";
import Home from './Components/Home'
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import Sell from './Components/Sell';
import { auth } from './firebase';
import {useEffect} from 'react';
import Review from './Components/Review';

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
          <Route path="/info" >
            <Header />
            <Review />
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
