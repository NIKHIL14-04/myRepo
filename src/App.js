import React from 'react';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import About from './componets/About';
import Service from './componets/Service';
import Contact from './componets/Contact';
import Footer from './componets/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  
} from "react-router-dom";
const App = () => {
  return (
  <>
  <Router>
    <Navbar/>
    <Switch>
    <Route   exact path='/Home'><Home/></Route>
    <Route  exact path='/About'><About/></Route>
    <Route  exact path='/Service'><Service/></Route>
    <Route  exact path='/Contact'><Contact/></Route>
    <Redirect to ="/Home"/>
    
    </Switch>
    </Router>
    <Footer/>
    </>
  )
};
export default App;

