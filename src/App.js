import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Form from './components/InputForms/Form';
import LoginPage from "./components/Auth/LoginPage"
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Analytics from './components/Charts/Analytics';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar.jsx'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
        <main>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
                <ProtectedRoute path="/form" component={Form} exact />
                <ProtectedRoute path="/analytics" component={Analytics} exact />
            </Switch>
        </main>
    </div>
  );
}

export default App;
