import './App.css';
import './LoginPage.css';
import './SettingsPage.css';
import 'semantic-ui-css/semantic.min.css'
import Form from './components/InputForms/Form';
import LoginPage from "./components/Auth/LoginPage"
import Analytics from './components/Charts/Analytics';
import SettingsPage from './components/Settings/SettingsPage';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './components/Utils/ProtectedRoute';
import NavBar from './components/Utils/NavBar.jsx'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
        <main>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <ProtectedRoute path="/form" component={Form} exact />
                <ProtectedRoute path="/analytics" component={Analytics} exact />
                <ProtectedRoute path="/settings" component={SettingsPage} exact />
            </Switch>
        </main>
    </div>
  );
}

export default App;
