import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import DeliveryRegister from '~/pages/DeliveryRegister';
import Delivery from '~/pages/Delivery';
import Deliveryman from '~/pages/Deliveryman';
import DeliverymanRegister from '~/pages/DeliverymanRegister';
import RecipientRegister from '~/pages/RecipientRegister';
import Recipient from '~/pages/Recipient';
import Problem from '~/pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      {/* <Route path="/register" component={SignUp} /> */}

      <Route path="/delivery/:id" component={DeliveryRegister} isPrivate />
      <Route path="/delivery" component={Delivery} isPrivate />
      <Route
        path="/deliveryman/:id"
        component={DeliverymanRegister}
        isPrivate
      />
      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route path="/recipient/:id" component={RecipientRegister} isPrivate />
      <Route path="/recipient" component={Recipient} isPrivate />
      <Route path="/problem" component={Problem} isPrivate />
    </Switch>
  );
}
