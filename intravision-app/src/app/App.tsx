import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Menu from '../components/menu';
import KnowledgeBase from '../pages/knowledgeBase';
import Requests from '../pages/requests';
import Employees from '../pages/employees';
import Clients from '../pages/clients';
import Settings from '../pages/settings';
import Assets from '../pages/assets';
import IntraVision from '../pages/intravision';
import StyledApp from './styled';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StyledApp>
        <Menu />
        <Switch>
          <Route path="/knowledge-base" component={KnowledgeBase} />
          <Route path="/request" component={Requests} />
          <Route path="/employees" component={Employees} />
          <Route path="/clients" component={Clients} />
          <Route path="/assets" component={Assets} />
          <Route path="/settings" component={Settings} />
          <Route path="/" component={IntraVision} />
        </Switch>
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
