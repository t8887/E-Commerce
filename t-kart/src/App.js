import React from 'react';
import './App.css';
import Header from './Header.js';
import Home from "./Home";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Checkout from "./Checkout.js"

function App() {
    
      return (
        <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route>
              <Home />
            </Route>
          </Switch>
          
        </div>
        </Router>
      );
}

export default App;
