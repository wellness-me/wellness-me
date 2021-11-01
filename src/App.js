import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Form from './components/Form';
import LoginPage from "./components/LoginPage"
import Login from './components/Login';
import Register from './components/Register';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar.jsx'
import Journal from './components/Journal.jsx'
import Sleep from './components/Sleep.jsx'
import Slider from './components/Slider.jsx'
import './App.css';
import React, {useState} from 'react';

const App = () => {
  const [ daySlider, setDaySlider ] = useState(50);
  const [ sleepSlider, setSleepSlider ] = useState(7);
  const [ journalText, setJournalText ] = useState("")
  console.log(sleepSlider)
  console.log(daySlider)
  console.log(journalText)

  return (
    <div className="App">
        <main>
            <Switch>
                {/* <Route path="/" component={LoginPage} exact /> */}
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
                <Route path="/form" component={Form} exact />
            </Switch>
        </main>
    <NavBar />
    <br/>
    <h3 className="greeting">Good afternoon, Eggert.</h3>
    <div className="happiness-slider">
      <h5>How was your day?</h5>
      <Slider value={daySlider} setValue={setDaySlider} />
      <div className="face-icons">
        <div className="face-icon" id="sad-face">:(</div>
        <div className="face-icon" id="happy-face">:)</div>
      </div>
    </div>
    
    <div className="input-form">
      <div className="column 1">
        <Journal value={journalText} setValue={setJournalText} />
      </div>
      <div className="column 2">
        <Sleep value={sleepSlider} setValue={setSleepSlider} />
      </div>
    </div>

    <div id="submit-button">
      <button type="button" class="btn btn-primary">Submit!</button>
    </div>
    
    </div>
  );
}

export default App;
