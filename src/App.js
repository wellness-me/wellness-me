import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Form from './components/Form';
import LoginPage from "./components/LoginPage"
import Login from './components/Login';
import Register from './components/Register';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar.jsx'
import './App.css';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <NavBar />
        <main>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
                <Route path="/form" component={Form} exact />
            </Switch>
        </main>
    </div>
  );
}

export default App;
