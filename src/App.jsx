
import { CovidApp } from './views/CovidApp/index';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { CovidDetails } from './views/CovidDetails/CovidDetails';
import './assets/scss/global.scss';


export function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/country/:id" render={props => <CovidDetails {...props} />}></Route>
          <Route path="/" component={CovidApp} />
        </Switch>
      </Router>
    </div>
  );
}


