import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import GoodsInfo from './pages/GoodsInfo'
import Login from './pages/Login'
import './assets/css/App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/GoodsInfo/:id" component={GoodsInfo} />
        <Route path="/Login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
