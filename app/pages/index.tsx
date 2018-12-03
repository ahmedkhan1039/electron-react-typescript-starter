import * as React from 'react';
import { Store } from 'react-redux';
import { Route, Switch } from "react-router";
import { ConnectedRouter } from 'react-router-redux';
import { History } from 'history';
import { Provider } from 'react-redux';

import logo from '../logo.svg';

type IRootProp = {
  store: Store<any>;
  history: History,
};

export default function Root(props: IRootProp) {
  return (
    <Provider store={props.store}>
      <ConnectedRouter history={props.history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Electron-React-TypeScript</h1>
      </header>
    </div>
  )
}
