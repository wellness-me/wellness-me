import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Navbar />
      <Form />

    </div>
  );
}

export default App;
