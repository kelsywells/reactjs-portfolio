import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <div className="navigation">
          <Link to="/" className="item">Home</Link>
          <Link to="/about" className="item">About</Link>
          <Link to="/portfolio" className="item">Portfolio</Link>
          <Link to="/contact" className="item">Contact</Link>
        </div>

        <Route exact path="/" component={Header} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />

      </div>
    </BrowserRouter>
  );
}

export default App;
