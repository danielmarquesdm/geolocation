import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Counter from './pages/Counter';
// import Report from './pages/Report';
// import Climate from './pages/Climate';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contadores" component={Counter} />
      {/* <Route path="/relatorios" component={Report} /> */}
      {/* <Route path="/clima" component={Climate} /> */}
    </Switch>
  );
}
