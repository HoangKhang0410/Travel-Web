
import './App.css';

import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
function App() {
  return (
    <Router className="App">
      <NavBar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
