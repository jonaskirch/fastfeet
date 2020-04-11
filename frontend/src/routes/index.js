import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';
import DeliveryRegister from '~/pages/DeliveryRegister';
import Deliverymen from '~/pages/Deliverymen';
import DeliverymanRegister from '~/pages/DeliverymanRegister';
import Recipients from '~/pages/Recipients';
import RecipientRegister from '~/pages/RecipientRegister';
import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/delivery" exact component={DeliveryRegister} isPrivate />
      <Route
        path="/delivery/:id"
        exact
        component={DeliveryRegister}
        isPrivate
      />
      <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
      <Route
        path="/deliveryman"
        exact
        component={DeliverymanRegister}
        isPrivate
      />
      <Route
        path="/deliveryman/:id"
        exact
        component={DeliverymanRegister}
        isPrivate
      />

      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/recipient" exact component={RecipientRegister} isPrivate />
      <Route
        path="/recipient/:id"
        exact
        component={RecipientRegister}
        isPrivate
      />
      <Route path="/problems" exact component={Problems} isPrivate />

      <Redirect to="/deliveries" />
    </Switch>
  );
}
