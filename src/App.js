import React, { Component } from 'react';

import './App.sass';

//Import Blocks

import Header from './inc/header/Header'

class App extends Component {
  render() {
    return <div className="app">
        <Header />
        <section className="app__container">
          <div className="app__left">
            <h1>It's just waiting</h1>
            <h2>It's just waiting</h2>
            <h3>It's just waiting</h3>
            <h4>It's just waiting</h4>
            <h5>It's just waiting</h5>
            <h6>It's just waiting</h6>
            
          </div>
          <div className="app__right">
            <p>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <hr />
            <a className="button" href="#">
              Anchor button
            </a>
            <button>Button element</button>
            <input type="submit" value="submit input" />
            <input type="button" value="button input" />
            <a className="button button-primary" href="#">
              Anchor button
            </a>
            <button className="button-primary">Button element</button>
            <input className="button-primary" type="submit" value="submit input" />
            <input className="button-primary" type="button" value="button input" />
          </div>
        </section>
      </div>;
  }
}

export default App;
