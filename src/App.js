import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MaSelection from './pages/MaSelection';
import TotalRandom from './pages/TotalRandom';
import Filtre from './pages/Filtre';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/filtre' component={Filtre}/>
        <Route path='/totalRandom' component={TotalRandom}/>
        <Route path='/MaSelection' component={MaSelection}/>
      </Switch>
    </div>
  );
}

export default App;
