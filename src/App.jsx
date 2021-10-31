import './App.css';
import DataInputPage from './components/DataInputPage';
import Header from 'Header.jsx'
import UserBox from 'UserBox.jsx'
/**for now fiexed to data input page, later we can make this change, not sure this is the correct control structure. Actually, should prob move header and userBox here */

function App() {
  return (
    <>
      <Header></Header>
      <UserBox></UserBox>
      <DataInputPage></DataInputPage>
    </>
  );
}

export default App;
