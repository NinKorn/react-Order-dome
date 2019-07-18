import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from './pages/Home'
// import GoodsInfo from './pages/GoodsInfo'
// import Login from './pages/Login'
import './assets/css/App.css';
import routes from './router'

function App() {
  return (
    <Router>
      <div>
        <div>
          <Link to='/'>首页</Link>
          <Link to='/user'>用户</Link>
        </div>


        {/* <Route exact path="/" component={Home} />
        <Route path="/GoodsInfo/:id" component={GoodsInfo} />
        <Route path="/Login" component={Login} /> */}


        {
          routes.map((route, key) => {
            if (route.exact) {
              return (
                <Route
                  exact
                  key={key}
                  path={route.path}
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )} />
              )
            }
            return (
              <Route
                key={key}
                path={route.path}
                render={props => (
                  <route.component {...props} routes={route.routes} />
                )} />
            )
          })
        }
      </div>
    </Router>
  );
}

export default App;
