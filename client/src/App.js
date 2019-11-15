import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/bubble-page">Bubble Page</Link>
          </li>
        </ul>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubble-page">
          <Route exact path="/bubble-page" component={BubblePage} />
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;
