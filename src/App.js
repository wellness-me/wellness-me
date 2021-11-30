import './App.css';
import './LoginPage.css';
import './SettingsPage.css';
import './ChartsPage.css';
import 'semantic-ui-css/semantic.min.css';
import Form from './components/InputForms/Form';
import LoginPage from "./components/Auth/LoginPage";
import Analytics from './components/Charts/Analytics';
import SettingsPage from './components/Settings/SettingsPage';

import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './components/Utils/ProtectedRoute';
import NavBar from './components/Utils/NavBar.jsx'
import './App.css';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';


const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
          <div className="App">
            <button onClick={toggleTheme}>
              {isDarkTheme ?
                <span aria-label="Light mode" role="img">🌞</span> :
                <span aria-label="Dark mode" role="img">🌜</span>}
            </button>
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
        </>
     </ThemeProvider>
  );
}

export default App;
