import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import Fixtures from './components/Fixtures';
import Results from './components/Results';
import Patrickswell from './components/Patrickswell';
import Hurling from './components/Hurling';

function App() {
  return (
    <Router>
      <div className="App">
          <TopNavbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Fixtures">
                <Fixtures />
              </Route>
              <Route path="/Results">
                <Results />
              </Route>
              <Route path="/Patrickswell">
                <Patrickswell />
              </Route>
              <Route path="/Hurling">
                <Hurling />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
