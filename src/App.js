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
import { Button } from 'semantic-ui-react';

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
          <div className="App">
            <Button onClick={toggleTheme} style={{marginLeft: "18px", marginTop: "10px"}}>
              {isDarkTheme ?
                <span aria-label="Light mode" role="img">Go Light Mode</span> :
                <span aria-label="Dark mode" role="img">Go Dark Mode</span>}
            </Button>
            <NavBar className="nav"/>
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
