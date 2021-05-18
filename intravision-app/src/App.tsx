import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Menu from './components/menu';
import DataBase from './pages/database';
import Request from './pages/request';
import Employees from './pages/employees';
import Clients from './pages/clients';
import Settings from './pages/settings/Settings';
import Assets from './pages/assets';
import IntraVision from './pages/intravision';

const App: React.FC = () => {
  console.log('aaa');
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/database" component={DataBase} />
        <Route path="/request" component={Request} />
        <Route path="/employees" component={Employees} />
        <Route path="/clients" component={Clients} />
        <Route path="/assets" component={Assets} />
        <Route path="/settings" component={Settings} />
        <Route path="/" component={IntraVision} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
