import logo from './logo.svg';
import './App.css';
import Dashboard from './component/header/header2';
import Function from './component/demoFile2'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
   var token="token";
  return (
    <div className="App">
    <Router>
     {token==="token"?
      <Dashboard/>
      :<Function/>}   
     
      </Router>
    </div>
  );
}

export default App;
