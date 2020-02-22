import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery/Query';
import Deliveryman from '~/pages/Deliveryman/Query';
import Recipient from '~/pages/Recipient/Query';
import Problem from '~/pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      {/* <Route path="/register" component={SignUp} /> */}

      <Route path="/delivery" component={Delivery} />
      <Route path="/deliveryman" component={Deliveryman} />
      <Route path="/recipient" component={Recipient} />
      <Route path="/problem" component={Problem} />
    </Switch>
  );
}
