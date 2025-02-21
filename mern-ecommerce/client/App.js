import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Login = () => (
  <div>
    <h2>Login</h2>
    {/* Add your login form here */}
  </div>
);

const Signup = () => (
  <div>
    <h2>Signup</h2>
    {/* Add your signup form here */}
  </div>
);

const App = () => (
  <Router>
    <div>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  </Router>
);

export default App;

