import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Unsplash from './pages/Unsplash';
import Youtube from './pages/Youtube';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route exact path="/" component={Home}></Route>
          <Route path="/unsplash" component={Unsplash}></Route>
          <Route path="/youtube" component={Youtube}></Route>
          <Route path="/cart" component={Cart}></Route>
        </div>
      </Router>
    );
  }
}

export default App;