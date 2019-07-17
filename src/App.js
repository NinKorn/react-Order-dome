import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'
import GoodsInfo from './components/GoodsInfo'
import './assets/css/App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/GoodsInfo" component={GoodsInfo} />
      </div>
    </Router>
  );
}

export default App;
