import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Counters from './components/Counters';
import Functioncounter from '../src/components/FunctionCounter';
import Exopourcentage from './components/Exopourcentage/Exopourcentage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Counters />
          </Route>
          <Route exact path="/use-callback">
            <Exopourcentage />
          </Route>
          <Route exact path="/use-effect">
            <Functioncounter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
