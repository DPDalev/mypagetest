import React, { Component } from 'react';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import AllRoutes from './Components/AllRoutes';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    );
  }
}

