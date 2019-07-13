import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ContentLayout } from 'components';

// pages
import {
  OrderQueuePage,
  YourOrderQueuePage,
  NewSubscriptionPage,
  ActivePage,
  RequestedOrdersPage,
  OffersPage,
} from './index';

// components
import { NotFound } from 'elements/statics';

export default function SubscriptionsPage({ match }) {
  return (
    <ContentLayout className="subscriptions">
      <Switch>
        <Route path={`${match.path}/order-queue`} component={OrderQueuePage} />
        <Route path={`${match.path}/your-own-queue`} component={YourOrderQueuePage} />
        <Route path={`${match.path}/new-subscription`} component={NewSubscriptionPage} />
        <Route path={`${match.path}/active`} component={ActivePage} />
        <Route path={`${match.path}/requested-orders`} component={RequestedOrdersPage} />
        <Route path={`${match.path}/offers`} component={OffersPage} />
        <Route exact path={`${match.path}`} component={OrderQueuePage} />
        <Route component={NotFound} />
      </Switch>
    </ContentLayout>
  );
}