import './css/index.css'
import {BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import TopBanner from './components/TopBanner';
import Home from './components/Home';
import Fixtures from './components/Fixtures';
import Results from './components/Results';
import Team from './components/Team';
import GAACode from './components/GAACode';
import GAAPI from './components/GAAPI';
import QuickLinksNav from './components/QuickLinksNav';
import SponsorsBlock from './components/SponsorsBlock';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
          <TopBanner />
          <TopNavbar />
          <QuickLinksNav />
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
              <Route path="/GAAPI">
                <GAAPI />
              </Route>
              <Route path="/Team" component={Team} />
              <Route path="/GAACode" component={GAACode} />
            </Switch>
          </div>
          <SponsorsBlock />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
