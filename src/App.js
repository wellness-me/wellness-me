import NavBar from './components/NavBar.jsx'
import Journal from './components/Journal.jsx'
import Sleep from './components/Sleep.jsx'
import Slider from './components/Slider.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <br/>
    <h3 className="greeting">Good afternoon, Eggert.</h3>
    <div className="happiness-slider">
      <h5>How was your day?</h5>
      <Slider />
      <div className="face-icons">
        <div className="face-icon" id="sad-face">:(</div>
        <div className="face-icon" id="happy-face">:)</div>
      </div>
    </div>
    
    <div className="input-form">
      <div className="column 1">
        <Journal />
      </div>
      <div className="column 2">
        <Sleep />
      </div>
    </div>

    <div id="submit-button">
      <button type="button" class="btn btn-primary">Submit!</button>
    </div>
    
    </div>
  );
}
export default App;
