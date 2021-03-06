import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import SaveDeliveryMan from '~/pages/DeliveryMan/Save';
import EditDeliveryMan from '~/pages/DeliveryMan/Edit';
import DeliveryMans from '~/pages/DeliveryMan/List';

import SaveOrder from '~/pages/Order/Save';
import EditOrder from '~/pages/Order/Edit';
import Orders from '~/pages/Order/List';

import SaveRecipient from '~/pages/Recipient/Save';
import EditRecipient from '~/pages/Recipient/Edit';
import Recipients from '~/pages/Recipient/List';

import Problems from '~/pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/save/order" exact component={SaveOrder} isPrivate />
      <Route path="/save/order/:id" component={EditOrder} isPrivate />
      <Route path="/orders" component={Orders} isPrivate />

      <Route
        path="/save/deliveryman"
        exact
        component={SaveDeliveryMan}
        isPrivate
      />
      <Route
        path="/save/deliveryman/:id"
        component={EditDeliveryMan}
        isPrivate
      />
      <Route path="/deliverymans" component={DeliveryMans} isPrivate />

      <Route path="/save/recipient" exact component={SaveRecipient} isPrivate />
      <Route path="/save/recipient/:id" component={EditRecipient} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />

      <Route path="/problems" component={Problems} isPrivate />

      <Route path="/" component={() => <h4>404</h4>} />
    </Switch>
  );
}
