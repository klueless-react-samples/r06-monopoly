import { React } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Players, Monopoly } from '../pages';
import { Content } from '.';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/monopoly">
        <Monopoly />
      </Route>
      <Route path="/players">
        <Players />
      </Route>
      <Route>
        <Content title="Page not found" description="Please use the menu above" />
      </Route>
    </Switch>
  );
}
