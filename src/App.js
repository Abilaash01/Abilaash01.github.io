import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Memberships from './components/Memberships';
import Planner from './components/Planner';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <div className="sections-container">
                <section className="section-right">
                  <div className="section-content-right">
                    <Home />
                  </div>
                </section>
                <section className="section-left">
                  <div className="section-content-left">
                    <About />
                  </div>
                </section>
              </div>
            </Route>
            <Route path="/Memberships">
              <Memberships />
            </Route>
            <Route path="/Planner">
              <Planner />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
