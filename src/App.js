import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './App/Header';
import About from './App/About';
import Portfolio from './App/Portfolio';
import Contact from './App/Contact';


function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Route exact path="/" component={Header} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />

        <div className="navigation">
          <Link to="/" className="item">Home</Link>
          <Link to="/about" className="item">About</Link>
          <Link to="/portfolio" className="item">Portfolio</Link>
          <Link to="/contact" className="item">Contact</Link>
        </div>

        <div className="container">
          <Header />
          <About />
          <Portfolio />
          <Contact />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
